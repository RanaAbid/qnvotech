"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";

export type ThemedSelectOption = { value: string; label: string };
export type ThemedSelectGroup = { group: string; options: ThemedSelectOption[] };

type ThemedSelectProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options?: ThemedSelectOption[];
  groups?: ThemedSelectGroup[];
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  describedBy?: string;
  autoComplete?: string;
};

type FlatOption = ThemedSelectOption & { group?: string };

export function ThemedSelect({
  id,
  name,
  label,
  value,
  onChange,
  options = [],
  groups,
  placeholder,
  required,
  disabled,
  invalid,
  describedBy,
  autoComplete,
}: ThemedSelectProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const flat = useMemo<FlatOption[]>(() => {
    if (groups?.length) {
      return groups.flatMap((group) => group.options.map((option) => ({ ...option, group: group.group })));
    }
    return options;
  }, [groups, options]);

  const selected = flat.find((item) => item.value === value);
  const display = selected?.label ?? placeholder;

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open || activeIndex < 0) return;
    const node = listRef.current?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`);
    node?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  function openList(index = Math.max(0, flat.findIndex((item) => item.value === value))) {
    if (disabled || flat.length === 0) return;
    setOpen(true);
    setActiveIndex(index >= 0 ? index : 0);
  }

  function choose(next: string) {
    onChange(next);
    setOpen(false);
  }

  function onTriggerKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) openList();
      else if (event.key === "ArrowDown") setActiveIndex((current) => Math.min(flat.length - 1, current + 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) openList(flat.length - 1);
      else setActiveIndex((current) => Math.max(0, current - 1));
    } else if (event.key === "Home") {
      event.preventDefault();
      if (open) setActiveIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      if (open) setActiveIndex(flat.length - 1);
    } else if (event.key === "Enter" && open && activeIndex >= 0) {
      event.preventDefault();
      choose(flat[activeIndex].value);
    }
  }

  let lastGroup = "";

  return (
    <div className={`themed-select${open ? " is-open" : ""}${disabled ? " is-disabled" : ""}`} ref={rootRef}>
      <input type="hidden" name={name} value={value} required={required} autoComplete={autoComplete} />
      <button
        type="button"
        id={id}
        className={`field themed-select-trigger${invalid ? " is-invalid" : ""}${!selected ? " is-placeholder" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        aria-required={required || undefined}
        aria-label={label}
        disabled={disabled}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onTriggerKeyDown}
      >
        <span>{display}</span>
      </button>
      {open ? (
        <ul
          ref={listRef}
          id={listId}
          className="themed-select-menu"
          role="listbox"
          aria-label={label}
          tabIndex={-1}
        >
          {flat.map((item, index) => {
            const showGroup = Boolean(item.group && item.group !== lastGroup);
            if (item.group) lastGroup = item.group;
            return (
              <li key={`${item.group ?? "flat"}-${item.value}`} role="presentation">
                {showGroup ? (
                  <div className="themed-select-group" aria-hidden="true">
                    {item.group}
                  </div>
                ) : null}
                <button
                  type="button"
                  role="option"
                  data-index={index}
                  className={`themed-select-option${item.value === value ? " is-selected" : ""}${
                    index === activeIndex ? " is-active" : ""
                  }`}
                  aria-selected={item.value === value}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => choose(item.value)}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

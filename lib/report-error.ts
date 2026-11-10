export async function reportServerError(message: string): Promise<void> {
  const dsn = process.env.SENTRY_DSN?.trim();
  if (!dsn) return;

  try {
    const url = new URL(dsn);
    const projectId = url.pathname.replace(/\//g, "");
    if (!projectId || !url.username) return;
    const store = `${url.protocol}//${url.host}/api/${projectId}/store/?sentry_version=7&sentry_key=${encodeURIComponent(url.username)}`;
    await fetch(store, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: { formatted: message.slice(0, 180) },
        level: "error",
        platform: "node",
        timestamp: Date.now() / 1000,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(2000),
    });
  } catch {
    return;
  }
}

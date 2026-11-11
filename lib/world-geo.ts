/**
 * Worldwide contact regions and ISO 3166-1 countries (English labels).
 * Values are stable slugs for form validation and email labels.
 * Middle East is listed separately for business routing (not duplicated under Asia/Africa).
 */

export type GeoOption = { value: string; label: string };

export const worldRegions = [
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "middle-east", label: "Middle East" },
  { value: "north-america", label: "North America" },
  { value: "latin-america-caribbean", label: "Latin America & Caribbean" },
  { value: "oceania", label: "Oceania" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
] as const;

export type WorldRegion = (typeof worldRegions)[number]["value"];

const preferNot: GeoOption = { value: "prefer-not-to-say", label: "Prefer not to say" };
const other: GeoOption = { value: "other", label: "Other / not listed" };

const africa: GeoOption[] = [
  { value: "algeria", label: "Algeria" },
  { value: "angola", label: "Angola" },
  { value: "benin", label: "Benin" },
  { value: "botswana", label: "Botswana" },
  { value: "burkina-faso", label: "Burkina Faso" },
  { value: "burundi", label: "Burundi" },
  { value: "cabo-verde", label: "Cabo Verde" },
  { value: "cameroon", label: "Cameroon" },
  { value: "central-african-republic", label: "Central African Republic" },
  { value: "chad", label: "Chad" },
  { value: "comoros", label: "Comoros" },
  { value: "congo", label: "Congo" },
  { value: "congo-democratic-republic", label: "Congo (Democratic Republic)" },
  { value: "cote-divoire", label: "Côte d'Ivoire" },
  { value: "djibouti", label: "Djibouti" },
  { value: "equatorial-guinea", label: "Equatorial Guinea" },
  { value: "eritrea", label: "Eritrea" },
  { value: "eswatini", label: "Eswatini" },
  { value: "ethiopia", label: "Ethiopia" },
  { value: "gabon", label: "Gabon" },
  { value: "gambia", label: "Gambia" },
  { value: "ghana", label: "Ghana" },
  { value: "guinea", label: "Guinea" },
  { value: "guinea-bissau", label: "Guinea-Bissau" },
  { value: "kenya", label: "Kenya" },
  { value: "lesotho", label: "Lesotho" },
  { value: "liberia", label: "Liberia" },
  { value: "libya", label: "Libya" },
  { value: "madagascar", label: "Madagascar" },
  { value: "malawi", label: "Malawi" },
  { value: "mali", label: "Mali" },
  { value: "mauritania", label: "Mauritania" },
  { value: "mauritius", label: "Mauritius" },
  { value: "morocco", label: "Morocco" },
  { value: "mozambique", label: "Mozambique" },
  { value: "namibia", label: "Namibia" },
  { value: "niger", label: "Niger" },
  { value: "nigeria", label: "Nigeria" },
  { value: "rwanda", label: "Rwanda" },
  { value: "sao-tome-and-principe", label: "São Tomé and Príncipe" },
  { value: "senegal", label: "Senegal" },
  { value: "seychelles", label: "Seychelles" },
  { value: "sierra-leone", label: "Sierra Leone" },
  { value: "somalia", label: "Somalia" },
  { value: "south-africa", label: "South Africa" },
  { value: "south-sudan", label: "South Sudan" },
  { value: "sudan", label: "Sudan" },
  { value: "tanzania", label: "Tanzania" },
  { value: "togo", label: "Togo" },
  { value: "tunisia", label: "Tunisia" },
  { value: "uganda", label: "Uganda" },
  { value: "zambia", label: "Zambia" },
  { value: "zimbabwe", label: "Zimbabwe" },
  other,
  preferNot,
];

const asia: GeoOption[] = [
  { value: "afghanistan", label: "Afghanistan" },
  { value: "armenia", label: "Armenia" },
  { value: "azerbaijan", label: "Azerbaijan" },
  { value: "bangladesh", label: "Bangladesh" },
  { value: "bhutan", label: "Bhutan" },
  { value: "brunei", label: "Brunei" },
  { value: "cambodia", label: "Cambodia" },
  { value: "china", label: "China" },
  { value: "georgia", label: "Georgia" },
  { value: "hong-kong", label: "Hong Kong" },
  { value: "india", label: "India" },
  { value: "indonesia", label: "Indonesia" },
  { value: "japan", label: "Japan" },
  { value: "kazakhstan", label: "Kazakhstan" },
  { value: "kyrgyzstan", label: "Kyrgyzstan" },
  { value: "laos", label: "Laos" },
  { value: "macao", label: "Macao" },
  { value: "malaysia", label: "Malaysia" },
  { value: "maldives", label: "Maldives" },
  { value: "mongolia", label: "Mongolia" },
  { value: "myanmar", label: "Myanmar" },
  { value: "nepal", label: "Nepal" },
  { value: "north-korea", label: "North Korea" },
  { value: "pakistan", label: "Pakistan" },
  { value: "philippines", label: "Philippines" },
  { value: "singapore", label: "Singapore" },
  { value: "south-korea", label: "South Korea" },
  { value: "sri-lanka", label: "Sri Lanka" },
  { value: "taiwan", label: "Taiwan" },
  { value: "tajikistan", label: "Tajikistan" },
  { value: "thailand", label: "Thailand" },
  { value: "timor-leste", label: "Timor-Leste" },
  { value: "turkmenistan", label: "Turkmenistan" },
  { value: "uzbekistan", label: "Uzbekistan" },
  { value: "vietnam", label: "Vietnam" },
  other,
  preferNot,
];

const europe: GeoOption[] = [
  { value: "albania", label: "Albania" },
  { value: "andorra", label: "Andorra" },
  { value: "austria", label: "Austria" },
  { value: "belarus", label: "Belarus" },
  { value: "belgium", label: "Belgium" },
  { value: "bosnia-and-herzegovina", label: "Bosnia and Herzegovina" },
  { value: "bulgaria", label: "Bulgaria" },
  { value: "croatia", label: "Croatia" },
  { value: "cyprus", label: "Cyprus" },
  { value: "czech-republic", label: "Czech Republic" },
  { value: "denmark", label: "Denmark" },
  { value: "estonia", label: "Estonia" },
  { value: "finland", label: "Finland" },
  { value: "france", label: "France" },
  { value: "germany", label: "Germany" },
  { value: "greece", label: "Greece" },
  { value: "hungary", label: "Hungary" },
  { value: "iceland", label: "Iceland" },
  { value: "ireland", label: "Ireland" },
  { value: "italy", label: "Italy" },
  { value: "kosovo", label: "Kosovo" },
  { value: "latvia", label: "Latvia" },
  { value: "liechtenstein", label: "Liechtenstein" },
  { value: "lithuania", label: "Lithuania" },
  { value: "luxembourg", label: "Luxembourg" },
  { value: "malta", label: "Malta" },
  { value: "moldova", label: "Moldova" },
  { value: "monaco", label: "Monaco" },
  { value: "montenegro", label: "Montenegro" },
  { value: "netherlands", label: "Netherlands" },
  { value: "north-macedonia", label: "North Macedonia" },
  { value: "norway", label: "Norway" },
  { value: "poland", label: "Poland" },
  { value: "portugal", label: "Portugal" },
  { value: "romania", label: "Romania" },
  { value: "russia", label: "Russia" },
  { value: "san-marino", label: "San Marino" },
  { value: "serbia", label: "Serbia" },
  { value: "slovakia", label: "Slovakia" },
  { value: "slovenia", label: "Slovenia" },
  { value: "spain", label: "Spain" },
  { value: "sweden", label: "Sweden" },
  { value: "switzerland", label: "Switzerland" },
  { value: "turkey", label: "Turkey" },
  { value: "ukraine", label: "Ukraine" },
  { value: "united-kingdom", label: "United Kingdom" },
  { value: "vatican-city", label: "Vatican City" },
  other,
  preferNot,
];

const middleEast: GeoOption[] = [
  { value: "bahrain", label: "Bahrain" },
  { value: "egypt", label: "Egypt" },
  { value: "iran", label: "Iran" },
  { value: "iraq", label: "Iraq" },
  { value: "israel", label: "Israel" },
  { value: "jordan", label: "Jordan" },
  { value: "kuwait", label: "Kuwait" },
  { value: "lebanon", label: "Lebanon" },
  { value: "oman", label: "Oman" },
  { value: "palestine", label: "Palestine" },
  { value: "qatar", label: "Qatar" },
  { value: "saudi-arabia", label: "Saudi Arabia" },
  { value: "syria", label: "Syria" },
  { value: "united-arab-emirates", label: "United Arab Emirates" },
  { value: "yemen", label: "Yemen" },
  other,
  preferNot,
];

const northAmerica: GeoOption[] = [
  { value: "canada", label: "Canada" },
  { value: "united-states", label: "United States" },
  { value: "mexico", label: "Mexico" },
  { value: "bermuda", label: "Bermuda" },
  { value: "greenland", label: "Greenland" },
  other,
  preferNot,
];

const latinAmericaCaribbean: GeoOption[] = [
  { value: "antigua-and-barbuda", label: "Antigua and Barbuda" },
  { value: "argentina", label: "Argentina" },
  { value: "bahamas", label: "Bahamas" },
  { value: "barbados", label: "Barbados" },
  { value: "belize", label: "Belize" },
  { value: "bolivia", label: "Bolivia" },
  { value: "brazil", label: "Brazil" },
  { value: "chile", label: "Chile" },
  { value: "colombia", label: "Colombia" },
  { value: "costa-rica", label: "Costa Rica" },
  { value: "cuba", label: "Cuba" },
  { value: "dominica", label: "Dominica" },
  { value: "dominican-republic", label: "Dominican Republic" },
  { value: "ecuador", label: "Ecuador" },
  { value: "el-salvador", label: "El Salvador" },
  { value: "grenada", label: "Grenada" },
  { value: "guatemala", label: "Guatemala" },
  { value: "guyana", label: "Guyana" },
  { value: "haiti", label: "Haiti" },
  { value: "honduras", label: "Honduras" },
  { value: "jamaica", label: "Jamaica" },
  { value: "nicaragua", label: "Nicaragua" },
  { value: "panama", label: "Panama" },
  { value: "paraguay", label: "Paraguay" },
  { value: "peru", label: "Peru" },
  { value: "saint-kitts-and-nevis", label: "Saint Kitts and Nevis" },
  { value: "saint-lucia", label: "Saint Lucia" },
  { value: "saint-vincent-and-the-grenadines", label: "Saint Vincent and the Grenadines" },
  { value: "suriname", label: "Suriname" },
  { value: "trinidad-and-tobago", label: "Trinidad and Tobago" },
  { value: "uruguay", label: "Uruguay" },
  { value: "venezuela", label: "Venezuela" },
  other,
  preferNot,
];

const oceania: GeoOption[] = [
  { value: "australia", label: "Australia" },
  { value: "fiji", label: "Fiji" },
  { value: "kiribati", label: "Kiribati" },
  { value: "marshall-islands", label: "Marshall Islands" },
  { value: "micronesia", label: "Micronesia" },
  { value: "nauru", label: "Nauru" },
  { value: "new-zealand", label: "New Zealand" },
  { value: "palau", label: "Palau" },
  { value: "papua-new-guinea", label: "Papua New Guinea" },
  { value: "samoa", label: "Samoa" },
  { value: "solomon-islands", label: "Solomon Islands" },
  { value: "tonga", label: "Tonga" },
  { value: "tuvalu", label: "Tuvalu" },
  { value: "vanuatu", label: "Vanuatu" },
  other,
  preferNot,
];

export const countriesByRegion: Record<WorldRegion, GeoOption[]> = {
  africa,
  asia,
  europe,
  "middle-east": middleEast,
  "north-america": northAmerica,
  "latin-america-caribbean": latinAmericaCaribbean,
  oceania,
  "prefer-not-to-say": [preferNot],
};

export function countriesForRegion(region: string): GeoOption[] {
  if (region in countriesByRegion) {
    return countriesByRegion[region as WorldRegion];
  }
  return [];
}

export function isCountryInRegion(region: string, country: string): boolean {
  return countriesForRegion(region).some((item) => item.value === country);
}

export function allWorldCountries(): GeoOption[] {
  const seen = new Map<string, GeoOption>();
  for (const list of Object.values(countriesByRegion)) {
    for (const item of list) {
      if (!seen.has(item.value)) seen.set(item.value, item);
    }
  }
  return [...seen.values()];
}

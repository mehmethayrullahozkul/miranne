/** Formats a numeric amount using the Turkish lira display used by the design. */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(amount);
}

/** Returns a normalized value suitable for case-insensitive Turkish search. */
export function normalizeSearchValue(value: string): string {
  return value.trim().toLocaleLowerCase('tr-TR');
}

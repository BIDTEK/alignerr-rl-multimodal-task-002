const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const compactCurrencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 1,
});

const numberFormatter = new Intl.NumberFormat('en-US');

const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const dateTimeFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

export function formatCurrency(value) {
  return currencyFormatter.format(value);
}

export function formatCompactCurrency(value) {
  return compactCurrencyFormatter.format(value);
}

export function formatNumber(value) {
  return numberFormatter.format(value);
}

// Accepts a percentage value stored as a plain number (e.g. 3.42 => 3.4%).
export function formatPercent(value) {
  return percentFormatter.format(value / 100);
}

export function formatDateTime(isoString) {
  return dateTimeFormatter.format(new Date(isoString));
}

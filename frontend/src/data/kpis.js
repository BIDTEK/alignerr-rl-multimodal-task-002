export const kpisByRange = {
  '7d': [
    { id: 'revenue', label: 'Total Revenue', value: 84560, format: 'currency', delta: 6.2, trend: 'up', compareText: 'vs previous 7 days' },
    { id: 'customers', label: 'Active Customers', value: 1248, format: 'number', delta: 3.1, trend: 'up', compareText: 'vs previous 7 days' },
    { id: 'conversion', label: 'Conversion Rate', value: 3.42, format: 'percent', delta: -0.4, trend: 'down', compareText: 'vs previous 7 days' },
    { id: 'mrr', label: 'Monthly Recurring Revenue', value: 96480, format: 'currency', delta: 4.8, trend: 'up', compareText: 'vs previous 7 days' },
  ],
  '30d': [
    { id: 'revenue', label: 'Total Revenue', value: 286400, format: 'currency', delta: 8.4, trend: 'up', compareText: 'vs previous 30 days' },
    { id: 'customers', label: 'Active Customers', value: 1542, format: 'number', delta: 5.2, trend: 'up', compareText: 'vs previous 30 days' },
    { id: 'conversion', label: 'Conversion Rate', value: 3.68, format: 'percent', delta: 0.9, trend: 'up', compareText: 'vs previous 30 days' },
    { id: 'mrr', label: 'Monthly Recurring Revenue', value: 112750, format: 'currency', delta: 7.1, trend: 'up', compareText: 'vs previous 30 days' },
  ],
  '90d': [
    { id: 'revenue', label: 'Total Revenue', value: 892100, format: 'currency', delta: 11.3, trend: 'up', compareText: 'vs previous 90 days' },
    { id: 'customers', label: 'Active Customers', value: 1980, format: 'number', delta: 8.6, trend: 'up', compareText: 'vs previous 90 days' },
    { id: 'conversion', label: 'Conversion Rate', value: 3.91, format: 'percent', delta: 1.2, trend: 'up', compareText: 'vs previous 90 days' },
    { id: 'mrr', label: 'Monthly Recurring Revenue', value: 135900, format: 'currency', delta: 9.4, trend: 'up', compareText: 'vs previous 90 days' },
  ],
  '12m': [
    { id: 'revenue', label: 'Total Revenue', value: 3845000, format: 'currency', delta: 14.7, trend: 'up', compareText: 'vs previous 12 months' },
    { id: 'customers', label: 'Active Customers', value: 2410, format: 'number', delta: 12.4, trend: 'up', compareText: 'vs previous 12 months' },
    { id: 'conversion', label: 'Conversion Rate', value: 4.15, format: 'percent', delta: 1.8, trend: 'up', compareText: 'vs previous 12 months' },
    { id: 'mrr', label: 'Monthly Recurring Revenue', value: 158200, format: 'currency', delta: 10.9, trend: 'up', compareText: 'vs previous 12 months' },
  ],
};

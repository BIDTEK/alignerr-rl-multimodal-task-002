export const chartSeriesByRange = {
  '7d': {
    label: 'Last 7 days',
    context: 'Daily revenue compared with target over the past week.',
    summary:
      'Daily revenue for the last 7 days, ranging from $8,200 to $13,600, compared with a target between $7,800 and $10,000.',
    points: [
      { label: 'Mon', revenue: 8200, target: 7800 },
      { label: 'Tue', revenue: 9100, target: 8000 },
      { label: 'Wed', revenue: 8700, target: 8200 },
      { label: 'Thu', revenue: 10400, target: 8500 },
      { label: 'Fri', revenue: 11800, target: 9000 },
      { label: 'Sat', revenue: 12300, target: 9500 },
      { label: 'Sun', revenue: 13600, target: 10000 },
    ],
  },
  '30d': {
    label: 'Last 30 days',
    context: 'Revenue trend with target across the past month.',
    summary:
      'Revenue for the last 30 days, sampled across 8 points, ranging from $30,000 to $48,200, compared with a target between $28,000 and $42,500.',
    points: [
      { label: 'Sep 1', revenue: 30000, target: 28000 },
      { label: 'Sep 5', revenue: 33500, target: 30500 },
      { label: 'Sep 9', revenue: 31000, target: 32000 },
      { label: 'Sep 13', revenue: 36500, target: 33500 },
      { label: 'Sep 17', revenue: 39800, target: 35500 },
      { label: 'Sep 21', revenue: 42000, target: 37500 },
      { label: 'Sep 25', revenue: 45500, target: 40000 },
      { label: 'Sep 30', revenue: 48200, target: 42500 },
    ],
  },
  '90d': {
    label: 'Last 90 days',
    context: 'Weekly revenue over the trailing quarter.',
    summary:
      'Weekly revenue for the last 90 days across 12 weeks, ranging from $48,000 to $112,000, compared with a weekly target between $45,000 and $96,000.',
    points: [
      { label: 'W1', revenue: 48000, target: 45000 },
      { label: 'W2', revenue: 52000, target: 48000 },
      { label: 'W3', revenue: 56000, target: 51000 },
      { label: 'W4', revenue: 53000, target: 54000 },
      { label: 'W5', revenue: 62000, target: 57000 },
      { label: 'W6', revenue: 68000, target: 60000 },
      { label: 'W7', revenue: 71000, target: 63000 },
      { label: 'W8', revenue: 78000, target: 67000 },
      { label: 'W9', revenue: 84000, target: 71000 },
      { label: 'W10', revenue: 91000, target: 76000 },
      { label: 'W11', revenue: 101000, target: 85000 },
      { label: 'W12', revenue: 112000, target: 96000 },
    ],
  },
  '12m': {
    label: 'Last 12 months',
    context: 'Monthly revenue compared with target over the past year.',
    summary:
      'Monthly revenue for the last 12 months, ranging from $52,000 to $128,000, compared with a monthly target between $50,000 and $115,000.',
    points: [
      { label: 'Jan', revenue: 52000, target: 50000 },
      { label: 'Feb', revenue: 58000, target: 53000 },
      { label: 'Mar', revenue: 62000, target: 56000 },
      { label: 'Apr', revenue: 59000, target: 59000 },
      { label: 'May', revenue: 71000, target: 62000 },
      { label: 'Jun', revenue: 78000, target: 65000 },
      { label: 'Jul', revenue: 84000, target: 70000 },
      { label: 'Aug', revenue: 81000, target: 74000 },
      { label: 'Sep', revenue: 94000, target: 80000 },
      { label: 'Oct', revenue: 103000, target: 88000 },
      { label: 'Nov', revenue: 116000, target: 100000 },
      { label: 'Dec', revenue: 128000, target: 115000 },
    ],
  },
};

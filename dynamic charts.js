// Water Usage Chart
const ctxUsage = document.getElementById('usageChart').getContext('2d');
const usageChart = new Chart(ctxUsage, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Current Usage (Liters)',
      data: [1400, 1300, 1200, 1500, 1400, 1600],
      borderColor: '#0077c8',
      backgroundColor: 'rgba(0, 119, 200, 0.2)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: true } }
  }
});

// Budget Chart
const ctxBudget = document.getElementById('budgetChart').getContext('2d');
const budgetChart = new Chart(ctxBudget, {
  type: 'bar',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Water Budget (Liters)',
      data: [2.5, 2.0, 2.8, 2.1],
      backgroundColor: '#4CAF50'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: true } }
  }
});

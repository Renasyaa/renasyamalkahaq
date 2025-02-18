// Plugin untuk menampilkan teks di tengah
Chart.register({
    id: 'centerText',
    beforeDraw(chart) {
        const { width } = chart;
        const ctx = chart.ctx;
        const datasets = chart.data.datasets[0];
        const value = datasets.data[0];
        const totalValue = datasets.data.reduce((a, b) => a + b, 0);
        const percentage = Math.round((value / totalValue) * 100);
        const label = chart.data.labels[0];
        ctx.save();
        ctx.font = "bold 2em 'Poppins', sans-serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const x = width / 2;
        const y = chart.chartArea.height / 2 + chart.chartArea.top;
        ctx.fillStyle = '#fff';
        ctx.fillText(`${percentage}%`, x, y - 10);
        ctx.font = "normal 1em 'Poppins', sans-serif";
        ctx.fillStyle = '#fff';
        ctx.fillText(label, x, y + 20);
        ctx.restore();
    }
});

  // Fungsi untuk menggambar ulang chart
function renderCharts() {
    document.querySelectorAll('canvas').forEach(canvas => {
        const value = parseFloat(canvas.getAttribute('data-value'));
        const label = canvas.getAttribute('data-label');
        const color = canvas.getAttribute('data-color');
        
          // Hapus instance chart yang sudah ada jika ada
        if (canvas.chartInstance) {
            canvas.chartInstance.destroy();
        }

        canvas.chartInstance = new Chart(canvas.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: [label, 'Remaining'],
                datasets: [{
                    data: [value, 100 - value],
                    backgroundColor: [color, '#FFF4EA'],
                    hoverBackgroundColor: [color, '#FFF4EA'],
                    borderWidth: 0
                }]
            },
            options: {
                  cutout: '80%', // Ubah ukuran lubang tengah sesuai viewport
                animation: false,
                plugins: {
                    tooltip: { enabled: false },
                    legend: { display: false }
                }
            }
        });
    });
}

  // Render pertama kali
renderCharts();

  // Tambahkan event listener untuk resize
window.addEventListener('resize', renderCharts);

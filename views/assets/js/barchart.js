document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('myChart');

    // Get and parse the JSON data from the canvas attribute
    const chartData = JSON.parse(canvas.getAttribute('data-chart'));

    // Extract labels (months) and values (distances)
    const labels = chartData.map(item => item.month);
    const values = chartData.map(item => parseFloat(item.distance)); // Convert 'distance' to numbers

    // Convert a rem unit to pixels (assuming 1rem = 16px)
    const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize); // 1rem in px
    const fontSizeInRem = 1; // Example: 1.5rem
    const fontSizeInPx = fontSizeInRem * remToPx; // Convert rem to pixels

    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'km',
                data: values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true, // Enable responsive resizing
            maintainAspectRatio: true, // Allow custom aspect ratio
            plugins: {
                legend: {
                    display: false, // Disable legend
                    labels: {
                        font: {
                            family: 'Bitter, sans-serif' // Font family for legend labels
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Monthly distance',
                    color: '#808080',
                    font: {
                        size: fontSizeInPx, // Dynamically set font size in pixels
                        family: 'Bitter, sans-serif'
                    }
                },
                tooltip: {
                    enabled: false // Disable tooltip
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false, // Remove vertical gridlines
                        color: '#D3D3D3'
                    },
                    ticks: {
                        font: {
                            family: 'Bitter, sans-serif', // Font family for x-axis labels
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    border: {
                        display: false,
                        color: '#D3D3D3'
                    },
                    grid: {
                        display: true,
                        color: '#D3D3D3', // Sets horizontal grid lines
                    },
                    title: {
                        display: true, // Display the Y-axis label
                        text: 'km', // Label text
                        font: {
                            size: 13, // Optional: set font size for the Y-axis label
                            style: 'italic',
                            family: 'Bitter, sans-serif'
                        }
                    },
                    ticks: {
                        font: {
                            family: 'Bitter, sans-serif' // Font family for x-axis labels
                        }
                    }
                }
            }
        }
    });

    // Add a resize listener to force the chart to resize on window size changes
    window.addEventListener('resize', () => {
        chart.resize(); // Trigger chart resize
    });
});

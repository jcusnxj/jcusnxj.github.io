document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('myChartHealth');

    // Get and parse the JSON data from the canvas attribute
    const chartData = JSON.parse(canvas.getAttribute('data-chart'));

    // Extract labels (months) and values
    const labels = chartData.map(item => item.month);
    const values1 = chartData.map(item => parseFloat(item.weight));
    const values2 = chartData.map(item => parseFloat(item.bodyfat));

    // Convert a rem unit to pixels (assuming 1rem = 16px)
    const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize); // 1rem in px
    const fontSizeInRem = 1.6; // Example: 1.5rem
    const fontSizeInPx = fontSizeInRem * remToPx; // Convert rem to pixels

    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Weight',
                    data: values1,
                    borderWidth: 1,
                    yAxisID: 'y' // Assign to left y-axis
                },
                {
                    label: 'Body Fat',
                    data: values2,
                    borderWidth: 1,
                    yAxisID: 'y1' // Assign to right y-axis
                }
            ]
        },
        options: {
            responsive: true, // Enable responsive resizing
            maintainAspectRatio: true, // Allow custom aspect ratio
            plugins: {
                legend: {
                    display: true, // Disable legend
                    position: 'bottom', // Set legend to display at the bottom
                    labels: {
                        font: {
                            family: 'Bitter, sans-serif' // Font family for legend labels
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Monthly average weight & body fat',
                    color: '#808080',
                    font: {
                        size: fontSizeInPx, // Dynamically set font size in pixels
                        family: 'Bitter, sans-serif'
                    }
                },
                tooltip: {
                    enabled: true // Disable tooltip
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
                            family: 'Bitter, sans-serif' // Font family for x-axis labels
                        }
                    }
                },
                y: {
                    beginAtZero: false,
                    min: 65,
                    max: 85,
                    border: {
                        display: false,
                        color: '#D3D3D3'
                    },
                    grid: {
                        display: true,
                        color: '#D3D3D3' // Sets horizontal grid lines
                    },
                    title: {
                        display: true,
                        text: 'kg', // Updated to match values1
                        font: {
                            size: 13,
                            style: 'italic',
                            family: 'Bitter, sans-serif'
                        }
                    },
                    ticks: {
                        font: {
                            family: 'Bitter, sans-serif'
                        }
                    }
                },
                y1: { // New right y-axis
                    beginAtZero: false,
                    min: 25,
                    max: 35,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false // Prevent grid lines from overlapping with the left y-axis
                    },
                    title: {
                        display: true,
                        text: '%',
                        font: {
                            size: 13,
                            style: 'italic',
                            family: 'Bitter, sans-serif'
                        }
                    },
                    ticks: {
                        font: {
                            family: 'Bitter, sans-serif'
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

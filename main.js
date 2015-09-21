$(function() {
    $('#chart').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Recent Users'
        },
        yAxis: {
            title: {
                text: 'Signups Per Day'
            }
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Users',
            data: [3, 4, 3, 5, 4, 10, 12]
        }]
    });
});
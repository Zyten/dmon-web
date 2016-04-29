
//morris area chart

$(function () {

    //morris line chart
    Morris.Line({
        element: 'morris-line-chart',
        data: [{
            t: '2006',
            C: 100,
            T: 90,
			H: 80
        }, {
            t: '2007',
            C: 100,
            T: 90,
			H: 80
        }, {
            t: '2008',
		    C: 100,
            T: 90,
			H: 80
        }, {
            t: '2009',
			C: 100,
            T: 90,
			H: 80
        }, {
            t: '2010',
			C: 100,
            T: 90,
			H: 80
        }, {
            t: '2011',
			C: 100,
            T: 90,
			H: 80
        }, {
            t: '2012',
		    C: 100,
            T: 90,
			H: 80
        }],
        xkey: 't',
        ykeys: ['C', 'T', 'H'],
        labels: ['Carbon Monoxide', 'Temperature', 'Humidity'],
        hideHover: 'auto',
        resize: true
    });

});

// variables for the first series
var series_1_channel_id = 108012;
var series_1_field_number = 1;
var series_1_read_api_key = '';
var series_1_results = 10;
var series_1_color = '#d62020';

// variables for the second series
var series_2_channel_id = 108012;
var series_2_field_number = 2;
var series_2_read_api_key = '';
var series_2_results = 10;
var series_2_color = '#d62020';

// variables for the third series
var series_3_channel_id = 108012;
var series_3_field_number = 3;
var series_3_read_api_key = '';
var series_3_results = 10;
var series_3_color = '#d62020';

// chart title
var chart_title = '';
// y axis title
var y_axis_title = 'Values';

// user's timezone offset
var my_offset = new Date().getTimezoneOffset();
// chart variable
var my_chart = [1, 2, 3];
var chartNum = 0;

// when the document is ready
$(document).on('ready', function() {

  initCharts();
  window.setTimeout(function(){initCharts();} , 30000);

});

function initCharts() {
  // add a blank chart
  addChart(1);
  // add the first series
  addSeries(1, series_1_channel_id, series_1_field_number, series_1_read_api_key, series_1_results, series_1_color);
  // add a blank chart
  addChart(2);
  // add the second series
  addSeries(2, series_2_channel_id, series_2_field_number, series_2_read_api_key, series_2_results, series_2_color);
  // add a blank chart
  addChart(3);
  // add the third series
  addSeries(3, series_3_channel_id, series_3_field_number, series_3_read_api_key, series_3_results, series_3_color);
}

// add the base chart
function addChart(chart) {
  // variable for the local date in milliseconds
  var localDate;
  var renderID;
  switch(chart)
  {
    case(1):
    renderID = 'chart-container1';
    chartNum=1;
    break;
    case(2):
    renderID = 'chart-container2';
    chartNum=2;
    break;
    case(3):
    renderID = 'chart-container3';
    chartNum=3;
    break;
    default:
    chartNum=0;
    renderID = 'chart-container';
  }

  // specify the chart options
  var chartOptions = {
    chart: {
      //renderTo: 'chart-container',
      renderTo: renderID,
      defaultSeriesType: 'line',
      backgroundColor: '#F5F6F6',
      dynamic: true,
      events: { }
    },
    title: { text: chart_title },
    plotOptions: {
      series: {
         marker: { radius: 3 },
         animation: true,
         step: false,
         dynamic: true,
         borderWidth: 0,
         turboThreshold: 0
      }
    },
    tooltip: {
      // reformat the tooltips so that local times are displayed
      formatter: function() {
       var d = new Date(this.x + (my_offset*60000));
       var n = (this.point.name === undefined) ? '' : '<br>' + this.point.name;
       return this.series.name + ':<b>' + this.y + '</b>' + n + '<br>' + d.toDateString() + '<br>' + d.toTimeString().replace(/\(.*\)/, "");
     }
    },
    xAxis: {
      type: 'datetime',
      title: { text: 'Date' }
    },
    yAxis: { title: { text: y_axis_title } },
    exporting: { enabled: false },
    legend: { enabled: false },
    credits: {
      text: 'ThingSpeak.com',
      href: 'https://thingspeak.com/',
      style: { color: '#D62020' }
    }
  };

  // draw the chart
  my_chart[chartNum] = new Highcharts.Chart(chartOptions);
}

// add a series to the chart
function addSeries(chartNum, channel_id, field_number, api_key, results, color) {
  var field_name = 'field' + field_number;

  // get the data with a webservice call
  $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/fields/' + field_number + '.json?offset=0&round=2&results=' + results + '&api_key=' + api_key, function(data) {

    // blank array for holding chart data
    var chart_data = [];

    // iterate through each feed
    $.each(data.feeds, function() {
      var point = new Highcharts.Point();
      // set the proper values
      var value = this[field_name];
      point.x = getChartDate(this.created_at);
      point.y = parseFloat(value);
      // add location if possible
      if (this.location) { point.name = this.location; }
      // if a numerical value exists add it
      if (!isNaN(parseInt(value))) { chart_data.push(point); }
    });

    // add the chart data
    my_chart[chartNum].addSeries({ data: chart_data, name: data.channel[field_name], color: color });
  });
}

// converts date format from JSON
function getChartDate(d) {
  // offset in minutes is converted to milliseconds and subtracted so that chart's x-axis is correct
  return Date.parse(d) - (my_offset * 60000);
}

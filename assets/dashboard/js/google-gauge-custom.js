var chart; 
var charts;
var data;

google.load('visualization', '1', {packages:['gauge']});
google.setOnLoadCallback(initChart);

function displayData(point) {
  data.setValue(0, 0, 'API');
  data.setValue(0, 1, point);
  chart.draw(data, options);
}

function loadData() {
  // variable for the data point
  var p, temp, humidity, dust;

  //Thingspeak
  // get the data point
  $.getJSON('https://api.thingspeak.com/channels/108012/feed/last.json?apikey=MHJRONDJFO3TD3WA', function(data) {

    p = data.field4;
    temp = data.field1;
    humidity = data.field2;
    dust = data.field3;

    $( "#nowTemp" ).html('<strong>'+temp+'</strong> &ordm;C'); $( "#nowTemp" ).css("background", "none");
    $( "#nowHumidity" ).html('<strong>'+humidity+'</strong> %');  $( "#nowHumidity" ).css("background", "none");
    $( "#nowDust" ).html('<strong>'+dust+'</strong> &micro;g/m&sup3;');  $( "#nowDust" ).css("background", "none");

    if (p) {
      p = (p/1);
      displayData(p);
    }
  });
}

function initChart() {
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Label');
  data.addColumn('number', 'Value');
  data.addRows(1);

  chart = new google.visualization.Gauge(document.getElementById('chart_div'));
  options = {
    redColor: "#2B82C9", //blue
    greenColor: "#2CCA90",
    yellowColor: "#EEE657",

    width: 240, 
    height: 240, 

    redFrom: 0, 
    redTo: 50,

    greenFrom: 50, 
    greenTo: 100, 

    yellowFrom: 100, 
    yellowTo: 150, 

    minorTicks: 10,

    min: 0, 
    max: 150, 

    animation: {
      duration: 400, 
      easing: 'out',
    },
  };

  loadData();

  setInterval('loadData()', 30000);
}
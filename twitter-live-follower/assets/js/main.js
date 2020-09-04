const params = new URLSearchParams(window.location.search)

id = params.get('user')
if(id ==null){
id="BarackObama"
window.location.href = "?user="+id
}

var lineColor = "red"
var textBright = "red"
$(function asd(){
    
var chart = new Highcharts.chart({
              chart: {
                  renderTo: 'chart',
                  type: 'spline',
                    zoomType: 'x',
                    backgroundColor: 'transparent',
                    plotBorderColor: 'transparent'
              },
              title: {
                  text: 'Live Chart HighChart'
              },
              xAxis: {
                  type: 'datetime',
                  tickPixelInterval: 200,
                    gridLineColor: lineColor,
                    labels: {
                        style: {
                            color: textBright
                        }
                    },
                    lineColor: lineColor,
                    minorGridLineColor: 'red',
                    tickColor: lineColor,
                    title: {
                        style: {
                            color: textBright
                        }
                    }
              },
              yAxis: {
                  title: {
                      text: ''
                  },
                    gridLineColor: lineColor,
                    labels: {
                        style: {
                            color: textBright
                        }
                    },
                    lineColor: lineColor,
                    minorGridLineColor: 'red',
                    tickColor: lineColor
              },
              credits: {
                  enabled: false
              },

              series: [{
                 name: 'Followers',
                marker: { enabled: false },
                color: '#17D92D',
                lineColor: '#DA1DAF'
              }]
            });







$.getJSON("https://cors-anywhere.herokuapp.com/http://munnyreol.herokuapp.com/twitter/api/?user="+/*replace*/id, function (data) {
/*https://cors-anywhere.herokuapp.com/https://api.thesocialcounter.com/twitter/?name=*/
        flwr = data.followers;
        title=data.name;
        pic=data.profile_image;
        bckgrnd=data.banner;

        $(".title").text(title);
        $("#odometer").text(flwr);

chart.series[0].addPoint([                   
                (new Date()).getTime(),
                Math.abs(flwr)
                ])
        
        
         var image = document.querySelector('#user_pic'); image.src = pic;
          var image = document.querySelector('#bckgrnd'); image.src = bckgrnd;
         
        })

       setInterval(function() {
$.getJSON("https://cors-anywhere.herokuapp.com/http://munnyreol.herokuapp.com/twitter/api/?user="+/*replace*/id, function (data) {
        flwr = data.followers;
        $("#odometer").text(flwr);

chart.series[0].addPoint([                   
                (new Date()).getTime(),
                Math.abs(flwr)
                ])
        }); 
         }, 2500)
})

function val(){
idd = document .getElementById("name").value;

if (idd.length !== 0) {
window.location.href = "?user="+idd
    
  } else {
alert("Invalid Username!")
   /* window.location.href = "/twitter-live-follower/?user="+id*/
/*  }*/
}
    };


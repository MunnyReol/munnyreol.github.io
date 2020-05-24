const params = new URLSearchParams(window.location.search)

id = params.get('user1')
id2 = params.get('user2')
if(id ==null || id2 ==null){
id="BarackObama"
id2 = "iamsrk"
window.location.href = "?user1="+id+"&user2="+id2
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





/*var id ="Barack Obama"*/
$.getJSON("https://cors-munnyreol.herokuapp.com/http://munnyreol.herokuapp.com/twitter/api/?user="+/*replace*/id, function (data) {
/*https://cors-anywhere.herokuapp.com/https://api.thesocialcounter.com/twitter/?name=*/
        flwr = data.followers;
        title=data.name;
        pic=data.profile_image;
        bckgrnd=data.banner;

        $(".title").text(title);
        $("#odometer").text(flwr);
        
        
         var image = document.querySelector('#user_pic'); image.src = pic;
          var image = document.querySelector('#bckgrnd'); image.src = bckgrnd;
         
        
        
        
        /*var id2 ="iamsrk"*/
$.getJSON("https://cors-munnyreol.herokuapp.com/http://munnyreol.herokuapp.com/twitter/api/?user="+/*replace*/id2, function (dataa) {
/*https://cors-anywhere.herokuapp.com/https://api.thesocialcounter.com/twitter/?name=*/
        folower = dataa.followers;
        titlee=dataa.name;
        pics=dataa.profile_image;
        backgrnd=dataa.banner;

        $(".title2").text(titlee);
        $("#odometer2").text(folower);
        
        
         var image = document.querySelector('#user_pics'); image.src = pics;
          var image = document.querySelector('#backgrnd'); image.src = backgrnd;


if (flwr >folower)
        {
        defferent = flwr - folower 
         $("#defferent").text(defferent);
         } else {
         defferent =  folower - flwr
          $("#defferent").text(defferent);
         }

chart.series[0].addPoint([                   
                (new Date()).getTime(),
                Math.abs(defferent)
                ])


        })
        })

       setInterval(function() {
$.getJSON("https://cors-munnyreol.herokuapp.com/http://munnyreol.herokuapp.com/twitter/api/?user="+/*replace*/id, function (data) {
        flwr = data.followers;
        $("#odometer").text(flwr);

$.getJSON("https://cors-munnyreol.herokuapp.com/http://munnyreol.herokuapp.com/twitter/api/?user="+/*replace*/id2, function (dataa) {
        folower = dataa.followers;
        $("#odometer2").text(folower);
        if (folower>flwr )
        {
        defferent = folower - flwr
         $("#defferent").text(defferent);
         } else {
         defferent = flwr- folower
          $("#defferent").text(defferent); 
         }


chart.series[0].addPoint([                   
                (new Date()).getTime(),
                Math.abs(defferent)
                ])


        }); 
        }); 
         }, 2500)
})

$("button").click(function (){
function getRandomName() {
 var names = [ "munnyreol", "BarackObama","JustinBieber", "AmitabhBachan", "iamsrk"];
 return names[Math.floor(Math.random() * names.length)];
} 

id=prompt("Enter your favorite Twitter channel Name",getRandomName())

if (id.length == 0) {
    alert("Invalid Username!")
  } else {
window.location.href = "?user1="+id+"&user2="+id2
   /* window.location.href = "/twitter-live-follower/?user="+id*/
  }

    });

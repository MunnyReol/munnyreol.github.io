$(document ).ready(function (){

function getRandomName() { var names = [ "munnyreol", "BarackObama","JustinBieber", "AmitabhBachan" ]; return names[Math.floor(Math.random() * names.length)];} 
 
var id= prompt("Enter your favorite Twitter channel Name",getRandomName())
$("button").click(function (){
setInterval(function() {
$.getJSON("https://api.thesocialcounter.com/twitter/?name="+id, function (data) {

        flwr = data.followers_count;
        title=data.name;
        pic=data.profile_image_url;
        bckgrnd=data.profile_banner_url;
        
        $(".title").text(title);
        $("#odometer").text(flwr);
        
        console.log("Flower="+flwr+"\n","Friends="+frnds)
        
         var image = document.querySelector('#user_pic'); image.src = pic;
          var image = document.querySelector('#bckgrnd'); image.src = bckgrnd;
         
        })
        }, 2000); 
    });
});

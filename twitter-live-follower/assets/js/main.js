$(document ).ready(function (){
if(id="0"){
    id="BarackObama"
} else{
    id=idd
}
setInterval(function() {
$.getJSON("https://api.thesocialcounter.com/twitter/?name="+id, function (data) {

        flwr = data.followers_count;
        title=data.name;
        pic=data.profile_image_url;
        bckgrnd=data.profile_banner_url;
        
        $(".title").text(title);
        $("#odometer").text(flwr);
        
        
         var image = document.querySelector('#user_pic'); image.src = pic;
          var image = document.querySelector('#bckgrnd'); image.src = bckgrnd;
         
        })
        }, 2500); 
$("button").click(function (){
function getRandomName() { var names = [ "munnyreol", "BarackObama","JustinBieber", "AmitabhBachan", "iamsrk"]; return names[Math.floor(Math.random() * names.length)];} 
 
var idd= id
id=prompt("Enter your favorite Twitter channel Name",getRandomName())

setInterval(function() {
$.getJSON("https://api.thesocialcounter.com/twitter/?name="+id, function (data) {

        flwr = data.followers_count;
        title=data.name;
        pic=data.profile_image_url;
        bckgrnd=data.profile_banner_url;
        
        $(".title").text(title);
        $("#odometer").text(flwr);
        
        
         var image = document.querySelector('#user_pic'); image.src = pic;
          var image = document.querySelector('#bckgrnd'); image.src = bckgrnd;
         
        })
        }, 2500); 
    });
});

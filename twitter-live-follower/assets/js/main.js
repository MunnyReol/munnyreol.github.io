const params = new URLSearchParams(window.location.search)

id = params.get('user')
if(id ==null){
id="BarackObama"
}
setInterval(function() {
$.getJSON("https://cors-anywhere.herokuapp.com/https://mlmcounts.herokuapp.com/twitter/api/?name="+id, function (data) {
/*https://cors-anywhere.herokuapp.com/https://api.thesocialcounter.com/twitter/?name=*/
        flwr = data.followers_count;
        title=data.name;
        pic=data.profile_image_url;
        bckgrnd=data.profile_banner_url;
var url = pic; 
var a = url.indexOf("_normal"); 
var b = url.substring(a); 
var c = url.replace(b,""); 
url = c;
hd=(url+".jpg")
        
        $(".title").text(title);
        $("#odometer").text(flwr);
        
        
         var image = document.querySelector('#user_pic'); image.src = hd;
          var image = document.querySelector('#bckgrnd'); image.src = bckgrnd;
         
        })
        }, 2500); 
$("button").click(function (){
function getRandomName() { var names = [ "munnyreol", "BarackObama","JustinBieber", "AmitabhBachan", "iamsrk"]; return names[Math.floor(Math.random() * names.length)];} 
 
var idd= id
id=prompt("Enter your favorite Twitter channel Name",getRandomName())

window.location.href = "/twitter-live-follower/?user="+id

setInterval(function() {
$.getJSON("https://cors-anywhere.herokuapp.com/https://mlmcounts.herokuapp.com/twitter/api/?name="+id, function (data) {

        flwr = data.followers_count;
        title=data.name;
        pic=data.profile_image_url;
        bckgrnd=data.profile_banner_url;
var url = pic; 
var a = url.indexOf("_normal"); 
var b = url.substring(a); 
var c = url.replace(b,""); 
url = c;
hd=(url+".jpg")
        
        $(".title").text(title);
        $("#odometer").text(flwr);
        
        
         var image = document.querySelector('#user_pic'); image.src = hd;
          var image = document.querySelector('#bckgrnd'); image.src = bckgrnd;
         
        })
        }, 2500); 
    });

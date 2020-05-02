const params = new URLSearchParams(window.location.search)

id = params.get('user')
if(id ==null){
id="BarackObama"
window.location.href = "?user="+id
}
var replaceid= id.replace("%20", "Z");

$.getJSON("https://cors-munnyreol.herokuapp.com/https://munnyreol-live.herokuapp.com/twitter/api/?name="+replaceid, function (data) {
/*https://cors-anywhere.herokuapp.com/https://api.thesocialcounter.com/twitter/?name=*/
        flwr = data.followers_count;
        title=data.name;
        pic=data.profile_image_url;
        bckgrnd=data.profile_banner_url;

var hd = pic.replace(/_normal/gi, "");
        
        $(".title").text(title);
        $("#odometer").text(flwr);
        
        
         var image = document.querySelector('#user_pic'); image.src = hd;
          var image = document.querySelector('#bckgrnd'); image.src = bckgrnd;
         
        })

       setInterval(function() {
$.getJSON("https://cors-munnyreol.herokuapp.com/https://munnyreol-live.herokuapp.com/twitter/api/?name="+replaceid, function (data) {
        flwr = data.followers_count;
        $("#odometer").text(flwr);
        }); 
         }, 2500)

$("button").click(function (){
function getRandomName() {
 var names = [ "munnyreol", "BarackObama","JustinBieber", "AmitabhBachan", "iamsrk"];
 return names[Math.floor(Math.random() * names.length)];
} 

id=prompt("Enter your favorite Twitter channel Name",getRandomName())

if (id.length == 0) {
    alert("Invalid Username!")
  } else {
window.location.href = "?user="+id
   /* window.location.href = "/twitter-live-follower/?user="+id*/
  }

    });

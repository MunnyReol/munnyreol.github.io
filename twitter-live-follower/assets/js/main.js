const params = new URLSearchParams(window.location.search)

id = params.get('user')
if(id ==null){
id="BarackObama"
window.location.href = "?user="+id
}
//replaceid= id.replace(/%20/gi, "");

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
         
        })

       setInterval(function() {
$.getJSON("https://cors-munnyreol.herokuapp.com/http://munnyreol.herokuapp.com/twitter/api/?user="+/*replace*/id, function (data) {
        flwr = data.followers;
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

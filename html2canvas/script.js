
var key =["AIzaSyB8ofXVLbE8psl4Id_AUWyGKcnxg77floc", "AIzaSyDZM1YJsPJVMRvH0GNMYmDehHBZMAZZjtw"]

function submit() {
  text = $("#input-text").val()
    var btn = document.createElement("p");
//alert (text)
title = text
url = "https://munnyreol.co"

  if(text != 0)
    {  
    $.getJSON("https://www.googleapis.com/customsearch/v1?key="+key[0]+"&cx=014907997594845904236:vkoin1svhya&q="+text, function (data) {

  for(m = 0 ; m<4; m++)
  {
    var btn = document.createElement("p");
    result = data.items[m].htmlTitle
    thumbnail = data.items[m].pagemap.cse_thumbnail[0].src
    
      lnk = data.items[m].link
        
    document.getElementById("show").appendChild(btn);
  btn.innerHTML = '<a href='+lnk+' class="mt-2 card" ><div class="d-flex"><img class="rounded-circle" width="64" height="64" src="'+thumbnail+'"><h5 style="margin-top: 20px;" class="ml-2">'+result+'</h5></div></a>'
    
    console.log(data.items[m].title)
  }
  })
  }
  else {
      
  }
}

function save(){
    var btn = document.createElement("p");
        
    html2canvas(document.body, {
onrendered: function(canvas)
{
var img = canvas.toDataURL();
//$("#result-image").attr('src', img).show();

document.getElementById("shows").appendChild(btn);
  btn.innerHTML = '<img class="text-center"  width="80%" src="'+img+'">'
}
});
    
}

/*    document.getElementById("show").appendChild(btn);
  btn.innerHTML = '<a href='+url+' class="mt-2 card" ><div class="d-flex"><img class="rounded-circle" width="64" height="64" src="'+thumbnail+'"><h5 style="margin-top: 20px;" class="ml-2">'+title+'</h5></div></a>'  */
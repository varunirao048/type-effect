//write your words there.
var sentences=[
  "hi I am Varuni",
  "Nishanth is my fav person!!",
  "end of my texts!!!"
];
var part=0;
var part_index=0;
var interval_instances;
var elm=document.querySelector("#change");

function Write() {
  var text=sentences[part].substring(0,part_index+1);
  elm.innerHTML=text;
  part_index++;
  if(text===sentences[part]){
    clearInterval(interval_instance);
    setTimeout(function(){
      interval_instance=setInterval(Delete,25);
    },1000);
  }
}

function Delete() {
  var text=sentences[part].substring(0,part_index-1);
  elm.innerHTML=text;
  part_index--;
  if(text===""){
    clearInterval(interval_instance);
    if(part==(sentences.length-1))
     part=0;
   else
     part++;
     part_index=0;
     setTimeout(function() {
       interval_instance=setInterval(Write,85);
     },400);
  }
}
interval_instance=setInterval(Write,85);

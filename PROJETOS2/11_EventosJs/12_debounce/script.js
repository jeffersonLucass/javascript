let timeout;


window.addEventListener("mousemove", function(e){
   this.clearTimeout(timeout);
   timeout = setTimeout(function(){
    console.log("linha horizontal:"+e.x,"linha vertical:"+e.y);
   },500)
})
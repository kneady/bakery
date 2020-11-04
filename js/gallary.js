$(document).ready(function(){
  $("img").click(function(){
  var t = $(this).attr("src");
  $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
  $("#myModal").modal();
});

$("video").click(function(){
  var v = $("video > source");
  var t = v.attr("src");
  $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
  $("#myModal").modal();  
});
});//EOF Document.ready


let panels = document.querySelectorAll('.panel');

function f(){
    this.classList.toggle('open');
}

function openActive(event){
    if (event.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}
panels.forEach((panel)=>panel.addEventListener('click',f));
panels.forEach((panel)=>panel.addEventListener('transitionend',openActive))

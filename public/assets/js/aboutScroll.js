$(function(){

	var go;
  $(".nav-list a").click(function(e) {
  	 e.preventDefault()
  	 var t = $(this).attr('id')
     go = $("[data-id='" + t + "']").offset().top
     $(document.body).animate({
       scrollTop: (go - 50)
     })
  });

})


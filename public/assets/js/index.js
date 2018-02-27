$(document).ready(function() {
	$('h1, .header p, .header-icon a, .header .content').addClass('go');
	
	$(".menu-btn").click(function() {
		$(this).toggleClass('active');
		$('.nav-list').toggleClass('active');
	});
	
	$('.work').click(function(){
		 $(".pop").show()
		 var a = $(this).attr('data-pop');
		 $(".pop-content").hide()
		 $(".pop-content[data-pop='" + a + "']").show()
		 $('body').css('overflow-y', 'hidden')
	})
	$('.bg').click(function(){
		 $(".pop").hide()
		 $(".pop-content").hide()
		$('body').css('overflow-y', 'auto')
	})
	
})

$(window).load(function() {

	$('.pop-content img').each(function() {
		var g = $(this).attr("data-src")
		$(this).attr("src", g)
	})

})





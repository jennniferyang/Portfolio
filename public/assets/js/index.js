$(document).ready(function() {
	$('h1, .header p, .header-icon a, .header .content').addClass('go');

	window.sr = ScrollReveal();
	sr.reveal('.animation_show', { 
		duration: 400,
		delay: 300,
		afterReveal: function() {
			// $('.animation_show').animateNumbers(,)
		}
	});
})

$(window).load(function() {
	
	$(".menu-btn").click(function() {
		$(this).toggleClass('active');
		$('.nav-list').toggleClass('active');
	});

 $('.more-btn').click(function(){
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

 $('.pop-content img').each(function() {
 	var g = $(this).attr("data-src")
 	$(this).attr("src", g)
 })

})





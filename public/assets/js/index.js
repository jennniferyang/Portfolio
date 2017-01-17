$(window).load(function() {
	$(".menu-btn").click(function() {
		$(this).toggleClass('active');
		$('.nav-list').toggleClass('active');
	});

 $('.more-btn').click(function(){
 	$(".pop").show()
 	var a = $(this).attr('data-pop');
 	console.log(a)
 	$(".pop-content").hide()
 	$(".pop-content[data-pop='" + a + "']").show()
 	$('body').css('overflow-y', 'hidden')
 })
 $('.bg').click(function(){
 	$(".pop").hide()
 	$(".pop-content").hide()
 	$('body').css('overflow-y', 'auto')
 })

 $('h1, .header p, .header-icon a, .header .content').addClass('go');

})





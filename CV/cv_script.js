$('document').ready(() => { 

	$('.tech_popup').hide();
	$('.course_info').hide();
	
	/*TECH SKILLS*/
	
	$('.tech_logo').on('mouseenter', event => {
		$(event.currentTarget).siblings().slideDown();
	});
	$('.tech_box').on('mouseleave', event => {
		$(event.currentTarget).children('.tech_popup').slideUp();
	});	
	
	/*COURSES INFO*/
	
	$('.course_box').hoverIntent(mouseInTriger, mouseOutTriger);
	
	function mouseInTriger() {
		$(this).children('.course_info').slideDown();
	}
	function mouseOutTriger() {
		$(this).children('.course_info').slideUp();
	}
	
	/*WELCOME MESSAGE */

	$('.fade_back').on('click', () => {
		$('.fade_back').fadeOut(900);
	})
});
$('document').ready(() => { 

	// alert("Welcome! \n \n Thank you for accessing my CV. This is just some information about me and my skills. \n If you would like to ask me anything, please feel free to contact me through contact section. \n \n Have a great navigation! \n Julio Betanzos Garcia");

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
	
	
});
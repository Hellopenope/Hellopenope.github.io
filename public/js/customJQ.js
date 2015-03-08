$('masthead-nav li').on('click', function(e){
	e.preventDefault();
	$('li active').removeClass('active');
	$(this).addClass('active');
})
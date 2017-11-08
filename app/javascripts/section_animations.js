// Section Animations
$(function(){
	// Initial stat of page - click to bring up main content of section
	$(".landing-nav").click(function(){
		$('.landing-nav').removeClass('big');
		var self = $(this),
				sibs = $(this).siblings();

		self.addClass('selected');
		sibs.removeClass('selected');
		$(".section").hide();
		displaySection(self);
	});
	// Animation for section display
	function displaySection(self) {
		var targetID = "#"+self.text().replace(/\./g, "");
		$(targetID).show();
	};

	// Contact links - hover will slide down text of given image/link
	$(".inner-contact-links").find("img").hover(function(){
		var classText = $(this).attr('class');
		if (classText) $("."+classText+"-text").parent().show("slide", {direction: "up"}, 500);
	}, function() {
		var classText = $(this).attr('class');
		if (classText) $("."+classText+"-text").parent().hide("slide", {direction: "up"}, 500);
	});
});

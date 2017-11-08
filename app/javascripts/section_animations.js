// Section Animations
$(function(){
	// Initial stat of page - click to bring up main content of section
	$(".landing-nav").click(function(){
		var self = $(this),
				sibs = $(this).siblings();

		populateComp(sibs);
		$(".landing-nav").slideUp("slow");
		displaySection(self);
		$("div").promise().done(function() {
			$(".compressed-sections").slideDown("slow");
		});
	});
	// Populates hidden section links below active section
	function populateComp(sibs) {
		var textOne = $(sibs[0]).children().text(),
				textTwo = $(sibs[1]).children().text();
		
		$(".comp-one").text(textOne);
		$(".comp-two").text(textTwo);
	};
	// Animation for section display
	function displaySection(self) {
		var targetID = "#"+self.text().replace(/\./g, "");
		$(targetID).slideDown("slow");
	};
	// Hidden section - click to activate a different section
	$(".deep-comp").click(function(){
		var self = $(this),
				targetClass = "."+self.text().replace(/\./g, ""),
				sibs = $(targetClass).siblings();

		$(".section").slideUp("slow");
		displaySection(self);
		populateComp(sibs);
	});

	// Contact links - hover will slide down text of given image/link
	$(".inner-contact-links").find("img").hover(function(){
		var classText = $(this).attr('class');
		if (classText) $("."+classText+"-text").parent().show("slide", {direction: "up"}, 500);
	}, function() {
		var classText = $(this).attr('class');
		if (classText) $("."+classText+"-text").parent().hide("slide", {direction: "up"}, 500);
	});
});

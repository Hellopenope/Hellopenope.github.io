// Section Animations
$(function(){
	// Initial stat of page - click to bring up main content of section
	$(".inner-circle").click(function(){
		
		var self = $(this);
		var sibs = $(this).parent().siblings();

		populateComp(sibs);
		$(".outter-circle").slideUp("slow");
		displaySection(self);
		$("div").promise().done(function() {
			$(".compressed-sections").slideDown("slow");
		});
	});
	// Populates hidden section links below active section
	function populateComp(sibs) {

		var textOne = $(sibs[0]).children().text();
		var textTwo = $(sibs[1]).children().text();
		
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

		var self = $(this);
		var targetClass = "."+self.text().replace(/\./g, "")+"-circle";
		var sibs = $(targetClass).siblings();

		$(".content-container").slideUp("slow");
		displaySection(self);
		populateComp(sibs);
	});

	// Contact links - hover will slide down text of given image/link
	$(".inner-contact-links").find("img").hover(function(){

		var classText = "."+$(this).attr("class")+"-text";

		if (classText !== "undefined-text") {
			$(classText).parent().show("slide", {direction: "up"}, 500);
		}
	}, function() {

		var classText = "."+$(this).attr("class")+"-text";

		if (classText !== "undefined-text") {
			$(classText).parent().hide("slide", {direction: "up"}, 500);
		}
	});
});







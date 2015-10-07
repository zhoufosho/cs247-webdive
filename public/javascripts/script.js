$(function() {
	prettyPrint();
	showActiveLink();
});

function prettyPrint() {
	$('.snippet').each(function(i) {
		var snippet = $(this);
		var pp = snippet.find(".prettyprint").first();
		if (pp.hasClass('no-esp') || !snippet.find('.rendered-result').first()) {
			return;
		}

		snippet.find('.rendered-result').first().html(pp.html());
		pp.text(pp.html());
	});
}

function showActiveLink() {
	$('.nav-links li').removeClass('active');
	var linkName = window.location.href.split("/").pop();
	var navLinks =  $('a[href$="' + linkName + '"]');
	navLinks.each(function(i) {
		var navLink = $(this);
		navLink.closest("li").addClass("active"); //Set click li as active
	});

	if (navLinks.length === 0) {
		$('.home-nav').closest("li").addClass("active");
	}

}
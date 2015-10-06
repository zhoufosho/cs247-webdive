$(function() {
	prettyPrint();
});

function prettyPrint() {
	$('.snippet').each(function(i) {
		var snippet = $(this);
		var pp = snippet.find(".prettyprint").first();
		if (pp.hasClass('no-esp') || !snippet.find('.explanation').first()) {
			return;
		}

		snippet.find('.explanation').first().html(pp.html());
		pp.text(pp.html());
	});
}

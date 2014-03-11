/* Accordion */
 $(document).ready(function () {
        $('.menuItem').next().css({ display: 'none' });

        $('.menuItem').click(function (event) {
            if ($('#' + event.target.id).next().css('display') == 'none') {
                collapseAll();
                $('#' + event.target.id).next().slideDown(300);
            }
        });
    });

    function collapseAll() {
        $('.menuItem').next().slideUp(300);
    }

/* Fluid Video */
$(function() {

	// Find all YouTube videos
	var $allVideos = $("iframe[src^='//player.vimeo.com']"),

	    // The element that is fluid width
	    $fluidEl = $(".video");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)
			
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');

	});

	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {

		var newWidth = $fluidEl.width();
		
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();

});

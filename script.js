$(document).ready(function(){
	$(window).scroll(function (event) {
    	// what the y position of the scroll is
	    var y = $(this).scrollTop();
	    if (0 <= y < 50){
			$('#bar').css({"top":"100px","position":"absolute"});
	    }
		if (y >= 50) {
			$('#bar').css({"top":"50px","position":"fixed"});
		}
	});
});
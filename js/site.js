$( document ).ready(function() {
	$("#gallery1 #thumbs img").click(function() {
		var src = $(this).attr('src');
		$("#gallery1 #large img").attr('src', src);
	});

	$("#gallery2 #thumbs img").click(function() {
		var src = $(this).attr('src');
		$("#gallery2 #large img").attr('src', src);
	});
});
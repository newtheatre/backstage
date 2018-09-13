$(document).ready(function () { // Filter buttons
	$('.category-item').on('click', function() {
	  if ($(this).hasClass('active')) {
	    $('.set-item').removeClass('d-none');
	    $(this).removeClass('active');
	    return;
	  } 
	  else {
	    var $el = $('.set-type-' + this.id).removeClass('d-none');
	    $('.set-item').not($el).addClass('d-none');
	    console.log('Done');
	  }
	  $('.category-item').removeClass('active');
	  $(this).addClass('active');
	})
});
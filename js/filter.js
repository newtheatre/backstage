$(document).ready(function () { // Filter buttons
	$('.category-item').on('click', function() {
	  if ($(this).hasClass('active')) { // If filter applied already
	    $('.set-item').parent().removeClass('d-none'); // Make others visible
	    $(this).removeClass('active'); // Deactivate filter 
	    return;
	  } 
	  else {
	    var $match = $('.set-type-' + this.id)
	    $($match).parent().removeClass('d-none'); // Make any hidden matches visible
	    $('.set-item').not($match).parent('li').addClass('d-none'); // Hide the rest
	  }
	  $('.category-item').removeClass('active'); 
	  $(this).addClass('active');
	})
});
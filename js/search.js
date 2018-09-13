$(document).ready(function () {
	var $searchBox = $('#search-box');
	var $eachItem = $('#item-list > li');
	$searchBox.on('input', function() {
	  var scope = this;
	  if (!scope.value || scope.value == '') {
	    $eachItem.show();
	    return;
	  }
	  $eachItem.each(function(i, div) {
	    var $div = $(div);
	    $div.toggle($div.text().toLowerCase().indexOf(scope.value.toLowerCase()) > -1);
	  })
	});
})
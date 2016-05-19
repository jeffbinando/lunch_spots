$(document).ready(function(){
	
})
.on("click", "#all", function() {
	$('#results').html('');
	//Run through all the arrays in locations
	for (var i = 0; i < lunch.locations.length; i++) {
		//For each array in locations run this For In loop
		for (var key in lunch.locations[i]) {
			//For each Key in the array run this If statement
    		if (lunch.locations[i].hasOwnProperty(key)) {
				//If this property is a KEY append the key and value
				$('#results').append(key+": "+lunch.locations[i][key]+'<br />');  //  lunch.locations[1]['id']
  			}
		}		
	}	
})
.on("click", "#name", function() {
	$('#results').html('');
	var results = [];
	for (var i = 0; i < lunch.locations.length; i++) {
		results.push(lunch.locations[i]['name']);
		//$('#results').append(lunch.locations[i]['name']+'<br />');		
	}
	$('#results').append(results.join("<br>"));
})
.on("click", "#price", function() {
	$('#results').html('');
	var results = [];
	var alllocs = lunch.locations;
	for (var i = 0; i < alllocs.length; i++) {
		results.push(alllocs[i]['name']+' - '+alllocs[i]['price']);		
	}
	$('#results').append(results.join("<br>"));
})
.on("click", "#subcat", function() {
	$('#results').html('');
	for (var i = 0; i < lunch.locations.length; i++) {
		$('#results').append(lunch.locations[i]['name']+' - ');		
		$('#results').append(lunch.locations[i]['subcat']+'<br />');		
	}
})
.on("click", "#cat", function() {
	$('#results').html('');
	for (var i = 0; i < lunch.locations.length; i++) {
		$('#results').append(lunch.locations[i]['name']+' - ');		
		$('#results').append(lunch.locations[i]['cat']+'<br />');		
	}
})
.on("click", "#random", function() {
	$('#results').html('');
	var randomCount = Math.floor(Math.random() * lunch.locations.length) + 1 - 1
	$('#results').append(lunch.locations[randomCount]['name']);				
})
.on("keypress", "#search", function(e){
	if(e.which == 13) {
		var searchVal = $(this).val();
		for (var i = 0; i < lunch.locations.length; i++) {
			var names = lunch.locations[i]['name'];
			var re = new RegExp(names,"g");
			if(searchVal.search(re)){	
				$('#results').append(lunch.locations[i]['name']+'<br />');	
				$('#results').append(lunch.locations[i]['cat']+'<br />');
				$('#results').append(lunch.locations[i]['subcat']+'<br />');
				$('#results').append(lunch.locations[i]['price']+'<br />');	
				$('#results').append(lunch.locations[i]['rating']+'<br />');
				$('#results').append(lunch.locations[i]['address']+'<br />');
				$('#results').append(lunch.locations[i]['number']+'<br />');
				$('#results').append(lunch.locations[i]['website']+'<br />');
			}else{
				alert('Name not found');
			}
		}
		return false;
    }
})
;
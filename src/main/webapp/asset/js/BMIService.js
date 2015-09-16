var BMIService = {

	getIndex: function(weight, height, callback) {
		$.ajax({
		  url: 'BMIController',
		  data: {'weight': weight, 'height': height},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index) {
		//Fazer em casa
		return "";
	}
	
};
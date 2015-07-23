$(document).ready(function(){
	$("#login").click(function(){
		var environment = document.getElementById("id_environment");
        var env_val = environment.value;
		
		var url = "https://login.salesforce.com";
		
		if(env_val == "Production"){
			url = "https://login.salesforce.com";
		}
		else if(env_val == "Sandbox"){
			url = "https://test.salesforce.com";
		}
		
		var response_type = "code";
		var client_id = "3MVG9Y6d_Btp4xp4RiqK6sILFadrqQ.pAa8jTJgzlUoaWXWXGL1XSLdta_P0LdhDvUbbitK2tukE9pdgrTV95";
		var redirect_uri = "https://belle-maison-3975.herokuapp.com/";
		
		
		url = url + "/services/oauth2/authorize" + 
			"?response_type=" + response_type +
			"&client_id=" + client_id +
			"&redirect_uri=" + redirect_uri;
			
		http.get(url, function(res) {
			var body = '';

			res.on('data', function(chunk) {
				body += chunk;
			});

			res.on('end', function() {
				var fbResponse = JSON.parse(body)
				console.log("Got response: ", fbResponse.picture);
			});
		}).on('error', function(e) {
			  console.log("Got error: ", e);
		});
	
	});        
});
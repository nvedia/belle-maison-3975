$(document).ready(function(){
	$("#login").click(function(){
		var environment = document.getElementById("id_environment");
        var env_val = environment.value;
		var xmlhttp;
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		xmlhttp.onreadystatechange=function()
		{
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				var data = JSON.parse(xmlhttp.responseText);
				document.getElementById("getData").innerHTML = data;
			}
		}
		
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
			
	xmlhttp.open("GET",url,true);
	xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    xmlhttp.setRequestHeader("Access-Control-Allow-Headers", "Cache-Control, Origin, X-Requested-With, Content-Type, Accept");
    xmlhttp.setRequestHeader("Access-Control-Max-Age", "1728000");
    xmlhttp.setRequestHeader("Access-Control-Expose-Headers", "Cache-Control, Origin, X-Requested-With, Content-Type, Accept");

	xmlhttp.send();
	
	});        
});
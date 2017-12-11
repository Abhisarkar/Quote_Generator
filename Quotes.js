
$(document).ready( function(){
		
	$("#new-quote").on("click",function(){ 
	
		var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en";
		$.getJSON(url,function(json){
				
				$(".quote").html(json.quoteText);
				
		});
	});
	
});

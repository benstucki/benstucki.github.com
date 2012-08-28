var queries = location.search.substring(1, location.search.length).split('&');
for(var i=0; i<queries.length; i++) {
	var query = queries[i].split('=');
	if(query[0]=='p' || query[0]=='id') {
		$.ajax({url:"posts.json", dataType:"json", success: function(data) {
			var count = data.posts.length;
			var url = data.posts[Number(count-query[1])];
			window.location = "http://benstucki.com/" + url;
		}})
	}
}


// Twitter API Stuff -- using Twit package

Twit = new Twit({
  consumer_key:          process.env.TWITTER_KEY,
  consumer_secret:       process.env.TWITTER_SECRET,
  access_token:          process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret:   process.env.TWITTER_ACCESS_TOKEN_SECRET
  //timeout_ms:           60*1000  // optional HTTP request timeout to apply to all requests.
});


var wrapGet = Meteor.wrapAsync(Twit.get, Twit);

Meteor.methods({
	'getTwitterTrends': function() {

		data = wrapGet('trends/place', { id: 23424775 }); //id is based on woeid for location; 1 is worldwide; Toronto is 4118; north america is 24865672; canada is 23424775
			
		if (data){

			var trends = data[0].trends
			for(var i = 0; i < trends.length; i++){
				console.log(trends[i].name)
			}

		}else{
			console.log("halp this doesn't work")
		}
	}
});

// Twit.get('search/tweets',
// 			{
// 				q: 'banana since:2011-11-11',
// 				count: 100
// 			},
// 			function(err, data, response) {
// 				console.log(response)
// 				console.log(data);
// 				console.log(err);
// 				return data 
// 			}
// 		);
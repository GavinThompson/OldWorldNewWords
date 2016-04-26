

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
			let trendArray = [];
			let twitTrends = data[0].trends
			for(var i = 0; i < twitTrends.length; i++){
				let trend = twitTrends[i].name ;
				// console.log( twitTrends[i].name )
				trendArray.push( trend );
			}

			console.log( trendArray );
			return trendArray;

		}else{
			console.log("halp this doesn't work")
			let errorMsg = "YO! This is broken -- check me out on the server side of things -- catch ya on the flip side! *skateboard off into the clouds"
			return errorMsg
		}

		// *** NOTE: for future ref: if I decide to change the params on the client side; check out this link on how to call/set params properly in Meteor with callback
	}
});

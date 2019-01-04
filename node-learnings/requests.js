
var request  =  require('request');

request.get('https://www.metaweather.com/api/location/search/?query=london', function(err,res,body){

var data = JSON.parse(body);
console.log(data[0].woeid );
});
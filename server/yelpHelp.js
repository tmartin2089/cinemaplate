var Promise = require('bluebird')
var Yelp = require('node-yelp')
var fs = Promise.promisifyAll(require('fs'));
var client = Yelp.createClient({
  oauth: {
    "consumer_key": "GGeNigXussIz3mkdhKaL-Q",
    "consumer_secret": "Lxen47uBnJffmNirInmIkuCimAw",
    "token": "QnSWusN9Xr4a75q-edEEuAGTZVxfZRN3",
    "token_secret": "ZVPZtU1dBh3LP3UJtpuwPIXp3Qc"
  }
 })

var yelp = module.exports;

var call1 = client.search({
  actionlinks: true,
  location: "78701",
  offset: 0
})

var call2 = client.search({
  actionlinks: true,
  location: "78701",
  offset: 20
})

var call3 = client.search({
  actionlinks: true,
  location: "78701",
  offset: 40
})

var call4 = client.search({
  actionlinks: true,
  location: "78701",
  offset: 60
})

var call5 = client.search({
  actionlinks: true,
  location: "78701",
  offset: 80
})

var call6 = client.search({
  actionlinks: true,
  location: "78701",
  offset: 100
})

var call7 = client.search({
  actionlinks: true,
  location: "78701",
  offset: 120
})

var call8 = client.search({
  actionlinks: true,
  location: "78701",
  offset: 140
})

var call9 = client.search({
  actionlinks: true,
  location: "78701",
  offset: 160
})

var call10 = client.search({
  actionlinks: true,
  location: "78701",
  offset: 180
})



//goal for today -  wrap above calls in a function that you can pass zip codes into

//then return JSON object to index

yelp.getFoodList = function(){
  return Promise.all([call1, call2, call3, call4, call5, call6, call7, call8, call9, call10])
  .then(function(res){
    var eat24 = {}
    for(var x = 0; x < 10; x++){
        //boo quadratic
        eat24['nomnom' + x] = res[x].businesses.filter(function(y){
            return y.eat24_url !== undefined;
        })
    }
    return eat24;

  }).then(function(res){
      //fs.appendFile('promise.json', JSON.stringify(res, null, 4),{})
      console.log('made it inside of next then', res.nomnom3);

  })
  .catch(function(err){
    console.log('actually yo, Im an error',err)
  })
}

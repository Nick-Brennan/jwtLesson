atob = require('atob');

function subscribe(req, res){
  console.log("token", req.body.token);
  var decJWT = atob(req.body.token);
  console.log(decJWT);
  
  var custHead = JSON.parse(decJWT);
  console.log(custHead.myToken);
  // var custHead = req.body.token;
  res.setHeader("bearerToken", custHead.myToken);
  res.sendStatus(200);
  // res.writeHead(200, {'Content-Type': 'application/json', 'bearerToken': req.body.token});
}

module.exports = subscribe;
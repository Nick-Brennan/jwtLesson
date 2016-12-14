
function subscribe(req, res){
  console.log("token", req.body.token);
  var custHead = req.body.token;
  res.setHeader("bearerToken", custHead);
  res.sendStatus(200);
  // res.writeHead(200, {'Content-Type': 'application/json', 'bearerToken': req.body.token});
}

module.exports = subscribe;
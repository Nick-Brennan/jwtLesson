function home(req, res){
  res.sendFile( process.cwd() + "/views/index.html");
}

module.exports = home;
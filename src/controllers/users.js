var database = require('../models/index')

async function get_users(req, res){
  const result = await database('users')

  console.log(result);

  if(!result){
    res.json({
      "status": false,
      "message" : "ada error ya"
    })
  }

  res.json({
    "status"  : true,
    "message" : result
  })
  
}

module.exports = {get_users}
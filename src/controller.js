const { json } = require('body-parser');
const { response, request } = require('express');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  const data = require('../data/data.json').values;
  //const data = JSON.parse(jsonData);
  var height = req;
  var jsonResponse = JSON.parse('{}');
  console.log(height);
  for (let i = 0; i < data.length-1; i++) {
    var h = data[i].h_in;
    
    for (let j = i+1; j < data.length; j++) {
      var h2 = data[j].h_in;
      if (e+e2==height){
        jsonResponse.push('['+data[i]+','+data[j]+']');
        console.log(jsonResponse);
      }
    }
  }
  console.log(jsonResponse);
  return resp.json({ message: 'To be implemented' });
};

module.exports = { getPairsOfPlayers };

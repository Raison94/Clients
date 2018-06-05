const express = require('express')
var app = express();
     var path = require('path')
     var bodyParser = require('body-parser')
     var cors = require('cors')
     var mongoose = require('mongoose')      
     var client = require('./routes/client');
     app.use(express.static('public'));
     app.use(bodyParser.json());
     app.use(cors())

      app.use('/', client);

      var url='mongodb://Raison:rasi1994@ds016118.mlab.com:16118/raison'

      mongoose.connect(url,function(err){
          if(err){
              console.log('Connection bad')
          }
          console.log('Connection successfuly')
      })
      
      const port = process.env.PORT || 3000;

      const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
      });

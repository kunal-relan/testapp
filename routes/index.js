var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expressso' });
  res.render('index',{
      title : 'Expressss',
      todos : [
        {
          description : "Hy I am just testing the app",
          due : new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          done :false
        },
        {
          description : "something more",
          due : new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          done : true

        },

      ]



    });
});

module.exports = router;

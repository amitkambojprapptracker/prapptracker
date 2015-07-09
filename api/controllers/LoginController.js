/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	here: function (req, res) {
		console.log(req.method);
    	  	res.view('login/login');
  	},
  	postcall: function(req , res) {
  		u = (req.param('username'));
  		p = (req.param('password'));

  		Login.find({name:u,password:p}).exec(function (err, found){

  			if(_.isEmpty(found)) {
  				console.log('empty');
  				res.view('login/login');
  			}
  			else {
  				req.session.username = u;
  				var rank = found.pop().rank;
  				if(rank == 'manager') {
  					res.redirect('/profile1');
  				}
  				else if(rank == 'senior') {
  					res.redirect('/profile2');
  				}
  				else if(rank == 'junior') {
  					res.redirect('/profile3');
  				}
  			}
    			//console.log(found.pop().rank);
		});

  		/*Login.query('SELECT * FROM users where name="'+u+'" and password="'+p+'"', function (err , found) {
  			//var str = JSON.stringify(found);
  			//var str = found.split(':');
  			console.log(found->rank );
  			if( _.isEmpty(found)) {
  				req.session.username = 'amit';
  				res.view('login/login');	
  			}
  			else {
  				req.session.username = u;
  				res.redirect('/profile1');
  			}
  		})*/
  	}
};


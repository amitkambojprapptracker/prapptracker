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
  		Login.query('SELECT * FROM users where name="'+u+'" and password="'+p+'"', function (err , found) {
  			if( _.isEmpty(found)) {
  				req.session.username = 'amit';
  				res.view('login/login');	
  			}
  			else {
  				req.session.username = u;
  				res.redirect('/profile');
  			}
  		})
  	}
};


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
  		Login.findOne(1).exec(function (err , found) {
  			console.log(found);
  		})
  	}
};


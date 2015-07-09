/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	here: function (req, res) {
		//console.log('nothing');
		if(typeof(req.session.rank) !== 'undefined') {
			if(req.session.rank == 'manager') {
				res.redirect('/profile1');
			}
			else if(req.session.rank == 'senior') {
				res.redirect('/profile2');
			}
			else if(req.session.rank == 'junior') {
				res.redirect('/profile3');
			}
		}
		else
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
  				var rank = found.pop().rank;
  				console.log(rank);
  				req.session.username = u;
  				req.session.rank = rank;
  				
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


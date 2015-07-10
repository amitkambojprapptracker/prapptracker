/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	seeprofile: function (req,res) {
		if(typeof(req.session.username) !== 'undefined') {
			if(req.session.rank == 'senior') {
				senior = req.session.username;
				Profile2.find({senior_name :senior}).exec(function (err, found){
					console.log(found);
	    			res.view('profile/profile2',{ data : found } );
				});
			}
			else {
				res.redirect('/login');
			}
		}
		else {
			res.redirect('/login');
		}
	}
};


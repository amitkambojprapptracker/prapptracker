/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	seeprofile: function (req,res) {
		if(typeof(req.session.username) !== 'undefined') {
			if(req.session.rank == 'manager') {
				manager = req.session.username;
				console.log(manager);
				Profile1.find({manager_name :manager}).exec(function (err, found){
					var junior_names = found.pop().junior_name;
					//console.log();
	    			res.view('profile/profile1',{data : junior_names});
				});
			}
			else {
				res.redirect('/login');
			}
		}
		else {
			res.redirect('/login');
		}
		//res.view('profile/profile1');
	}
};


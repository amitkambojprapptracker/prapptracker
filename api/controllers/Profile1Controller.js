/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	seeprofile: function (req,res) {
		manager = req.session.username;
		Profile1.find({manager_name :manager}).exec(function (err, found){
    			res.view('profile/profile1',found);
		});
		//res.view('profile/profile1');
	}
};


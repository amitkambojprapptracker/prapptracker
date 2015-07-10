/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	seeprofile: function (req,res) {
		if(typeof(req.session.username) !== 'undefined') {
			if(req.session.rank == 'junior') {
				junior = req.session.username;
				Profile1.find({junior_name :junior}).exec(function (err1, found1){
					//console.log(found);
					Profile2.find({junior_name :junior}).exec(function (err2, found2){
    				res.view('profile/profile3',{data1 : found1 , data2:found2});
					});
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


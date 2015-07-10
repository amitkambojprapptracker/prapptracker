/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getcall: function (req, res) {
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
  				res.view('login/login',{data:'wrong'});
  			}
  			else {
  				var rank = found.pop().rank;
  				//console.log(rank);
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
    			
		});

  	},

    logout: function(req,res) {
      //console.log(req.session);
      req.session.destroy(function(err) {
        console.log('here');
        //return 1;
        res.redirect('/login');
      });
    },
    update: function(req,res) {
      junior_name = req.param('junior_name');
      manager_name = req.param('manager_name');
      promotion = req.param('promotion');
      /*console.log(junior_name.length);
      console.log(manager_name.length);
      console.log(promotion.length);*/
      l = junior_name.length;
      if(junior_name[l-1] == ' ') {
        junior_name = junior_name.substr(0,l-1);
      }
      l = manager_name.length;
      
      if(manager_name.charAt(l-1) == ' ') {
        manager_name = manager_name.substr(0,l-1);
      }
      l = promotion.length;
      if(promotion.charAt(l-1) == ' ') {
        promotion = promotion.substr(0,l-1);
      }
      
      junior_name = "'"+junior_name+"'";
      manager_name="'"+manager_name+"'";
      promotion = "'"+promotion+"'";
      /*console.log(junior_name);
      console.log(manager_name);
      console.log(promotion);*/
      Profile1.query('update junior_manager_table set promotion = '+ promotion + ' where junior_name = '+ junior_name + ' and manager_name = ' + manager_name , function(err,updated){
        /*console.log(updated);*/
        res.end();
      })
    },
    updatesenior: function(req,res) {

      junior_name = req.param('junior_name');
      senior_name = req.param('senior_name');
      task_id = req.param('task_id');
      rating = req.param('rating');
      /*console.log(junior_name.length);
      console.log(senior_name.length);
      console.log(task_id.length);*/
      l = junior_name.length;
      if(junior_name[l-1] == ' ') {
        junior_name = junior_name.substr(0,l-1);
      }
      l = senior_name.length;
      
      if(senior_name.charAt(l-1) == ' ') {
        senior_name = senior_name.substr(0,l-1);
      }
      l = task_id.length;
      if(task_id.charAt(l-1) == ' ') {
        task_id = task_id.substr(0,l-1);
      }
      l = rating.length;
      if(rating.charAt(l-1) == ' ') {
        rating = rating.substr(0,l-1);
      }
      
      junior_name = "'"+junior_name+"'";
      senior_name="'"+senior_name+"'";
      task_id = "'"+task_id+"'";
      rating = "'"+rating+"'";
      /*console.log(junior_name);
      console.log(senior_name);
      console.log(task_id);*/
      Profile1.query('update junior_senior_table set task_id = '+ task_id + ' , rating = '+ rating + ' where junior_name = '+ junior_name + ' and senior_name = ' + senior_name , function(err,updated){
        /*console.log(updated);*/
        res.end();
      })

    }
};


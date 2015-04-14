var  LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
  
  passport.use(new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    function(username, password, done) {
      // Verfiy with Mongo
      // User.findOne({ username: username }, function (err, user) {
      //   if (err) { return done(err); }
      //   if (!user) { return done(null, false); }
      //   if (!user.verifyPassword(password)) { return done(null, false); }
      //   return done(null, user);
      // });
      if(password == "jay")
          done(null, {user:"Jay"});
      else
        unauthorized(done);
    }
  ));
  
  var unauthorized = function(done){
    return done(false, false);

  };

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

};
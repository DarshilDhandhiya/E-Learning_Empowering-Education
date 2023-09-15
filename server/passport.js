const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user , done) => {
	done(null , user);
})
passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID:"1073563574116-53qt8vha2dblg5vkji1pnqj9sr467ujc.apps.googleusercontent.com", // Your Credentials here.
	clientSecret:"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", // Your Credentials here.
	callbackURL:"http://localhost:4000/auth/callback",
	passReqToCallback:true
},
function(request, accessToken, refreshToken, profile, done) {
	return done(null, profile);
}
));

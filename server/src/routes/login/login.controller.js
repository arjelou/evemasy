const HttpError = require('../../models/httpError');
const User = require('../../models/singup/singup.model');


const login = async (req, res, next ) => {
    const { email, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne( { email: email })
    }catch(err) {
        const error = new  HttpError(
            'Login failed, please try again!'
        );

        return next(error);
    }

    if(!existingUser || existingUser.password !== password) {
        const error = new  HttpError(
            'Invalid credentials, please try again!!'
        );
        
        return next(error);
    }

    res.json({message:'Log in!'})
}

exports.login = login;
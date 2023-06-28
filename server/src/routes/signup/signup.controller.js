const User = require('../../models/singup/singup.model');

const signup = async (req, res) =>{
   
    const { fullname, email, password } = req.body;

    const createdUser = new User({
        fullname, 
        email, 
        password
    });

    try {
        await createdUser.save();
    }catch(err){
        console.log(err);
    }

    res.status(201).json({user: createdUser.toObject({getters: true}) });

}

exports.signup = signup;
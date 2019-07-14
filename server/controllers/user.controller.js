const User = require('../models/user')

const userController = {};

userController.createUser = async(req, res)=>{
    const user = new User(req.body);
    await user.save();
    res.json({
        "status": 'user saved'
    });
};

userController.getUsers = async (req, res) =>{
    const users = await User.find()
    res.json(users);
    
};

userController.getUser = async(req, res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
};

userController.editUser = async (req, res)=>{
const user ={
    "name": req.body.name,
	"position":req.body.position,
	"office": req.body.office,
	"salary": req.body.salary
}
await User.findByIdAndUpdate(req.params.id, {$set: user},{new: true});
res.json({"status":"updated"});

};

userController.deleteUser = async(req, res)=>{
    await User.findByIdAndRemove(req.params.id);
    res.json({"status": "user deleted"});
};
module.exports = userController;
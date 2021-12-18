const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

//Schema for creating a new user 
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type: String, required:true, unique:true },
    roles:[{type:String, required:true, default:"user"}],
    password:{type:String, required:true,minlength:8}
},{
    versionKey:false,
    timestamps: true
});

//on create and update verbs
userSchema.pre("save",function(next){

    // check whether password is modified or not, if not then just return to next
    if(!this.isModified('password')) return next();

    //if modified then hash it
    const hash = bcryptjs.hashSync(this.password, 8);

    this.password = hash;

   return next();
})

//match the given password with user password
userSchema.methods.checkPassword = function(password){

    return bcryptjs.compareSync(password, this.password);
}


// craete users collection
module.exports = mongoose.model("user", userSchema);
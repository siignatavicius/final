const sendRes = require("../modules/sendRes")
const userSchema = require("../schemas/userSchema")



module.exports ={
    validateRegister: async (req, res, next) => {
      
        const {name, passOne, passTwo, city, gender, age } = req.body
       
        const dbUser = await userSchema.findOne({ name })
     
    
        if (dbUser) return sendRes(res, "user exist", true)

        if (!(name && city && passOne && passTwo && city && gender && age))
         return sendRes(res, "fill all fields", true)
         
        if (passOne !== passTwo) return sendRes(res, "passwords don't mach", true)
        
        next()

    }
}
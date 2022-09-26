const userSchema = require("../schemas/userSchema")
const photoSchema = require("../schemas/photoSchema")
const likeSchema = require("../schemas/likeSchema")
const sendRes = require("../modules/sendRes")
const bcrypt = require("bcrypt")

module.exports = {
    register: async (req, res) => {
        const {name, passOne, city, gender, age} = req.body

        const password = await bcrypt.hash(passOne, 10)


        const user = new userSchema({
            name,
            password, 
            city,
            gender,
            age
        })

        await user.save()

        sendRes(res, "registration ok", false)
    },

    login: async (req, res) => {
        const {name, password} = req.body

        const user = await userSchema.findOne({name})

        if (!user) return sendRes(res, "bad credentials", true)

        const compare = await bcrypt.compare(password, user.password )
        
        if (!compare) return sendRes(res, "bad credentials", true)
      
            req.session.user = user
        
        
           return sendRes(res, "login ok", false, user)
       },

        autoLogin: async (req, res) => {

            if (req.session.user) {
                const {name} = req.session.user
                const user = await userSchema.findOne({name})

                return sendRes(res, "login is ok", false,  user)
            }


            sendRes(res, "no user session", true)
        },

        logout: async (req, res) => {
            delete req.session.user
            sendRes(res, "session removed", false, null)
        },
 
       

    addphoto: async (req, res) => {
        const {name, photo} = req.body
        const userphoto = new photoSchema({
            name,
            photo
        })

        await userphoto.save()
        const myphotos = await photoSchema.find({name})

        sendRes(res, "photo saved", false, myphotos)
    
    },

    getmyphotos: async (req, res) => {
        const {name} = req.body
        const myphotos = await photoSchema.find({name})

        sendRes(res, "all good", false, myphotos)
    },

    addlike: async (req, res) => {
        const { id, like } = req.body

        console.log(req.body)
    },

    allphotos: async (req, res) => {
       
        const photos = await photoSchema.find()
        sendRes(res, "all good", false, photos)
    
   }
}


const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists'],
        validate: {
            validator: function(v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v)
            },
            message: `Invalid email address!`
        }
    },
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /[a-zA-Z]+/g.test(v)
            },
            message: `First name must contain only latin letters!`
        }
        
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password should be at least 6 characters']
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', userSchema)
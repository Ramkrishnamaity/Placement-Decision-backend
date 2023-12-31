//   **   creating profile model   **  //

const mongoose = require('mongoose')

// define schema for profile model
const profileSchema = new mongoose.Schema(
    {
        college: {
            type: String,
            default: "GMIT"
        },
        dept: {
            type: String,
        },
        gender: {
            type: String,
        },
        dateOfBirth: {
            type: Date,
        },
        about: {
            type: String,
            trim: true,
        },
        contactNumber: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        }
    }
)

// export model after model creation
module.exports = mongoose.model('Profile', profileSchema)
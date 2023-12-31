//      **  job related routes  **       //

const express = require('express')
const router = express.Router()

// import all required controllers and middlewares
const {auth, isAdmin} = require('../middlewares/AuthZ')
const { createJob, getJobs, getJob, deleteJob , updateJob, getLatestJobs} = require('../controllers/Job')



// map these with related routes

router.post('/createJob', auth, isAdmin, createJob)

router.put('/updateJob',auth, isAdmin, updateJob)

router.get('/getJobs', auth, getJobs)

router.post('/getJob', auth, getJob)

router.get('/getLatestJobs', getLatestJobs)

router.delete('/deleteJob', auth, isAdmin, deleteJob)


// export router for use in main application
module.exports = router
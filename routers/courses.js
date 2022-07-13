const express = require('express')
const router = express.Router()

const {Department} = require('../models/department.js')

const courseModel =require('../models/course.js')



router.get('/courses', (req, res) => {
    res.send('Hello this is me from router file!')
})

router.post('/courses', async (req, res) => {

   
     try{
     

      const course = new courseModel({
         name : req.body.name,
         duration : req.body.duration,
         startDate : req.body.startDate,
         endDate : req.body.endDate,
         intake : req.body.intake
        })
       

      const result = await course.save()
      if(!result){
         res.status(404).json('mesesage :  Course not found')
      }
       res.json(result)
       console.log(result)
     }catch(err){
     res.json(err)
     }


})

module.exports = router
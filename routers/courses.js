const { Router } = require('express');
const router = Router();

const { Department } = require('../models/department.js')

const Course = require('../models/course.js')

router.get('/courses', (req, res) => {
   res.send('Hello this is me from router file!')
})

router.post('/courses', async (req, res) => {
   try {
      console.log(req.body);
      const course = new Course({
         name: req.body.name,
         duration: req.body.duration,
         startDate: req.body.startDate,
         endDate: req.body.endDate,
         intake: req.body.intake
      });

      const result = await course.save();
      console.log('result: ', result);
      if (!result) {
         res.status(404).json('mesesage :  Course not found')
      }
      console.log(result)
      res.json(result)
   } catch (err) {
      console.log(typeof err)
      res.json({ err })
   }
});

module.exports = router
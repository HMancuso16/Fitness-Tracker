const router = require('express').Router();
const db = require('../models');

router.post('/api/workouts', (req, res) => {
  db.Workout.create( req.body)
    .then(dbWorkout)
    res.json(dbWorkout)
})
    .catch(err => {
      res.status(dbResult).json(err);
});

router.put('/api/workouts/:id', (req, res) => {
  db.Workout.findOneAndUpdate(
    {_id: req.params.id},
    req.body, 
    { new: true, runValidators: true })
    .then(dbResult => {
      return res.json(dbResult);
    })
    .catch(function(err){
      console.log(err);
      return res.json(err);
    });
});

router.get('/api/workouts', (req, res) => {
   db.Workout.find()
   .then(dbWorkout)
   return res.json(dbResult);
   })
  .catch(function(err){
  console.log(err);
  return res.json(err);
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .limit(4)
    .then(dbWorkout => {
    res.json(dbWorkout);
    })
    .catch(function(err){
    console.log(err);
    return res.json(err);
  });

router.delete('/api/workouts', ({ body }, res) => {
  db.Workout.findOneAndDelete(
    {_id: req.params.id},
    req.body, 
    { new: true, runValidators: true })
    .then(dbResult => {
      return res.json(dbResult);
    })
    .catch(function(err){
      console.log(err);
      return res.json(err);
    });
});
});

module.exports = router;

var express = require('express');
var router = express.Router();

// create a model
const Vaccine = require('../models/Vaccine');
const { updateOne } = require('../models/Vaccine');


// GETS BACK ALL THE VACCINES
router.get('/', async function(req, res, next) {
  try {
    const vaccine = await Vaccine.find();
    res.json(vaccine);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMITS A VACCINE
router.post('/', async function(req, res, next) {
  const vaccine = new Vaccine({
    title: req.body.title,
    description: req.body.description,
    sideEffects: req.body.sideEffects,
    duration: req.body.duration,
    administration: req.body.administration,
    underAge: req.body.underAge,
    medicalConsiderations: req.body.medicalConsiderations
  });

  try{
    const savedVaccine = await vaccine.save();
    res.json(savedVaccine);
  }catch(err){
    res.json({ message: err });
  }
});

// GETS A SPECIFIC VACCINE 
router.get('/:vaccineId', async (req, res) => {
  try{
    const vaccine = await Vaccine.findById(req.params.vaccineId);
  res.json(vaccine); 
  }catch(err) {
    res.json({ message: err });
  }
});

// DELETES A SPECIFIC VACCINE
router.delete('/:vaccineId', async (req, res) => {
  try{
  const removedVaccine = await Vaccine.remove({_id: req.params.vaccineId});
  res.json(removedVaccine);
  }catch(err) {
    res.json({ message: err });
  }
});

// UDATE A VACCINE
router.patch('/:vaccineId', async (req, res) => {
  try{
    const updatedVaccine = await Vaccine.updateOne(
      { _id: req.params.vaccineId },
      { $set: {
        description: req.body.description,
        sideEffects: req.body.sideEffects,
        duration: req.body.duration,
        administration: req.body.administration,
        underAge: req.body.underAge,
        medicalConsiderations: req.body.medicalConsiderations
      }
    });
    res.json(updatedVaccine);
  }catch(err) {
    res.json({ message: err });
  }
})

module.exports = router;
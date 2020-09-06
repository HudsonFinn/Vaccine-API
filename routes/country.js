var express = require('express');
var router = express.Router();

// create a model
const Country = require('../models/Country');
const { count } = require('console');

// GETS BACK ALL ITEMS
router.get('/', async function(req, res, next) {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMITS A COUNTRY
router.post('/', async function(req, res, next) {
  // console.log(req.body);
  const country = new Country({
    code: req.body.code,
  });

  try{
  const savedItem = await country.save();
  res.json(savedItem);
  }catch(err){
    res.json({ message: err });
  }
});

// GETS A SPECIFIC ITEM 
router.get('/:countryCode', async (req, res) => {
  // console.log(req.params.itemId); 
  try{
  const country = await Country.findOne({ 'code': req.params.countryCode });
  if(country == null){
    res.json({error: "No country found with Country Code: " + req.params.countryCode});
  }
  res.json(country); 
  }catch(err) {
    res.json({ message: err });
  }
});

// DELETE A SPECIFIC ITEM
router.delete('/:itemId', async (req, res) => {
  try{
  const removedItem = await Country.remove({_id: req.params.itemId});
  res.json(removedItem);
  }catch(err) {
    res.json({ message: err });
  }
});

// UDATE AN ITEM
router.patch('/:itemId', async (req, res) => {
  try{
    const updatedItem = await Country.updateOne(
      { _id: req.params.itemId },
      { $set: {title: req.body.title}
    });
    res.json(updatedItem);
  }catch(err) {
    res.json({ message: err });
  }
})

module.exports = router;
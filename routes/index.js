var express = require('express');
var router = express.Router();

// create a model
const Item = require('../models/Item');
const { updateOne } = require('../models/Item');

/* GET home page. */
// GETS BACK ALL ITEMS
router.get('/', async function(req, res, next) {
  // Item.find().then(items => res.json(items)) added from jango's code
  // res.send("this is the home route");
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMITS AN ITEM
router.post('/', async function(req, res, next) {
  // console.log(req.body);
  const item = new Item({
    title: req.body.title,
    description: req.body.description
  });

  try{
  const savedItem = await item.save();
  res.json(savedItem);
  }catch(err){
    res.json({ message: err });
  }
});

// GETS A SPECIFIC ITEM 
router.get('/:itemId', async (req, res) => {
  // console.log(req.params.itemId); 
  try{
  const item = await Item.findById(req.params.itemId);
  res.json(item); 
  }catch(err) {
    res.json({ message: err });
  }
});

// DELETE A SPECIFIC ITEM
router.delete('/:itemId', async (req, res) => {
  try{
  const removedItem = await Item.remove({_id: req.params.itemId});
  res.json(removedItem);
  }catch(err) {
    res.json({ message: err });
  }
});

// UDATE AN ITEM
router.patch('/:itemId', async (req, res) => {
  try{
    const updatedItem = await Item.updateOne(
      { _id: req.params.itemId },
      { $set: {title: req.body.title}
    });
    res.json(updatedItem);
  }catch(err) {
    res.json({ message: err });
  }
})

module.exports = router;

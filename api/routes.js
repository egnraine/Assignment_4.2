const express = require('express');
const Model = require('./model');
const router = express.Router()

module.exports = router;


//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        hometown: req.body.hometown,
        class: req.body.class,
        p_time: req.body.p_time,
        f_time: req.body.f_time,
        imp: req.body.imp,
        event: req.body.event,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})




// 5 Queries: 
// Sort players with best prelim time 
router.get('/getPrelim', async (req, res) => {
    try {
        const data = await Model.find().sort({ p_time: 1 });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// Sort players with best final times
router.get('/getFinal', async (req, res) => {
    try {
        const data = await Model.find().sort({ f_time: 1 });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//  Sort players with worst final times
router.get('/getWorst', async (req, res) => {
    try {
        const data = await Model.find().sort({ f_time: -1 });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// Sort players with highest improvement
router.get('/getImp', async (req, res) => {
    try {
        const data = await Model.find().sort({ imp: -1 });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Sort best upcoming freshman based on final times
router.get('/getClass', async (req, res) => {
    try {
        const data = await Model.find({ class: 'FR' }).sort({ f_time: 1 })
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
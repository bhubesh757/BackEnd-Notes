// gets all the jokes
// Using Router


const express = require('express');
const jokes = require('../../public/jokes');
const router = express.Router();
const uuid = require('uuid')


router.get('/api/jokes' , (req , res) => {
    // using some json
    res.json(jokes);
});

//individual member

router.get(':id' , (res , req) => {

    const found = jokes.some(jokes => jokes.id === parseInt(req.params.id))
    // res.send(req.params.id);
    if(found){

        res.json(jokes.filter(joke => jokes.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg : 'Jokes Not Found'})
    }
});

// Create a jokes
// to createa a jokes user post request

router.post('/' , (req , res) => {
    // res.send(req.body)
    const newJokes = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email,
        status : 'active'
    }

    if(!newJokes.name || !newJokes.email) {
        return res.status(400).json({msg : 'Please include a name and email'});

    }

    jokes.push(newJokes);
})

module.exports = router;

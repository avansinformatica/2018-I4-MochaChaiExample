const express = require('express');
const router = express.Router();


router.get('/roommate/:name?', (req, res) => {

    const name = req.params.name || '';

    let result = [];
    if( name === '' ) {

        //result = {'Message': 'Je moet wel een naam opgeven!' }

        result = [
            { 'name' : 'Peter', 'cooking skills': '6 out of 10'},
            { 'name' : 'Johan','cooking skills': '8 out of 10' },
            { 'name' : 'Cor','cooking skills': '7 out of 10' },
            { 'name' : 'Linda','cooking skills': '8 out of 10' },
            { 'name' : 'Julia','cooking skills': '2 out of 10' },
        ];

    } else {
        result = {
            'name' : name,
            'cooking skills': '5 out of 10'
        };
    }

    res.json(result);
});

// Fall back, display some info
router.all('*', (req, res) => {
    res.status(500);
    res.json({
        "description": "Unknown endpoint, go away you hacker"
    });
});

module.exports = router;



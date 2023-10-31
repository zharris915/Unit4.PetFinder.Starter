// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', async (req, res) => {
        try {
            const allPets = await Pet.find({});
            res.json(allPets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
    // send the pets array as a response


// get pet by owner with query string
// Assuming you have a database and a function to retrieve a pet by owner's name

// Example of retrieving a pet by owner's name from the database (pseudocode)
app.get('/api/v1/pets/owner', async (req, res) => {
    const owner = req.query.owner;

    try {
        // Query the database to find a pet by owner's name
        const pet = await Pet.findOne({ owner }); 

        if (pet) {
            // Return the pet details as a JSON response
            res.json(pet);
        } else {
            // If the pet is not found, return a 404 status with a relevant message
            res.status(404).json({ message: 'Pet with this owner not found' });
        }
    } catch (error) {
        // Handle errors, if any
        res.status(500).json({ error: error.message });
    }
});

    // get the owner from the request


    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

});

// get pet by name
app.get('/api/v1/pets/:name', async (req, res) => {
            const name = req.params.name;
    
        try {
            // Query the database to find a pet by name
            const pet = await Pet.findOne({ name }); 
    
            if (pet) {
                // Return the pet details as a JSON response
                res.json(pet);
            } else {
                // If the pet is not found, return a 404 status with a relevant message
                res.status(404).json({ message: 'Pet not found' });
            }
        } catch (error) {
            // Handle errors, if any
            res.status(500).json({ error: error.message });
        }
    });
    
    // get the name from the request


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response



app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;
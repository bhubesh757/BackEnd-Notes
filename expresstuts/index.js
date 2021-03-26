const express = require('express');
const path = require('path')
const jokes  = require('./public/jokes')
const app = express();

const moment = require('moment')


const logger = (req , res , next) => {
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl
    }: ${moment().format()}`
    );
    next();
};

// middleware

app.use(logger);


// gets all the jokes
 
app.get('/api/jokes' , (req , res) => {
    // using some json
    res.json(jokes);
});



// // To add the files to the database
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname , 'public' , 'index.html'))
//   });
// //   res.render();

// set a static folder
// the use of static file is it doesnt get into the directory file ,  
// the main usage is the routing 
app.use(express.static(path.join(__dirname , 'public')));

const PORT = process.env.PORT || 3030;

// what listen does is it creates port number and shows the content in the website
app.listen(PORT , () => {
    console.log(`server started on port ${PORT}`);
});

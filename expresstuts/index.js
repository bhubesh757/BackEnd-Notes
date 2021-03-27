const express = require('express');
const path = require('path')
const jokes  = require('./public/jokes')
const app = express();


const logger = require('./middleware/logger');



// middleware

// app.use(logger);



// Body parsing

app.use(express.json());
app.use(express.urlencoded({
    extended : false
}));




// // To add the files to the database
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname , 'public' , 'index.html'))
//   });
// //   res.render();

// set a static folder
// the use of static file is it doesnt get into the directory file ,  
// the main usage is the routing 
app.use(express.static(path.join(__dirname , 'public')));

// just routing to the jokes
app.use('/api/jokes' , require('./routes/api/jokes'))

const PORT = process.env.PORT || 3030;

// what listen does is it creates port number and shows the content in the website
app.listen(PORT , () => {
    console.log(`server started on port ${PORT}`);
});
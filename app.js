const express = require("express")
const path = require("path");
const hostname = 'localhost'
const app = express();
const port = 3000;


//EXPRESS SPECIFIC STUFFN
app.use('/static', express.static('static'))  // for serving  static file 
app.use(express.urlencoded())


// FOR PUG SPECIFIC STUFF 
app.set('view engine', 'pug') //set the templet as pug 

app.set('views', path.join(__dirname, 'views')) // set the views directory 

//ENDPOINTS
app.get('/index', (req, res)=>{

    res.status(200).render('index.pug');
})
app.get('/', (req, res)=>{

    res.status(200).render('home.pug');
})
app.get('/home', (req, res)=>{

    res.status(200).render('home.pug');
})
app.get('/about', (req, res)=>{

    res.status(200).render('about.pug');
})

app.get('/contact', (req, res)=>{

    res.status(200).render('contact.pug');
})
app.get('/new_jobs', (req, res)=>{

    res.status(200).render('new_jobs.pug');
})

app.get('/mobile', (req, res)=>{

    res.status(200).render('mobile.pug');
})
app.get('/callcenter', (req, res)=>{

    res.status(200).render('callcenter.pug');
})

app.get('/it_job', (req, res)=>{

    res.status(200).render('it_job.pug');
})

app.get('/wfh', (req, res)=>{

    res.status(200).render('wfh.pug');
})
app.get('/all-link', (req, res)=>{

    res.status(200).render('all-link.pug');
})
app.get('/all-mobile', (req, res)=>{

    res.status(200).render('all-mobile.pug');
})

//START THE SERVER 
app.listen(port, () => {
    console.log(`the application started successfully on port ${hostname}:${port}`)
})
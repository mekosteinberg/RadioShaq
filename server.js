const express = require('express');
const getLinks = require('./models/links.js')
const getNewsLinks = require('./models/companynews.js')
const getStaff = require('./models/staff.js')
const app = express();
 
app.use(express.static('public'))
 
app.set('view engine', 'ejs')

app.listen(3001, () => {
    console.log('listening...');
})

app.get('/', (req,res)=>{
    res.render('homepage.ejs', {
        tabTitle: 'Home'
    })
})

app.get('/about', (req,res) => {
    res.render('aboutradioshaq.ejs',{
        tabTitle: 'About'
    })
})

app.get('/contact', (req,res) => {
    res.render('contact.ejs',{
        tabTitle: 'Contact Us'
    })
})

app.get('/staff', (req,res) => {
    res.render('staff.ejs',{
        staffLinks: getStaff,
        tabTitle: 'Staff'
    })
})

app.get('/news', (req,res) => {
    res.render('companynews.ejs', {
        newsLinks: getNewsLinks,
        tabTitle: 'News'
    })
})
 
app.get('/links', (req,res) => {
    res.render('links.ejs', {
        partnerLinks: getLinks,
        tabTitle: `Links`
    })
})


const express = require('express');
const path = require('path');

const port = process.env.PORT || 3001;

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/externalLibraries', express.static(path.join(__dirname, 'externalLibraries')))

app.get('', (req, res) => {
    const URI = path.join(__dirname, 'views', 'index.html');
    res.sendFile(URI);
})

app.get('/main', (req, res) => {
    const URI = path.join(__dirname, 'views', 'mainPage.html');
    res.sendFile(URI);
})

app.get('/login', (req, res) => {
    const URI = path.join(__dirname, 'views', 'login.html');
    res.sendFile(URI);
})

app.get('/register', (req, res) => {
    const URI = path.join(__dirname, 'views', 'register.html');
    res.sendFile(URI);
})

app.get('/createQuiz', (req, res) => {
    const URI = path.join(__dirname, 'views', 'createQuiz.html');
    res.sendFile(URI);
})

app.get('/answerQuiz', (req, res) => {
    res.redirect(`/main`)
})

app.get('/answerQuiz/:id', (req, res) => {
    const URI = path.join(__dirname, 'views', 'answerQuiz.html');
    res.sendFile(URI);
})

app.get('*', (req, res) => {
    const URI = path.join(__dirname, 'views', 'error.html');
    res.sendFile(URI);
})
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})
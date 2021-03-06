const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
const accountData = fs.readFileSync('src/json/accounts.json',{encoding: 'UTF8'});
const accounts = JSON.parse(accountData);
const userData = fs.readFileSync('src/json/users.json',{encoding: 'UTF8'});
const users = JSON.parse(userData);
app.get('/', function(request, response){
    response.render('index', {title: 'Account Summary', accounts: accounts});
});
app.get('/savings', function(request, response){
    response.render('account', {account: accounts.savings});
});
app.get('/checking', function(request, response){
    response.render('account', {account: accounts.checking});
});
app.get('/credit', function(request, response){
    response.render('account', {account: accounts.credit});
});
app.get('/profile', function(request, response){
    response.render('profile', {user: users[0]});
});
app.listen(3000,function(){
    console.log('PS Project Running on port 3000!');
});

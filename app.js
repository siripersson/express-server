const express= require('express') // importera express och spara i en variabel
const path=require('path')


const app =express() // Skapa en express app

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//app.get('/', function(req,res){ // 
app.get('/', (req,res) => {
	console.log("Nu är vi på startsidan")
	//res.send("Hello World!")
	res.render('fruit')
})

app.get('/om', (req,res) => {
	console.log("Nu är vi på om-sidan")
	res.send("This is a page about the company!")
})

app.get('/kontakt', (req,res) => {
	console.log("Nu är vi på kontaktsidan")
	res.send("Contact us at: notresponding@gmail.com!")
})
// Koppla appen så den lyssnar på trafik
// Det gör vi genom att ange vilken port den ska lyssna på
app.listen(3000, function(){
	console.log('App acting on port 3000! Visit localhost:3000 in Chrome')
})
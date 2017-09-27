const express= require('express') // importera express och spara i en variabel

const app =express() // Skapa en express app

// Koppla appen så den lyssnar på trafik
// Det gör vi genom att ange vilken port den ska lyssna på
app.listen(3000, function(){
	console.log('App acting on port 3000! Visit localhost:3000 in Chrome')
})
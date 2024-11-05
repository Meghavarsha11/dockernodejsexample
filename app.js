const express = require('express'); 
const app = express(); 
app.get('/',(req,res) => { 
 res.send("Docker Nodejs Example"); 
}); 
app.listen(3555,() => { 
 console.log("Server is running on port 3555") 
})
const express=require("express")
const app=express()
const port=3000

app.get("/", (req,res)=>{

	res.send("Primer Proyecto git")

});

app.listen(port,()=>{
	console.log("este servidor esta funcionado")
})








const yargs= require("yargs")
const http = require ("http")
// const url =("http://jsonplaceholder.typicode.com/todos")
//let data

yargs.command({
    command:"fetchApi",
    builder:{
        url:{
        type:String,
        demandOption:true
        }

    },
    handler:function(argv){
        const req= http.request(argv.url, (res)=>{
            let allDAta=""
        res.on("data", (myData)=>{
            allDAta+= myData.toString()
        })
        res.on("end" , ()=>{
            console.log(JSON.parse(allDAta))
        
        })
        })
        req.on("error" , (err)=> console.log(`error ${err}`))
        req.end()
    //  data=argv.url
    }

})
yargs.argv




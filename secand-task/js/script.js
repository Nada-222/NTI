

// const showData = document.querySelector (showData)
// const userData =["userName","id","age","syatus"]
 



// const writeDataToStorage =(key,userData) =>{
//     try{
//         localStorage.setItem(key,JSON.stringify(userData))
//     }
//     catch{
//         localStorage.setItem(key,"[]")
//     }
// }
// // userData.forEach(h=>)

let users =[{
    id : 1,
    name : 'ahmed' ,
    active : false ,
    age : 25 ,
},{
    id : 2,
    name : 'Nada' ,
    active : false ,
    age : 20 ,
},{
    id : 1,
    name : 'Sara' ,
    active : false ,
    age : 25 ,
}

]



localStorage.setItem("users",JSON.stringify(users))

const userData= JSON.parse(localStorage.getItem("users"))
console.log(userData)


const creatEle =(type , text , location) =>{
    const ele =document.createElement(type)
    ele.innerHTML= text
    location.appendChild (ele)
    return ele
}


const stateheck =(valu)=> valu? "active": "inactive"
// showData.innerHTML=""
userData.forEach((e) =>{
    const table = document.querySelector("#showData")
    const row = creatEle ("tr" ,null , table )
    console.log(row) //<tr></tr>
    creatEle("td", e.id , row)
    creatEle("td", e.name , row)
    creatEle("td", e.age , row)


    const statuse =creatEle("td" , stateheck(e.active) ,row  )
    const tdEle = creatEle("td" , null , row)

    const btn = creatEle("botton" , "edit" , tdEle )
    btn.setAttribute("class","btn btn-danger btn-sm")

    const delbtn = creatEle("botton" , "delet" , tdEle )
    delbtn.setAttribute("class","btn btn-danger btn-sm")




    btn.addEventListener("click", ()=>{
        e.active = !e.active
        statuse.innerHTML =stateheck(e.active)

    })
    // btn.addEventListener("click", ()=>{

    // })
})


//edit 
const editSingle = (i)=>{
    localStorage.setItem("edit" , i)
    window.location.href="edit.html"

}
//delete
const delElementFromArray =(storagekry , userData ,i)=>{
    userData.splice(i ,1)
    riteDataToStorage(storagekry, userData)
    showAll(userData)

}

if("editForm"){
    const index = redFromStorage ("edit","string")
    const userData = redFromStorage ("userDta")
    const task = userData[index]
    users.forEach( h => editForm.elements[h].value = task[h] )
    editForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        users.forEach( h =>  allData[index][h]=editForm.elements[h].value )
        writeDataToStorage("tasks",userData)
        editForm.reset()
        window.location.href="index.html"
    })
}



//in another js file

// function apiData(cb){
//     const data = fetch("https://jsonplaceholder.typicode.com/posts")
//     data
//     .then(res=>{
//         jsonData = res.json()
//         jsonData
//         .then(result=> cb(result))
//         .catch(ee=> cb(ee))
//     })
//     .catch(e=> cb(e))
// }
// apiData(res=> console.log(res))
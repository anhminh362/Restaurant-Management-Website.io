import axios from "axios";

const API="https://63aa9d5d7d7edb3ae62c2f74.mockapi.io/"
function callAPI(endpoint,method="get",body){
    return axios({method,url:`${API}/${endpoint}`,data:body}).catch((error)=>{console.log(error);})
}
function addTable(){
    var date=document.getElementById("datetime").value;
    var table=document.getElementById("select1").value;
    console.log(date,table);
    var saveData=[]
    var arr
    callAPI("Tables","get",null).then((res)=> {arr=res.data;console.log(arr);})
}







function show() {
  
  var Product;
  var html = "<tr>";
  const sendPostRequest = async () => {
      try {
          await axios.get('https://63aa9d5d7d7edb3ae62c2f74.mockapi.io/Products')
          .then((res)=>{Product=res.data; console.log(Product,"abc");
  for (let i in Product) {
    html += '<td>'+'<p>' + Product[i].id + '</p>'+"</td>";
  //   html+='<td>'+'<p>17th Oct, 15</p>'+'<p class="text-danger">Overdue</p>'+'</td>'
    html += '<td>' + Product[i].name + "</td>";
    if (Product[i].img.indexOf("http"))
    {
      html +='<td class="member"> <figure><img src="../../asset/picture/'+Product[i].img+'"/></figure></div></td>';
    }
    else{
     
      html +='<td class="member"> <figure><img src="' +Product[i].img +'"/></figure></div></td>';
    }
    html += '<td><div class="member-info"><p>' + Product[i].desc + "</p></div></td>";

    // <div class="member-info"><p>'+Product[i].name+'</p><p>'+Product[i].desc+'</p>
    html += '<td><p>' + Product[i].price + '</p>'+"</td>";
    html += '<td >' + Product[i].promotion + "</td>";
    if(Product[i].status==true){
      html += '<td >' + "active" + "</td>";
    }
    else{
      html += '<td >' + "block" + "</td>";}
    html +='<td>';
    html+=`<ul><li class='nav-item dropdown tdCenter '>`
    html+='<a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</a>'
    html+='<div class="dropdown-menu" aria-labelledby="navbarDropdown">'
    html+=`<button onClick="deletes(${Product[i].id})" class="dropdown-item" >DELETE</button>`
    html+=`<button onClick="edit(${Product[i].id})" data-toggle="modal" data-target="#exampleModal" class="dropdown-item" >UPDATE</button>`
    if(Product[i].status==true){
      html+=`<button onClick="block(${Product[i].id})" class="dropdown-item" >BLOCK</button>`
    }
    else{
      html+=`<button onClick="active(${Product[i].id})" class="dropdown-item" >ACTIVE</button>`

    }

    


    // html+='<div class="dropdown-divider"></div>'
    // html+='<a class="dropdown-item" href="#">Something else here</a>'
    html+='</div>'
    html+='</li></ul>'
    html+="</td>";
    // html +='<td>'+`<form class="form" action="#" method="POST"><select class="action-box"><option>Actions</option><option>Update</option><option onClick="deletes(${Product[i].id})">Delete</option></select></form></td>`
    html += "</tr>";
  }
  

  document.getElementById("product").innerHTML = html;
});
}catch (err) {
  console.error(err);
}
}

sendPostRequest();
}


show()

function post() {
var name = document.getElementById("name").value;
var detail = document.getElementById("desc").value;
var category = document.getElementById("category").value;
var price = document.getElementById("price").value;
var img=document.getElementById("fileInput").value;
let image = img.split("\\")[2];
var promotion=document.getElementById("promotion").value;

console.log(image);


var OneProduct = {
  name: name,
  desc:detail,
  price: price,
  type:category,
  img:image,
  status:true,
  promotion:promotion
};
console.log(OneProduct);
axios.post('https://63aa9d5d7d7edb3ae62c2f74.mockapi.io/Products', OneProduct)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
alert("Done!");
window.location.href="product.html";

}


function deletes(id) {
  var r = confirm("Do you want to delete this product?");
  if (r == true) {
    axios.delete(`https://63aa9d5d7d7edb3ae62c2f74.mockapi.io/Products/${id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setTimeout(() => {
        window.location.reload(false);
    }, 1000);

    alert("I'm sure!");
    
  } else {
      window.location.href = "mockdata.html";
  }
}

function edit(a) {
var product;
axios.get('https://63aa9d5d7d7edb3ae62c2f74.mockapi.io/Products')
.then(function (response) {
  product=response.data;
  for(var i=0;i <= product.length;i++){
    if(product[i].id==a){
          document.getElementById("id").value=product[i].id;
          document.getElementById("name").value=product[i].name;
          document.getElementById("desc").value=product[i].desc;
          document.getElementById("category").value=product[i].type;
          document.getElementById("price").value=product[i].price;
          document.getElementById("promotion").value=product[i].promotion;
          if (product[i].img.indexOf("http"))
          {
            document.getElementById("image").innerHTML='<img  src="../../asset/picture/'+product[i].img+'"/>';
          }
          else{
           
            document.getElementById("image").innerHTML='<img src="' +product[i].img +'"/>';
          }
          document.getElementById("status").value=product[i].status;
        }
  }
  
})


  


}
function block(id){

        var OneProduct = {
          status:false,
      }
      console.log(OneProduct);
  axios.put(`https://63aa9d5d7d7edb3ae62c2f74.mockapi.io/Products/${id}`, OneProduct)
    .then(function (response) {

    })
    .catch(function (error) {
      console.log(error);
    });
    alert("Done!");
    
      window.location.reload(false);
   
    }


function active(id){
  
        var OneProduct = {
          status:true,
      }
      console.log(OneProduct);
  axios.put(`https://63aa9d5d7d7edb3ae62c2f74.mockapi.io/Products/${id}`, OneProduct)
    .then(function (response) {

    })
    .catch(function (error) {
      console.log(error);
    });
    alert("Done!");
    
      window.location.reload(false);
   
    }
    
function editt() {
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var desc = document.getElementById("desc").value;
  var promotion = document.getElementById("promotion").value;
  var img=document.getElementById("fileInput").value;
let image = img.split("\\")[2];
  var OneProduct = {
      id: id,
      name: name,
      img: image,
      price: price,
      desc: desc,
      promotion:promotion,
  }
  console.log(OneProduct);
  axios.put(`https://63aa9d5d7d7edb3ae62c2f74.mockapi.io/Products/${id}`, OneProduct)
.then(function (response) {

})
.catch(function (error) {
  console.log(error);
});
alert("Done!");
// setTimeout(() => {
  window.location.reload(false);
// }, 1000);
  
}

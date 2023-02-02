function show() {
  
    var Product;
    var html = "<tr>";
    const sendPostRequest = async () => {
        try {
            await axios.get('https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User')
            .then((res)=>{Product=res.data; console.log(Product,"abc");
    for (let i in Product) {
      html += '<td>'+'<p>' + Product[i].id + '</p>'+"</td>";
      if (Product[i].avatar.indexOf("http"))
      {
        html +='<td class="member"> <figure><img src="../../asset/picture/'+Product[i].avatar+'"/></figure></div></td>';
      }
      else{
       
        html +='<td class="member"> <figure><img src="' +Product[i].avatar +'"/></figure></div></td>';
      }

      html += '<td><p>' + Product[i].UserName + '</p>'+"</td>";
      html += '<td><p>' + Product[i].Email + '</p>'+"</td>";
      html += '<td><p>' + Product[i].CreateAt + '</p>'+"</td>";
      html += '<td><p>' + Product[i].UpdateAt+ '</p>'+"</td>";
      
      
    if(Product[i].Status==true){
      html += '<td >' + "active" + "</td>";
    }
    else{
      html += '<td >' + "block" + "</td>";}
      html +='<td>';
      html+=`<ul><li class='nav-item dropdown tdCenter'>`
      html+='<a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</a>'
      html+='<div class="dropdown-menu" aria-labelledby="navbarDropdown">'
      html+=`<button onClick="edit(${Product[i].id})" data-toggle="modal" data-target="#exampleModal" class="dropdown-item" >UPDATE</button>`
      if(Product[i].Status==true){
        html+=`<button onClick="block(${Product[i].id})" class="dropdown-item" >BLOCK</button>`
      }
      else{
        html+=`<button onClick="active(${Product[i].id})" class="dropdown-item" >ACTIVE</button>`
  
      }
      html+='</div>'
      html+='</li></ul>'
      html+="</td>";
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
  var name = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var OneProduct = {
    UserName: name,
    Email:email,
    password:password,
    Status:true,
    // promotion:promotion
  };
  console.log(OneProduct);
  axios.post('https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User', OneProduct)
  .then(function (response) {
    console.log(response,'abc');
  })
  .catch(function (error) {
    console.log(error);
  });
  alert("Done!");
  // window.location.href="account.html";
  
  }

function block(id){

  var OneProduct = {
    Status:false,
}
console.log(OneProduct);
axios.put(`https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User/${id}`, OneProduct)
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
    Status:true,
}
console.log(OneProduct);
axios.put(`https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User/${id}`, OneProduct)
.then(function (response) {

})
.catch(function (error) {
console.log(error);
});
alert("Done!");

window.location.reload(false);

}

function edit(b) {
  var user;
  axios.get('https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User')
  .then(function (response) {
    user=response.data;
    for(var i=0;i <= user.length;i++){
      if(user[i].id==b){
            document.getElementById("id").value=user[i].id;
            document.getElementById("username").value=user[i].UserName;
            document.getElementById("email").value=user[i].Email;
            document.getElementById("creation").value=user[i].CreateAt;
            document.getElementById("update").value=user[i].UpdateAt;
          }
    }
    
  })

    

  
}

function editt() {
    var id = document.getElementById("id").value;
    var UserName = document.getElementById("username").value;
    var Email = document.getElementById("email").value;
    var CreateAt = document.getElementById("creation").value;
    var UpdateAt = document.getElementById("update").value;
    var OneProduct = {
        id: id,
        UserName: UserName,
        Email:Email,
        CreateAt: CreateAt,
        UpdateAt: UpdateAt,

    }
    console.log(OneProduct);
    axios.put(`https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User/${id}`, OneProduct)
  .then(function (response) {

  })
  .catch(function (error) {
    console.log(error);
  });
  alert("Done!");
  setTimeout(() => {
    window.location.reload(false);
}, 1000);
    
}

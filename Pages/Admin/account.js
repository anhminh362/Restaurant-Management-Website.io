function show() {
  
    var Product;
    var html = "<tr>";
    const sendPostRequest = async () => {
        try {
            await axios.get('https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User')
            .then((res)=>{Product=res.data; console.log(Product,"abc");
    for (let i in Product) {
      html += '<td>'+'<p>' + Product[i].id + '</p>'+"</td>";
      html += '<td>' + Product[i].name + "</td>";
    //   html +='<td class="member"> <figure><img src="' +Product[i].img +'"/></figure><div class="member-info"><p>'+Product[i].name+'</p><p>'+Product[i].desc+'</p></div></td>';
      html += '<td><p>' + Product[i].email + '</p>'+"</td>";
      html += '<td><p>' + Product[i].password + '</p>'+"</td>";
      html += '<td><p>' + Product[i].UserName + '</p>'+"</td>";
    //   html += '<td><p>' + Product[i].Passwork + '</p>'+"</td>";
    //   html += '<td class="status">' + '<span class="status-text status-orange">In progress</span>'+ "</td>";

      html +='<td>';
      html+=`<ul><li class='nav-item dropdown '>`
      html+='<a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</a>'
      html+='<div class="dropdown-menu" aria-labelledby="navbarDropdown">'
      html+=`<button onClick="deletes(${Product[i].id})" class="dropdown-item" >DELETE</button>`
      html+=`<button onClick="edit(${Product[i].id})" data-toggle="modal" data-target="#exampleModal" class="dropdown-item" >UPDATE</button>`

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
  var name = document.getElementById("name").value;
  var detail = document.getElementById("desc").value;
  var category = document.getElementById("category").value;
  var price = document.getElementById("price").value;

  console.log(name,detail,category,price);
  // var img = document.getElementById("name").value;

  var OneProduct = {
    name: name,
    desc:detail,
    price: price,
    type:category
  };
  console.log(OneProduct);
  axios.post('https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User', OneProduct)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  alert("Done!");

}

function deletes(id) {
    var r = confirm("Do you want to delete this product?");
    if (r == true) {
      axios.delete(`https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User/${id}`)
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
  axios.get('https://63aa9ccd7d7edb3ae62c214e.mockapi.io/User')
  .then(function (response) {
    product=response.data;
    for(var i=0;i <= product.length;i++){
      if(product[i].id==a){
            document.getElementById("id").value=product[i].id;
            document.getElementById("name").value=product[i].name;
            document.getElementById("desc").value=product[i].desc;
            document.getElementById("category").value=product[i].type;
            document.getElementById("price").value=product[i].price;
          }
    }
    
  })

    

  
}

function editt() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    // var avatar = document.getElementById("img").value;
    var price = document.getElementById("price").value;
    var desc = document.getElementById("desc").value;
    var OneProduct = {
        id: id,
        name: name,
        // avatar: avatar,
        price: price,
        desc: desc,

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

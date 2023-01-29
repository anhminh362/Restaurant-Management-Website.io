

// function post() {
//   var lenData = callAPI("Products", "get", null).then((res) => {var product = res.data; });
//   var id = lenData;
//   console.log(id);
//   var name = document.frm.txt_name.value;
//   var avatar = document.frm.txt_img.value;
//   var price = document.frm.txt_price.value;
//   var detail = document.frm.txt_detail.value;
//   var OneProduct = {
//     name: name,
//     avatar: avatar,
//     price: price,
//     detail: detail,
//   };
//   console.log(OneProduct);
//   callAPI("Products", "post", OneProduct).catch((err) => {console.log(err)});
//   show();
// }

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
      html +='<td class="member"> <figure><img src="' +Product[i].img +'"/></figure><div class="member-info"><p>'+Product[i].name+'</p><p>'+Product[i].desc+'</p></div></td>';
      html += '<td><p>' + Product[i].price + '</p>'+"</td>";
      html += '<td class="status">' + '<span class="status-text status-orange">In progress</span>'+ "</td>";
      html +='<td>'+'<form class="form" action="#" method="POST"><select class="action-box"><option>Actions</option><option>Update</option><option>Delete</option></select></form></td>'
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

// function deletes(id) {
//     var r = confirm("Do you want to delete this product?");
//     if (r == true) {
//         callAPI(`Product/${id}`, "DELETE", null).then((response) => {
//             show();
//             alert("I'm sure!");
//         });
//     } else {
//         window.location.href = "mockdata.html";
//     }
// }
// function edit(id) {

//     callAPI(`Products/${id}`, "GET", null).then((res) => {
//         let Product = [];
//         Product = res.data;
//         console.log(Product);
//         document.getElementById("name").value = Product.name;
//         document.getElementById("img").value = Product.avatar;
//         document.getElementById("price").value = Product.price;
//         document.getElementById("detail").value = Product.detail;
//     });
//     document.getElementById("editbutton").innerHTML = `<button type="button" onclick="editok(${id})" class=btn- btn-success"> Edit</button>`;
// }


// function editok(id) {
//     var name = document.getElementById("name").value;
//     var avatar = document.getElementById("img").value;
//     var price = document.getElementById("price").value;
//     var detail = document.getElementById("detail").value;
//     var OneProduct = {
//         id: id,
//         name: name,
//         avatar: avatar,
//         price: price,
//         detail: detail,

//     }
//     callAPI(`Products/${id}`, "PUT", OneProduct).then((response) => {
//         show();
//         alert("ban da thanh cong!")

//     })
//     reset();
// }
// function reset() {
//     document.getElementById("name").value = "";
//     document.getElementById("img").value = "";
//     document.getElementById("price").value = "";
//     document.getElementById("detail").focus;
// }
// reset();
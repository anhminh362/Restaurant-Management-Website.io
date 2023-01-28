import axios from "axios";
API_URL = 'hhttps://63aa9d5d7d7edb3ae62c2f74.mockapi.io/';
function callAPI(endpoint, method, body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}

function post() {
    var lenData = callAPI("Products", "get", null).then((res) => {var product = res.data; });
    var id = lenData;
    console.log(id);
    var name = document.frm.txt_name.value;
    var avatar = document.frm.txt_img.value;
    var price = document.frm.txt_price.value;
    var detail = document.frm.txt_detail.value;
    var OneProduct = {
      name: name,
      avatar: avatar,
      price: price,
      detail: detail,
    };
    console.log(OneProduct);
    callAPI("Products", "post", OneProduct).catch((err) => {console.log(err)});
    show();
  }
  function show() {
    callAPI("Products", "get", null).then((response) => {
      var Product = response.data;
      var html = "<tr>";
      for (let i in Product) {
        html += '<td scope="col">' + Product[i].id + "</td>";
        html += '<td scope="col">' + Product[i].name + "</td>";
        html +='<td scope="col"> <img src="' +Product[i].avatar +'" width="45px" height="45px"></td>';
        html += '<td scope="col">' + Product[i].price + "</td>";
        html += '<td scope="col">' + Product[i].detail + "</td>";
        html +='<td scope="col">' +`<button class="btn btn-success" type="button" onclick="edit(${Product[i].id})">edit</button>` +"</td>";
        html +='<td scope="col">' + ` <button class="btn btn-danger" type="button"  onclick="deletes(${Product[i].id})">delete</button>` + "</td>" + "</td>";
        html += "</tr>";
      }
      document.getElementById("table1").innerHTML = html;
    });
  }
  
  function deletes(id) {
      var r = confirm("Do you want to delete this product?");
      if (r == true) {
          callAPI(`Products/${id}`, "DELETE", null).then((response) => {
              show();
              alert("I'm sure!");
          });
      } else {
          window.location.href = "mockdata.html";
      }
  }
  function edit(id) {
  
      callAPI(`Products/${id}`, "GET", null).then((res) => {
          let Product = [];
          Product = res.data;
          console.log(Product);
          document.getElementById("name").value = Product.name;
          document.getElementById("img").value = Product.avatar;
          document.getElementById("price").value = Product.price;
          document.getElementById("detail").value = Product.detail;
      });
      document.getElementById("editbutton").innerHTML = `<button type="button" onclick="editok(${id})" class=btn- btn-success"> Edit</button>`;
  }
  
  
  function editok(id) {
      var name = document.getElementById("name").value;
      var avatar = document.getElementById("img").value;
      var price = document.getElementById("price").value;
      var detail = document.getElementById("detail").value;
      var OneProduct = {
          id: id,
          name: name,
          avatar: avatar,
          price: price,
          detail: detail,
  
      }
      callAPI(`Products/${id}`, "PUT", OneProduct).then((response) => {
          show();
          alert("ban da thanh cong!")
  
      })
      reset();
  }
  function reset() {
      document.getElementById("name").value = "";
      document.getElementById("img").value = "";
      document.getElementById("price").value = "";
      document.getElementById("detail").focus;
  }
  reset();
function show() {
  let Product;
  let menu1 = "";
  let menu2 = "";
  let menu3 = ""
  const sendPostRequest = async () => {
    try {
      await axios.get('https://63aa9d5d7d7edb3ae62c2f74.mockapi.io/Products')
        .then((res) => {
          Product = res.data; console.log(Product);
          for (let i in Product) {
            if (Product[i].type == "tap-1") {
              var oldPrice = parseInt(Product[i].price.slice(1));
              var newPrice = parseInt(oldPrice - oldPrice * Product[i].promotion / 100);
              menu1 += '<div class="col-lg-6">';
              menu1 += '<div class="d-flex align-items-center">'
              if (Product[i].img.indexOf("http")) {
                menu1 += '<img class="flex-shrink-0 img-fluid rounded" src="../../asset/picture/' + Product[i].img + '"/ alt="" style="width: 80px">';
              }
              else {
                menu1 += '<img class="flex-shrink-0 img-fluid rounded" src="' + Product[i].img + '" alt="" style="width: 80px">';
              }

              menu1 += ' <div class="w-100 d-flex flex-column text-start ps-4">'
              menu1 += '<h5 class="d-flex justify-content-between border-bottom pb-2">'

              menu1 += ' <div><span>' + Product[i].name + '</span></div>';
              menu1 += '<div class="d-flex mb-3 justify-content-evenly">',
                menu1 += `<div class="p-2 "><span class="text-danger " >-` + Product[i].promotion + `%</span></div> `,
                menu1 += '<div class="p-2 "><span class="text-dark "><del>$' + parseInt(Product[i].price.slice(1)) + '</del></span> </div>',
                menu1 += `<div class="p-2 "><span class="text-primary ">$` + newPrice + `</span></div> `
              menu1 += `<button class="border-0 ml-2 bg-white"  onclick="basket (${Product[i].id})">
                    <span class="material-symbols-outlined">
                     add_shopping_cart
                    </span>
                    </button></div>`;
              menu1 += '</h5>';
              menu1 += '<small class="fst-italic">' + Product[i].desc + '</small>';
              menu1 += '</div>';
              menu1 += '</div>';
              menu1 += '</div>';
            }

            else if (Product[i].type == "tap-2") {
              var oldPrice = parseInt(Product[i].price.slice(1));
              var newPrice = parseInt(oldPrice - oldPrice * Product[i].promotion / 100);
              menu2 += '<div class="col-lg-6">';
              menu2 += '<div class="d-flex align-items-center">'
              if (Product[i].img.indexOf("http")) {
                menu2 += '<img class="flex-shrink-0 img-fluid rounded" src="../../asset/picture/' + Product[i].img + '"/ alt="" style="width: 80px">';
              }
              else {
                menu2 += '<img class="flex-shrink-0 img-fluid rounded" src="' + Product[i].img + '" alt="" style="width: 80px">';
              }

              menu2 += ' <div class="w-100 d-flex flex-column text-start ps-4">'
              menu2 += '<h5 class="d-flex justify-content-between border-bottom pb-2">'

              menu2 += ' <div><span>' + Product[i].name + '</span></div>';
              menu2 += '<div class="d-flex mb-3 justify-content-evenly">',
                menu2 += `<div class="p-2 "><span class="text-danger " >-` + Product[i].promotion + `%</span></div> `,
                menu2 += '<div class="p-2 "><span class="text-dark "><del>$' + parseInt(Product[i].price.slice(1)) + '</del></span> </div>',
                menu2 += `<div class="p-2 "><span class="text-primary ">$` + newPrice + `</span></div> `

              menu2 += `<button class="border-0 ml-2 bg-white">
                    <span class="material-symbols-outlined">
                     add_shopping_cart
                    </span>
                    </button></div>`;
              menu2 += '</h5>';
              menu2 += '<small class="fst-italic">' + Product[i].desc + '</small>';
              menu2 += '</div>';
              menu2 += '</div>';
              menu2 += '</div>';
            }
            else {
              var oldPrice = parseInt(Product[i].price.slice(1));
              var newPrice = parseInt(oldPrice - oldPrice * Product[i].promotion / 100);
              menu3 += '<div class="col-lg-6">';
              menu3 += '<div class="d-flex align-items-center">'
              if (Product[i].img.indexOf("http")) {
                menu3 += '<img class="flex-shrink-0 img-fluid rounded" src="../../asset/picture/' + Product[i].img + '"/ alt="" style="width: 80px">';
              }
              else {
                menu3 += '<img class="flex-shrink-0 img-fluid rounded" src="' + Product[i].img + '" alt="" style="width: 80px">';
              }

              menu3 += ' <div class="w-100 d-flex flex-column text-start ps-4">'
              menu3 += '<h5 class="d-flex justify-content-between border-bottom pb-2">'

              menu3 += ' <div><span>' + Product[i].name + '</span></div>';
              menu3 += '<div class="d-flex mb-3 justify-content-evenly">',
                menu3 += `<div class="p-2 "><span class="text-danger " >-` + Product[i].promotion + `%</span></div> `,
                menu3 += '<div class="p-2 "><span class="text-dark "><del>$' + parseInt(Product[i].price.slice(1)) + '</del></span> </div>',
                menu3 += `<div class="p-2 "><span class="text-primary ">$` + newPrice + `</span></div> `

              menu3 += `<button class="border-0 ml-2 bg-white">
                    <span class="material-symbols-outlined">
                     add_shopping_cart
                    </span>
                    </button></div>`;
              menu3 += '</h5>';
              menu3 += '<small class="fst-italic">' + Product[i].desc + '</small>';
              menu3 += '</div>';
              menu3 += '</div>';
              menu3 += '</div>';
            }

          }

          document.getElementById("menu1").innerHTML = menu1;
          document.getElementById("menu2").innerHTML = menu2;
          document.getElementById("menu3").innerHTML = menu3;
        })
    } catch (err) {
      console.error(err);
    }
  }
  sendPostRequest();
};
show();

function basket(id) {


  const sendPostRequest = async () => {
    try {
      await axios.get(`https://63aa9d5d7d7edb3ae62c2f74.mockapi.io/Products/${id}`)
        .then((res) => {
          Product = res.data;
          axios.post('https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/ORDER', Product)
            .then(function (response) {
              console.log(response.data);
              window.location.reload()
            })
            .catch(function (error) {
              console.log(error);
            });

          axios.get('https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/ORDER')
            .then(function (response) {
              var a = response.data;
              var b = 0;
              if (a.length == 0) {
                b = parseInt(parseInt(Product.price.slice(1)) - parseInt(Product.price.slice(1)) * Product.promotion / 100)
              }
              console.log(b)
              for (var i in a) {
                b += parseInt(parseInt(a[i].price.slice(1)) - parseInt(a[i].price.slice(1)) * a[i].promotion / 100)
              }
              console.log(a, 'abc');
              document.getElementById("productorder").innerHTML = b;

            })
          setTimeout(() => {
            a()
          }, 2000);

        })
    } catch (err) {
      console.error(err, "abc");
    }
  }
  sendPostRequest();
}

const showOrder = () => {
  axios.get('https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/ORDER')
  .then(function (response) {
    var a = response.data;
    var b = 0;
    if (a.length == 0) {
      b = parseInt(parseInt(Product.price.slice(1)) - parseInt(Product.price.slice(1)) * Product.promotion / 100)
    }
    console.log(b)
    for (var i in a) {
      b += parseInt(parseInt(a[i].price.slice(1)) - parseInt(a[i].price.slice(1)) * a[i].promotion / 100)
    }
    console.log(a, 'abc');
    document.getElementById("productorder").innerHTML = b;

  })
}
showOrder();



function a() {
  axios.get('https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/ORDER')
    .then(function (response) {
      var product = response.data;

      var html = "<tr>";
      for (var i in product) {
        html += '<td scope="col">' + product[i].name + "</td>";
        html += '<td scope="col"> <img src="' + product[i].avatar + '" width="45px" height="45px"></td>';
        html += '<td scope="col">' + parseInt(parseInt(product[i].price.slice(1)) - parseInt(product[i].price.slice(1)) * product[i].promotion / 100) + "</td>";
        html += '<td scope="col">' + ` <button class="btn btn-danger" type="button"  onclick="deletes(${product[i].id})">delete</button>` + "</td>";
        html += "</tr>";
      }
      document.getElementById("table2").innerHTML = html;
    })
}
function deletes(id) {
  var r = confirm("Do you want to delete this product?");
  if (r == true) {

    axios.delete(`https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/ORDER/${id}`)
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });
      window.location.reload()
    // click xóa trừ giá
    axios.get('https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/ORDER')
      .then(function (response) {
        var a = response.data;
        var b = 0;
        for (var i in a) {
          b += parseInt(parseInt(a[i].price.slice(1)) - parseInt(a[i].price.slice(1)) * a[i].promotion / 100)
        }
        console.log(b, 'abc');
        document.getElementById("productorder").innerHTML = b;
      })

    alert("I'm sure!");
    a();
  } else {
    window.location.href = "mockdata.html";
  }
}


// function order(){

//   console.log('abc');
// }

var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}

order.onclick = function () {
  // axios.get('https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/ORDER')
  // .then(function(response) {
  //   var a=response.data;
  //   var b=0;
  //   for(var i in a){
  //     b+=parseInt(parseInt(a[i].price.slice(1))-parseInt(a[i].price.slice(1))*a[i].promotion/100)
  //   }
  //   console.log(b,'abc');
  //   document.getElementById("productorder").innerHTML = b;

  // })
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


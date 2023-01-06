function Save() {
    localStorage.setItem('listProduct', JSON.stringify(product));
}
function load() {
    products = JSON.parse(localStorage.getItem('listProduct'));
}
if (localStorage.getItem('listProduct') != null) {
load();
}
var listLocal = function() {
var listproduct = '';
for (var i in product) {
var data = JSON.parse(JSON.stringify(product[i]));
        var demo = '<div class="col-3">';
            demo +='<div class="card" style="width: 18rem;">';
                demo +='<img class="card-img-top" src=' +data.img+ 'alt="Card image cap">';
                demo +='<div class="card-body">'   
                demo +='<h5 class="card-title">'+data.Name+'</h5>';
                demo +='<p class="card-text">'+data.Price+"    "+ '<del> '+ data.Prices  +'</p>';
                demo +='<a href="#" class="btn btn-primary" onclick="ADD()">ADD</a>';
                demo += '</div>';
                demo += '</div>';
                demo +='</div>';
                console.log(demo);   
                document.getElementById('demo').innerHTML += demo;   
        }
    function ADD() {
        alert ("Bạn chắc chắn muốn cập nhật trang này chứ!")
    }  
Save();

}
listLocal();
localStorage.clear();
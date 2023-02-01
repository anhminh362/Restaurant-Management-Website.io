// var product=[
//     {
//         img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UHbVX99MQEETSUM6J8O-2EbCZtRzNzkXiQ&usqp=CAU",
//         Name :"",
//         Price:"250.000đ",
//         Prices:"200.000đ"

//     },
//     {
//         img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UHbVX99MQEETSUM6J8O-2EbCZtRzNzkXiQ&usqp=CAU",
//         Name :"",
//         Price:"250.000đ",
//         Prices:"200.000đ"
//     },
//     {
//         img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UHbVX99MQEETSUM6J8O-2EbCZtRzNzkXiQ&usqp=CAU",
//         Name :"",
//         Price:"250.000đ",
//         Prices:"200.000đ"
//     },
//     {
//         img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UHbVX99MQEETSUM6J8O-2EbCZtRzNzkXiQ&usqp=CAU",
//         Name :"",
//         Price:"250.000đ",
//         Prices:"200.000đ"
//     }
// ]
function show() {
    let Product;
    let menu1="";
    let menu2="";
    let menu3=""
    const sendPostRequest = async () => {
        try {
            await axios.get('https://63aa9d5d7d7edb3ae62c2f74.mockapi.io/Products')
            .then((res)=>{Product=res.data; console.log(Product,"abc");
            for (let i in Product) {
                if (Product[i].type=="tap-1"){
                    menu1 += '<div class="col-lg-6">';
                    menu1 +='<div class="d-flex align-items-center">'
                    menu1 +='<img class="flex-shrink-0 img-fluid rounded" src="' +Product[i].img +'" alt="" style="width: 80px">';
                    menu1 += ' <div class="w-100 d-flex flex-column text-start ps-4">' 
                    menu1 += '<h5 class="d-flex justify-content-between border-bottom pb-2">' 
                    
                    menu1 +=' <div><span>'+Product[i].name+'</span></div>';
                    menu1 +='<div class="d-flex"><span class="text-primary  mr-4">'+Product[i].price+'</span> '+
                    `<button class="border-0 ml-2 bg-white">
                    <span class="material-symbols-outlined">
                     add_shopping_cart
                    </span>
                    </button></div>`;
                    menu1 += '</h5>';
                    menu1 += '<small class="fst-italic">'+Product[i].desc+'</small>';
                    menu1 += '</div>';
                    menu1 += '</div>';
                    menu1 += '</div>';
                }
                
                else if (Product[i].type=="tap-2"){
                    menu2 += '<div class="col-lg-6">';
                    menu2 +='<div class="d-flex align-items-center">'
                    menu2 +='<img class="flex-shrink-0 img-fluid rounded" src="' +Product[i].img +'" alt="" style="width: 80px">';
                    menu2 += ' <div class="w-100 d-flex flex-column text-start ps-4">' 
                    menu2 += '<h5 class="d-flex justify-content-between border-bottom pb-2">' 
                    
                    menu2 +=' <div><span>'+Product[i].name+'</span></div>';
                    menu2 +='<div class="d-flex"><span class="text-primary  mr-4">'+Product[i].price+'</span> '+
                    `<button class="border-0 ml-2 bg-white">
                    <span class="material-symbols-outlined">
                     add_shopping_cart
                    </span>
                    </button></div>`;
                    menu2 += '</h5>';
                    menu2 += '<small class="fst-italic">'+Product[i].desc+'</small>';
                    menu2 += '</div>';
                    menu2 += '</div>';
                    menu2 += '</div>';
                }
                else  {
                    menu3 += '<div class="col-lg-6">';
                    menu3 +='<div class="d-flex align-items-center">'
                    menu3 +='<img class="flex-shrink-0 img-fluid rounded" src="' +Product[i].img +'" alt="" style="width: 80px">';
                    menu3 += ' <div class="w-100 d-flex flex-column text-start ps-4">' 
                    menu3 += '<h5 class="d-flex justify-content-between border-bottom pb-2">' 
                    
                    menu3 +=' <div><span>'+Product[i].name+'</span></div>';
                    menu3 +='<div class="d-flex"><span class="text-primary  mr-4">'+Product[i].price+'</span> '+
                    `<button class="border-0 ml-2 bg-white">
                    <span class="material-symbols-outlined">
                     add_shopping_cart
                    </span>
                    </button></div>`;
                    menu3 += '</h5>';
                    menu3 += '<small class="fst-italic">'+Product[i].desc+'</small>';
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



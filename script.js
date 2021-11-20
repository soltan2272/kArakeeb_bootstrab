visable();
printcartnum();


var mypage=location.pathname;
var str=mypage.lastIndexOf("/");
var myp=mypage.substring(str+1);
console.log(myp);
var divall = document.getElementById("divo");
if(localStorage.getItem("pname")!=null && myp=="Index.html")
{
    var dis = '<div class="card" ><img src="' + localStorage.getItem("imgsrc") + '"width=250;hieght=255><h1 class="title" onclick="prodc(' + localStorage.getItem("pid")  + ')">' +  localStorage.getItem("pname")  +
    '</h1><p>' +  localStorage.getItem("Price")  + ' EG </p><p>' + localStorage.getItem("describtion")  + '</p>' + ' <p><button class="AddCart" onclick="addcart(' +parseInt(localStorage.getItem("pid")) + ')">Add to Cart</button></p></div>';
    divall.innerHTML += dis;
}

var body = document.querySelector("#products");

var select = document.getElementById("navbarDropdown");
var xhr = new XMLHttpRequest();
var products;
var index;
xhr.open("get", "https://fakestoreapi.com/products");
xhr.send();
xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            products = JSON.parse(xhr.response);
            console.log(products);
            var category;
            var cat = [];
            for (var i = 0; i < products.length; i++) {
                var id = products[i].id;
                var title = products[i].title;
                var price = products[i].price;
                var des = products[i].description;
                var img = products[i].image;
                var dis = '<div class="card" ><img src="' + img + '"width=250;hieght=255><h1 class="title" onclick="prodc(' + id + ')">' + title +
                    '</h1><p>' + price + ' EG </p><p>' + des + '</p>' + ' <p><button class="AddCart" onclick="addcart(' + id + ')">Add to Cart</button></p></div>';

                divall.innerHTML += dis;

                if (!cat.includes(products[i].category)) {
                    cat.push(products[i].category);

                }


            }
            console.log(cat);
            for (var i = 0; i < cat.length; i++) {
                var option = document.createElement("option");
                option.setAttribute("class", "dropdown-item text-primary bg-light");
                option.innerText = cat[i];
                select.append(option);
            }

        }
    }
})

function prodc(id)
{
    localStorage.setItem("product",id);
    window.location.href = "product.html";
}
function search(searchid) {
    var ides=[];
    var search = document.getElementById(searchid).value;
    var result = 0;


    ides=[];
    for (var i = 0; i < products.length; i++) {
        if (products[i].title.includes(search)) {
            result++;
            ides.push(i);
         
                localStorage.setItem("result",ides);

        }
        
    }
    if(result<1){
        localStorage.setItem("result",0);

    }
    
    location.assign("Search.html");

}

document.onload = function () {
    select.value = "ALL CATTEGORIES";
}
select.onchange = function () {
    var option = select.value;
    console.log(option);
    if (option == "ALL CATTEGORIES") {
        body.parentElement.removeChild(divall);
       divall = document.createElement("div");
       divall.setAttribute("class","row divo");
       divall.setAttribute("id","divo");
       body.append(divall);
        for (var i = 0; i < products.length; i++) {
            var id = products[i].id;
            var title = products[i].title;
            var price = products[i].price;
            var des = products[i].description;
            var img = products[i].image;
            var dis = '<div class="card" ><img src="' + img + '"width=250;hieght=255><h1 class="title" onclick="prodc(' + id + ')">' + title +
                '</h1><p>' + price + ' EG </p><p>' + des + '</p>' + ' <p><button class="AddCart" onclick="addcart(' + id + ')">Add to Cart</button></p></div>';

            divall.innerHTML += dis;


        }
    } else {
        divall.parentElement.removeChild(divall);
        divall = document.createElement("div");
        divall.setAttribute("class","row divo");
        divall.setAttribute("id","divo");
        body.append(divall);
        for (var i = 0; i < products.length; i++) {
            if (option == products[i].category) {

                    var id = products[i].id;
                    var title = products[i].title;
                    var price = products[i].price;
                    var des = products[i].description;
                    var img = products[i].image;
                    var dis = '<div class="card" ><img src="' + img + '"width=250;hieght=255><h1 class="title" onclick="prodc(' + id + ')">' + title +
                        '</h1><p>' + price + ' EG </p><p>' + des + '</p>' + ' <p><button class="AddCart" onclick="addcart(' + id + ')">Add to Cart</button></p></div>';
    
                    divall.innerHTML += dis;
            }


        }
    }

}







function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}





var count=0;
if(!(parseInt(localStorage.getItem("count"))>0))
 {
     localStorage.setItem("count",count);
 }

 

function addcart(id)
{

 var item="item"+id;
console.log(item);


   

if(isNaN(parseInt(localStorage.getItem(item))))
{
    
   
    if(id>=100)
    localStorage.setItem("addedd","added");

    localStorage.setItem(item,id);
    count=parseInt(localStorage.getItem("count"));
    console.log(id);
    if(localStorage.getItem("ids")==null)
    {
        var ids=[];
    }
    else
    {
        ids=localStorage.getItem("ids");
        ids= ids.split(",");
    }
    
    console.log(ids)
     
    ids.push(id);
    console.log(ids);
    localStorage.setItem("ids",ids);
    console.log(localStorage.getItem("ids"));
    count++;
    localStorage.setItem("count",count);
    document.getElementById("count").innerHTML=parseInt(localStorage.getItem("count"));
}
else
{
    alert("You alreay Add this item in cart !")
}
}

function printcartnum(){
    document.getElementById("count").innerHTML=parseInt(localStorage.getItem("count"));

}
function prodc(id)
{
 localStorage.setItem("product",id);
 window.location.href = "product.html";
}

getdata();


function logout() {

    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("uname");
    localStorage.removeItem("pwd");
    localStorage.removeItem("cpwd");
    localStorage.removeItem("image");
}

console.log(localStorage.getItem("uname"));

function visable() {
    if (localStorage.getItem("email") == null) {
        // document.getElementById("visible1").style.display=true;
        document.getElementById("visible2").style.display = 'none';

    } else {
        document.getElementById("visible1").style.display = 'none';
        // document.getElementById("visible2").style.display=true;

    }
}


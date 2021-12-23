let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let discounts = document.querySelector(".Discounts");
let menuLink = document.querySelector(".Menu");
let aboutUs = document.querySelector(".AboutUs")
let contacts = document.querySelector(".Contacts")
let login = document.querySelector(".Login")

let name=localStorage.getItem('name')?localStorage.getItem('name'):'';
  
  if(name=='') {
  alert('You need to log in first');
  window.location.href="localstorage-part3.html";
}
  function Logout() {
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  window.location.href="localstorage-part3.html";
}
window.addEventListener("load", readyLoad)

function readyLoad() {
  discounts.remove();
  menuLink.remove();
  aboutUs.remove();
  contacts.remove();
  login.remove();
  document.getElementById('item').style.display = 'inline';
  document.getElementById('b').style.display = 'inline';
  console.log("removed")
}


menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function saveData()
{
let number,food,addr;
number=document.getElementById("number").value;
food=document.getElementById("food").value;
addr=document.getElementById("addr").value;

let order_records=new Array();
order_records=JSON.parse(localStorage.getItem("orders"))?JSON.parse(localStorage.getItem("orders")):[]
{
  order_records.push({
  "number":number,
  "food":food,
  "addr":addr
})
  alert("Your order was accepted. Wait for us!!!");
localStorage.setItem("orders",JSON.stringify(order_records));
}

}
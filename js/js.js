const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};
// adding function
var P = 0; 
function add(name,price) {
    var firstDivContent = document.getElementById(name);
    var outDivContent = document.getElementById(price);
    var product = document.getElementById('e');
    var total = document.getElementById('htotal');

    let R = document.createElement("tr");
    let A = document.createElement("td");
    let B = document.createElement("td");
    
   
    
    product.append(R);
    A.innerHTML = firstDivContent.innerHTML;
    B.innerHTML = outDivContent.innerHTML + "$";
    
    
    var Prix =Number(outDivContent.innerHTML);
    
    P = P + Prix;
    
    R.append(A,B);
    total.innerHTML=P+"$";
    }

// end of adding function
    
    function filter(item){
        var sushi1=document.getElementById('c3');
        var sushi2=document.getElementById('c4');
        var sushi3=document.getElementById('c5');
        var sushi4=document.getElementById('c6');
        var soup1=document.getElementById('c1');
        var soup2=document.getElementById('c2');
        var salade1=document.getElementById('c7');
        var salade2=document.getElementById('c8');
        if(item=='all'){
            
            sushi1.style.display = "block"
            sushi2.style.display = "block"
            sushi3.style.display = "block"
            sushi4.style.display = "block"
            soup1.style.display = "block"
            soup2.style.display = "block"
            salade1.style.display = "block"
            salade2.style.display = "block"
            
    
            
        }
        if(item=='sushi'){
            sushi1.style.display = "block"
            sushi2.style.display = "block"
            sushi3.style.display = "block"
            sushi4.style.display = "block"
            soup1.style.display = "none"
            soup2.style.display = "none"
            salade1.style.display = "none"
            salade2.style.display = "none"
    
        }
        if(item=='salade'){
            sushi1.style.display = "none"
            sushi2.style.display = "none"
            sushi3.style.display = "none"
            sushi4.style.display = "none"
            soup1.style.display = "none"
            soup2.style.display = "none"
            salade1.style.display = "block"
            salade2.style.display = "block"
    
        }
        if(item=='soup'){
            sushi1.style.display = "none"
            sushi2.style.display = "none"
            sushi3.style.display = "none"
            sushi4.style.display = "none"
            soup1.style.display = "block"
            soup2.style.display = "block"
            salade1.style.display = "none"
            salade2.style.display = "none"
    
        }
    }
    function validation() {
        var total = document.getElementById('htotal');
        var product = document.getElementById('e');
        alert("commande valider");
        P = 0; 
        total.innerHTML=P+"$";
        product.innerHTML="";

      }
    
   
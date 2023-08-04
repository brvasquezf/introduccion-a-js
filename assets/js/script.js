// var precioSpam = document.querySelector("p .precio");
// precioSpam.innerHTML = prompt("ingrese un precio")

function cambioColor(){
    element = document.querySelector('#color');
    card = document.querySelector('.box-1');
    card.style.backgroundColor = element.value;
    nombre = document.querySelector('.nombre');
    price = document.querySelector('.price');
    if(element.value == "blue"){
        nombre.style.color = "white";
        price.style.color = "white";
    }
    if(element.value == "grey"){
        nombre.style.color = "black";
        price.style.color = "white";
    }if(element.value == "red"){
        nombre.style.color = "white";
        price.style.color = "white";
    }if(element.value == "black"){
        nombre.style.color = "red";
        price.style.color = "red";
    }if(element.value == "---"){
        card.style.backgroundColor = "white"
        nombre.style.color = "black";
        price.style.color = "black";
    }
}


function calcular() {

    cantidad = document.querySelector('.cantidad').value;
    totalCantidad = document.querySelector('.total-cantidad');
    totalPrecio = document.querySelector('.total');
    totalCantidad.innerText = cantidad;
    totalPrecio.innerText = "$" + cantidad * 750000;
    color = document.querySelector('#color');
    corazon = document.querySelector('.corazon');


    if(color.value == "blue"){
        corazon.style.color = "blue";
    }if(color.value == "red"){
        corazon.style.color = "red";
    }if(color.value == "grey"){
        corazon.style.color = "grey";
    }if(color.value == "black"){
        corazon.style.color = "black";
    }

}
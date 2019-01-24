let pizzas = document.querySelectorAll('.pizzas p');
let order = document.getElementById('order');
let price = document.getElementById('price');
let list = [];
let cost = 0;
for(let i=0;i<pizzas.length;i++){
    pizzas[i].addEventListener('click', addPizza);
}
function addPizza(){
    list.push(this.innerText);
    cost += 75;
    updateOrder();
}

function updateOrder(){
    order.innerHTML = "";
    for (let i=0;i<list.length;i++){
        order.innerHTML += "<li>" + list[i] + "</li>";
        console.log(order);
    }
    order.innerHTML += "<li>Total kostnad: " + cost + " kr</li>"
    order.style.display = 'block';
}

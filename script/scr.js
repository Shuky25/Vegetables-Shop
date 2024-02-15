let total = 0;

const addToCart = (el) => {
    let quantity = el.previousElementSibling;
    quantity.disabled = true;
    el.disabled = true;
    let price = quantity.parentElement.previousElementSibling.querySelector('p').innerText.substring(1);
    let priceInt = parseFloat(price);

    let order = document.createElement('div');
    order.className = "cart-single-item";
    let text = document.createElement('p');
    text.innerText = quantity.parentElement.previousElementSibling.querySelector('h3').innerText + "   " + price + " * " + quantity.value + " = " + "$" + priceInt*quantity.value;
    total = total + priceInt*quantity.value;
    let del = document.createElement('button');
    del.innerText = "X";
    del.addEventListener('click', () => {
        del.parentElement.remove();
        quantity.disabled = false;
        el.disabled = false;
        total -= priceInt*quantity.value;
        document.querySelector('.total').innerHTML = `<p>Total: ${total}</p>`;
    });
    text.appendChild(del);
    order.appendChild(text);
    document.querySelector('.cart-items').appendChild(order);
    document.querySelector('.total').innerHTML = `<p>Total: ${total}</p>`;
}
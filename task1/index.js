const form = document.forms.calculation;
const h1 = document.createElement('h1');

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = +document.forms.calculation.amount.value * 100;
    const price = +document.forms.calculation.price.value * 100;
    const money = (amount - price) / 100;

    if (amount < 0 || price < 0) {
        h1.setAttribute('class', 'error');
        h1.innerText = 'Ammount and price must be more than zero....';
    
    } else {

        if(money < 0) {
            h1.setAttribute('class', 'error');

            if (money.toString().split('.')[1] != undefined) {
                h1.innerText = `Your vacation: ${money.toString().split('.')[0]} dollars ${money.toString().split('.')[1]} cents. Checking the correctness of the entered data...`;
            } else {
                h1.innerText = `Your vacation: ${money.toString().split('.')[0]} dollars 00 cents. Checking the correctness of the entered data...`;
            }

        } else {

            h1.setAttribute('class', 'e');

            if (money.toString().split('.')[1] != undefined) {
                h1.innerText = `Your vacation: ${money.toString().split('.')[0]} dollars ${money.toString().split('.')[1]} cents`;
            } else {
                h1.innerText = `Your vacation: ${money.toString().split('.')[0]} dollars 00 cents`;
            }
        }
    }

    insertAfter(h1, form);
});
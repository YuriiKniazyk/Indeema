const trigger = document.getElementsByClassName('trigger')[0];

trigger.addEventListener('click', function() {
    const div1 = document.createElement('div');
    div1.setAttribute('class', 'modal');
    document.body.appendChild(div1);

    const div2 = document.createElement('div');
    div2.setAttribute('class', 'modal-content');
    div1.appendChild(div2);

    const span = document.createElement('span');
    span.setAttribute('class', 'close-button');
    span.innerText = '×';
    div2.appendChild(span);

    const h1 = document.createElement('h1');
    h1.innerText = 'Hello, I am a modal!';
    div2.appendChild(h1);

    const modal = document.querySelector('.modal');
    modal.classList.toggle('show-modal');

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            document.body.removeChild(div1);
        }
    });
    
    document.querySelector('.close-button').addEventListener('click', function() {
        document.body.removeChild(div1);
    });
});
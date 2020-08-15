const data = []; //save create record
//create record, insert to table, delete from table
//addModal
const modalAdd = document.getElementById("addModal");
const btn = document.getElementById("add");
const span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', function() {
    modalAdd.style.display = "block";
}); 

span.addEventListener('click', function() {
    modalAdd.style.display = "none";
});

//form create record
const form = document.forms.add;

form.addEventListener('submit', function(e){
    e.preventDefault();

    const firstName = document.forms.add.firstName.value;
    const lastName = document.forms.add.lastName.value;
    const email = document.forms.add.email.value;
    const date = document.forms.add.date.value;

    data.unshift({
        firstName,
        lastName,
        email,
        date
    });

    insertRow(firstName, lastName, email, date);
    form.reset();
    
    modalAdd.style.display = "none";
});

function insertRow(firstName, lastName, email, date){
    const x = document.getElementById('table').insertRow(1);
    const a = x.insertCell(0);
    const b = x.insertCell(1);
    const c = x.insertCell(2);
    const d = x.insertCell(3);
    const e = x.insertCell(4);
    const f = x.insertCell(5);
    
    a.innerText = firstName;
    b.innerText = lastName;
    c.innerText = email;
    d.innerText = date;

    e.innerHTML = '<a href="#" onclick="openModalUpdate(this)">Edit</a>';
    f.innerHTML = '<a href="#" onclick="deleteRow(this)">Delete</a>';
}

function deleteRow(r) {
    const i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}


//update record
//updateModal
let rowIndex = -1;
const modalUpdate = document.getElementById("updateModal");
const close = document.getElementsByClassName("close")[1];

const updateFirstName = document.forms.update.updateFirstName;
const updateLastName = document.forms.update.updateLastName;
const updateEmail = document.forms.update.updateEmail;
const updateDate = document.forms.update.updateDate;

close.addEventListener('click', function() {
    modalUpdate.style.display = "none";
});

function openModalUpdate(a) {
    rowIndex = a.parentNode.parentNode.rowIndex - 1;

    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        if (index == rowIndex) {
            updateFirstName.value = element.firstName;
            updateLastName.value = element.lastName;
            updateEmail.value = element.email;
            updateDate.value = element.date;
        }
    }

    modalUpdate.style.display = 'block';
}

function updateRow(index, firstName, lastName, email, date){
    deleteRowBeforeUpdate(index);

    const x = document.getElementById('table').insertRow(index);
    const a = x.insertCell(0);
    const b = x.insertCell(1);
    const c = x.insertCell(2);
    const d = x.insertCell(3);
    const e = x.insertCell(4);
    const f = x.insertCell(5);
    
    a.innerText = firstName.value;
    b.innerText = lastName.value;
    c.innerText = email.value;
    d.innerText = date.value;

    e.innerHTML = '<a href="#" onclick="openModalUpdate(this)">Edit</a>';
    f.innerHTML = '<a href="#" onclick="deleteRow(this)">Delete</a>';
}

function deleteRowBeforeUpdate(index) {
    document.getElementById("table").deleteRow(index);
}

//form update record
const formUpdate = document.forms.update;

formUpdate.addEventListener('submit', function(e){
    e.preventDefault();

    const newUpdateFirstName = updateFirstName.value;
    const newUpdateLastName = updateLastName.value;
    const newUpdateEmail = updateEmail.value;
    const newUpdateDate = updateDate.value;

    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        if (index == rowIndex) {
            element.firstName = newUpdateFirstName;
            element.lastName = newUpdateLastName;
            element.email = newUpdateEmail;
            element.date = newUpdateDate;

            updateRow(rowIndex+1, updateFirstName, updateLastName, updateEmail, updateDate);
            modalUpdate.style.display = "none";
        }
    }
});


window.addEventListener('click', function(event) {
    if (event.target == modalAdd) {
        modalAdd.style.display = "none";
    }

    if (event.target == modalUpdate) {
        modalUpdate.style.display = "none";
    }
});
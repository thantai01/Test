
class Customer {
    constructor(_id, _name, _dob, _gender, _address) {
        this.id = _id;
        this.name = _name;
        this.dob = _dob;
        this.gender = _gender;
        this.address = _address;
    }
}


// let customers = [];
let danielObj = new Customer( "A01","Daniel","01-09-1993","Male","Hanoi");
let michellObj = new Customer( "A02","Michel","02-09-1994","Male","Hanoi");
let chloeObj = new Customer( "A03","Chloe","03-09-1992","Female","Hanoi");

let customers = [danielObj,michellObj,chloeObj];


function addCustomer() {
    let id = prompt('Input ID');
    let name = prompt('Input Name');
    let dob = prompt('Input Date of Birth');
    let gender = prompt('Input Gender');
    let address = prompt('Input Address');

    let customer = new Customer(id,name,dob,gender,address);
    customers.push(customer);
    listShow(customers);
}


function listShow() {
    let box = '<tr>'
        + '<td>ID</td>'
        + '<td>Name</td>'
        + '<td>Birthday</td>'
        + '<td>Gender</td>'
        + '<td>Address</td>'
        + '<td colspan="2"> Option </td>'
        + '</tr>';
    document.getElementById("list").innerHTML = box;

    for (let i = 0; i <customers.length; i++) {
        box = box +'<tr>' +
            '<th>'+ customers[i].id +'</th>' +
            '<th>'+ customers[i].name +'</th>' +
            '<th>'+ customers[i].dob +'</th>' +
            '<th>'+ customers[i].gender +'</th>' +
            '<th>'+ customers[i].address +'</th>' +
            '<th>'+ '<button onclick="showEditbox()"> Edit </buttononclick>' +'</th>' +
            '<th>'+ '<button onclick="deleteItems()"> Delete </button>' +'</th>' +
            '</tr>';
    }
    document.getElementById("list").innerHTML = box;
}
listShow(customers);


function deleteItems(inDex) {
    customers.splice(inDex, 1);
    console.log(customers);
    listShow(customers);
}

function showEditbox(inDex) {
    let box = '';
    box = '<input type="text" id= "editProduct" value=' + customers[inDex].name+ '"><button> Save </button>"';

    document.getElementById('edit').innerHTML = box;
}

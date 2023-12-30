// fill in javascript code here

let contain = [];

let name = document.getElementById("name");
let inputdocID = document.getElementById("docID");
let selectdept = document.getElementById("dept");
let experience = document.getElementById("exp");
let email = document.getElementById("email");
let mobilenumber = document.getElementById("mbl");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

form.addEventListener('submit',function(ele){

    ele.preventDefault()
    let obj = {};
    obj.name = name.value;
    obj.inputdocID = docID.value;
    obj.selectdept = dept.value;
    obj.experience = exp.value;
    obj.email = email.value;
    obj.mobilenumber = mbl.value;
    tbody.innerText = ""
    contain.push(obj)

    contain.forEach(ele => {

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        
        td1.innerText = ele.name
        td2.innerText = ele.inputdocID
        td3.innerText = ele. selectdept
        td4.innerText = ele. experience
        td5.innerText = ele. email
        td6.innerText = ele.mobilenumber

        if (Number(ele.experience) > 5)
        {
            td7.innerText = "Senior"
        }
        else if (Number(ele.experience) >= 2 && Number(ele.experience) <= 5)
        {
            td7.innerText = "Junior"
        }

        else{
            td7.innerText = "Trainee"
        }
        
        tr.append(td1, td2, td3, td4, td5, td6, td7);
        tbody.append(tr);

        let td8 = document.createElement("td");
        td8.textContent = "Delete";
        td8.style.backgroundColor = "red"

        td8.addEventListener('click', function(){
            tr.textContent = " "
        })

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8 );

        tbody.append(row)

    })
})



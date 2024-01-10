let form = document.querySelector("form");
let task = document.getElementById("task");
let priority = document.getElementById("priority");
let tbody = document.querySelector("tbody")

let data = []

form.addEventListener('submit',function (element){
    element.preventDefault()

    let obj = {}
    obj.task = task.value
    obj.priority = priority.value

    data.push(obj)
    tbody.innerText = null

    data.map((ele) => {
        let trow = document.createElement("tr");
        let tableData1 = document.createElement("td");
        let tableData2 = document.createElement("td");

        tableData1.innerText = ele.task;
        tableData2.innerText = ele.priority

        trow.append(tableData1,tableData2);

        tbody.append(trow);

        if (ele.priority === "High"){
            trow.style.backgroundColor = "red";
        }
        else{
            trow.style.backgroundColor = "green";
        }

    })
})
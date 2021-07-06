// let table = document.body.firstElementChild;

// let tbody = table.tBodies[0];

// let tr = Array.from(tbody.children);

let tr = document.querySelectorAll("tr");
tr.forEach( function (row) {
    let index = row.rowIndex;

    let td = row.children[index];
    
    let tdc = row.children[row.children.length - index -1];
    
    td.style.backgroundColor = "red";
    tdc.style.backgroundColor = "red";
    
});


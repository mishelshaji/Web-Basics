var table = document.createElement('table');

var tr = document.createElement('tr');
var th1 = document.createElement('th')
var th2 = document.createElement('th')
th1.innerText = "Name";
th2.innerText = "Email";
tr.appendChild(th1);
tr.appendChild(th2);
table.appendChild(tr);
document.body.appendChild(table);
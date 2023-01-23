function strok() {
let text = document.getElementById("field");
text.value += " ";

let arr = [];
let stroka = "";

for (let i=0; i<text.value.length;i++) {
    if (text.value[i] == " ") {
        arr.push(stroka);
        stroka = "";
    }
    else stroka += text.value[i];
}

let tab = document.getElementById("tab");
if (typeof(tab) == "object") {
    tab.remove();
}

let table = document.createElement("table");
table.id = "tab";
for (let i=0; i<arr.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = arr[i];
    tr.append(td);
    table.append(tr);
    }
document.body.append(table);

}
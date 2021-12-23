/*table variable declaration*/
const form = document.getElementById("form");
const table = document.getElementById("table");
const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");
const array1 = [];
let rowIndex;


/*tablehead insertion*/
const tableHead = data => {
  let ObjectKeys;
  for (let items of data) {
    ObjectKeys = Object.keys(items); /*method returns an array of a given object's */
  }
  let row = document.createElement("tr");
  for (let key of ObjectKeys) {
    let heading = document.createElement("th");
    heading.innerText = key;
    row.appendChild(heading);
  }
  thead.appendChild(row); /*append the row to the thead*/
  table.appendChild(thead); /*append the thead to the table*/
};

/*tablebody insertion*/
const tableBody = data => {
  for (let items of data) {
    let ObjectKeys = Object.values(items); /*method returns an array of a given object's */
    let row = document.createElement("tr");
    for (let values of ObjectKeys) {
      let cell = document.createElement("td");
      cell.innerText = values;
      row.appendChild(cell);/*append the cell to the row*/
    }
    tbody.appendChild(row);/*append the row to the table body*/
  }
  table.appendChild(tbody); /*append the tbody to the table*/
  console.log(table);
};

/**/

const updateItem = () => {
  const storage1 = JSON.parse(localStorage.getItem("orders"));
  const number = document.querySelector("#number").value;
  const food = document.querySelector("#food").value;
  const addr = document.querySelector("#addr").value;
  let tableRowIndex = rowIndex - 1;
  if (tableRowIndex) {
    if (number === "") {
      alert("item number can not be left empty");
      document.querySelector("#number").focus();
      return;
    }
    if (food === "") {
      alert("item food can not be left empty");
      document.querySelector("#food").focus();
      return;
    }
    if (addr === "") {
      alert("item addr can not be left empty");
      document.querySelector("#addr").focus();
      return;
    }
    let confirm1 = window.confirm("Are you sure you want to update this item?");
    let tableRowIndex1 = rowIndex - 1;
      if (tableRowIndex1) {
      tableRowIndex1 && storage1.splice(tableRowIndex1, 1);
      localStorage.setItem("orders", JSON.stringify(storage1));
      window.location.reload();
      console.log(storage1);
    } else {
      return;}
    if (confirm === true) {
      tableRowIndex1 &&
        storage1.splice(tableRowIndex1, 0, { /*adds elements to array*/
          number,
          food,
          addr
        });
      localStorage.setItem("orders", JSON.stringify(storage1));
      console.log(storage1);
      window.alert("Item list have been updated");
      window.location.reload();
    } else {
      return;
    }
  } else {
    return;
  }
};

/**/
const deleteItem = () => {
  let confirm1 = window.confirm("Are you sure you want to delete this item?");
  if (confirm === true) {
    const storage1 = JSON.parse(localStorage.getItem("orders"));
    let tableRowIndex1 = rowIndex - 1;
    if (tableRowIndex1) {
      tableRowIndex1 && storage1.splice(tableRowIndex1, 1);
      localStorage.setItem("users", JSON.stringify(storage1));
      window.location.reload();
      console.log(storage1);
    } else {
      return;
    }
  } else {
    return false;
  }
};

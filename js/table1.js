/*table variable declaration*/
const table1 = document.getElementById("table1");
const thead1 = document.getElementById("thead1");
const tbody1 = document.getElementById("tbody1");
let rowIndex1;


/*tablehead insertion*/
const tableHead1 = data => {
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
  thead1.appendChild(row); /*append the row to the thead*/
  table1.appendChild(thead1); /*append the thead to the table*/
};

/*tablebody insertion*/
const tableBody1 = data => {
  for (let items of data) {
    let ObjectKeys = Object.values(items); /*method returns an array of a given object's */
    let row = document.createElement("tr");
    for (let values of ObjectKeys) {
      let cell = document.createElement("td");
      cell.innerText = values;
      row.appendChild(cell);/*append the cell to the row*/
    }
    tbody1.appendChild(row);/*append the row to the table body*/
  }
  table1.appendChild(tbody1); /*append the tbody to the table*/
  console.log(table1);
};

/**/

const readItem1 = () => {
  const storage = JSON.parse(localStorage.getItem("orders"));
  if (storage && storage.length >= 1) {
    if (table1.rows.length < 1) {
      tableHead1(storage);
      tableBody1(storage);
    }
  } else {
    return;
  }
};
/*activateItem function activation when clciked*/
table1.onclick = () => {
  let row = table1.rows;
  for (let i = 0; i < row.length; i++) {
    row[i].addEventListener("click", activateItem1);
  }
};

function activateItem1() {
  rowIndex1 = this.rowIndex1;
  let number = document.querySelector("#number");
  let food = document.querySelector("#food");
  let addr = document.querySelector("#addr");

  number.value = this.cells[0].innerText;
  food.value = this.cells[1].innerText;
  addr.value = this.cells[2].innerText;
}

const updateItem1 = () => {
  const storage1 = JSON.parse(localStorage.getItem("orders"));
  const number = document.querySelector("#number").value;
  const food = document.querySelector("#food").value;
  const addr = document.querySelector("#addr").value;
  let tableRowIndex1 = rowIndex1 - 1;
  if (tableRowIndex1) {
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
    let confirm = window.confirm("Are you sure you want to update this item?");
    let tableRowIndex1 = rowIndex1 - 1;
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
const deleteItem1 = () => {
  let confirm = window.confirm("Are you sure you want to delete this item?");
  if (confirm === true) {
    const storage1 = JSON.parse(localStorage.getItem("orders"));
    let tableRowIndex1 = rowIndex1 - 1;
    if (tableRowIndex1) {
      tableRowIndex1 && storage1.splice(tableRowIndex1, 1);
      localStorage.setItem("orders", JSON.stringify(storage1));
      window.location.reload();
      console.log(storage1);
    } else {
      return;
    }
  } else {
    return false;
  }
};

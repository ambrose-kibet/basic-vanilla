const inputForm = document.querySelector(".form");
const formInput = document.querySelector("#form-input");
const todoList = document.querySelector(".todo-list");
const listContainer = document.querySelector(".item-container");
const Alert = document.querySelector(".alert");

let listItems = [];
let editELement;
let editId = "";
let isEditing = false;
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = formInput.value;

  if (value && isEditing) {
    editELement.firsChild.textContent = value;
    console.log(editId);
  } else if (value && !isEditing) {
    let newId = new Date().getTime().toString();
    let newItem = { id: newId, item: value };
    listItems = [...listItems, newItem];
    localStorage.setItem("list", JSON.stringify(listItems));
    let displayList = listItems
      .map((Item) => {
        const { id, item } = Item;
        return `<li class="list-item" data-id="${id}">
            <p>${item}</p>
            <div class="btn-container">
              <button class="btn edit-btn"><i class="fa fa-pencil"></i></button>
              <button class="btn del-btn"><i class="fa fa-trash"></i></button>
            </div>
          </li>`;
      })
      .join("");

    listContainer.innerHTML = displayList;
    showAlert("success", "Item added succesfully", true);
    formInput.value = "";
  } else {
    showAlert("danger", "please enter value", true);
  }
  // delete functionality
  let deleteBtns = listContainer.querySelectorAll(".del-btn");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const itemId = e.currentTarget.parentElement.parentElement;
      listContainer.removeChild(itemId);
      listItems = listItems.filter((Item) => Item.id !== itemId.dataset.id);
      localStorage.setItem("list", JSON.stringify(listItems));
      showAlert("danger", "Item removed ", true);
    });
  });
  // edit functionality
  let editBtns = listContainer.querySelectorAll(".edit-btn");
  editBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let tempValue =
        e.currentTarget.parentElement.previousElementSibling.textContent;
      editId = e.currentTarget.parentElement.parentElement.dataset.id;
      isEditing = true;
      formInput.value = tempValue;
      editELement = e.currentTarget.parentElement.parentElement;
      console.log(editELement);
    });
  });
  //   hide list
  if (listItems.length < 1) {
    todoList.classList.add("hide-list");
  } else {
    todoList.classList.remove("hide-list");
  }
  console.log(editELement);
});

// show alert
const showAlert = (state = "", message = "", show = false) => {
  Alert.textContent = message;
  Alert.className = state;
  if (show) {
    Alert.style.display = "flex";
  } else {
    Alert.style.display = "none";
  }
  setTimeout(() => {
    showAlert();
  }, 3000);
};

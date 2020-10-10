const ul = document.querySelector(".list");
const count = document.querySelector(".count");
const count2 = document.querySelector(".count2");
const button = document.querySelector(".btn");

// start counter for task done/undone

let counter = 0;
let counter2 = 1;

// end counter for task done/undone

// start event for delete task

ul.addEventListener("click", event => {
  const span = event.target;
  if (span.className === "closer") {
    counter2--;
    counter--;
    if (span.parentNode.className === "item") {
      counter++;
      console.log("hi");
    }
    span.parentNode.classList.add("hidden");
    if (counter < 0) counter = 0;
    count2.innerHTML = counter2;
    count.innerHTML = counter;
  }
});

//  end event for delete task

//  start event for done task

ul.addEventListener("click", event => {
  const li = event.target;
  if (li.className === "item") {
    li.classList.toggle("done");
    counter++;
    count.innerHTML = counter;
  } else if (li.className.includes("done")) {
    li.classList.remove("done");
    counter--;
    count.innerHTML = counter;
  }
});

//  start event for edit task

ul.addEventListener("click", event => {
  const edit = event.target;
  if (edit.className != "edit-text") return;
  const editInput = edit.previousElementSibling;
  const editInputValue =
    edit.parentElement.previousElementSibling.previousElementSibling;
  editInput.value = editInputValue.textContent;
  editInput.classList.remove("hidden");
  edit.classList.add("hidden");
  const save = edit.parentElement.nextElementSibling;
  save.classList.remove("hidden");

  save.addEventListener("click", event => {
    save.classList.add("hidden");
    editInput.classList.add("hidden");
    edit.classList.remove("hidden");
    editInputValue.innerHTML = editInput.value;
  });
});

//  end event for edit task

//  start event for add button task

button.addEventListener("click", () => {
  const input = document.querySelector(".task");
  if (input.value === "") return;

  const li = document.createElement("li");
  const spanCloser = document.createElement("span");
  const textClose = document.createTextNode("close");
  const spanText = document.createElement("span");
  const spanEditor = document.createElement("span");
  const saveButton = document.createElement("button");

  const spanEditorInput = document.createElement("input");
  const spanEditorText = document.createElement("span");
  const editorText = document.createTextNode("edit");

  spanEditorText.classList.add("edit-text");
  spanEditor.classList.add("editor");
  spanEditorInput.classList.add("hidden", "edit");
  spanEditor.append(spanEditorInput);
  spanEditorText.append(editorText);
  spanEditor.append(spanEditorText);

  saveButton.classList.add("bg-dark", "g", "saver", "hidden");
  const saveButtonText = document.createTextNode("save");
  saveButton.append(saveButtonText);

  spanText.classList.add("text");
  spanText.append(input.value);

  spanCloser.append(textClose);
  spanCloser.classList.add("closer");

  li.classList.add("item");
  li.append(spanText);
  li.append(spanCloser);
  li.append(spanEditor);
  li.append(saveButton);

  ul.append(li);

  input.value = "";
  counter2++;
  count2.innerHTML = counter2;
});

//  end event for add button task

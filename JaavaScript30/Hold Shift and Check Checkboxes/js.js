const getCheckboxes = document.querySelectorAll("input[type='checkbox']");

const checkboxes = [...getCheckboxes];
let preCheckbox = "",
  previousCheckbox = "";

function check() {
  if (this.checked && !event.shiftKey) {
    preCheckbox = previousCheckbox;
    previousCheckbox = this;
    console.log("wywołano");
    console.log(previousCheckbox);
  } else if (!this.checked && !event.shiftKey) {
    previousCheckbox = "";
    console.log(`${previousCheckbox} `);
  }
  if (
    this.checked &&
    event.shiftKey &&
    (previousCheckbox != "" || preCheckbox != "")
  ) {
    console.log("poszło");
    let index = checkboxes.findIndex((x) => x == this);
    previousCheckbox === ""
      ? (previousCheckbox = previousCheckbox)
      : previousCheckbox;
    let previousIndex = checkboxes.findIndex((x) => x == previousCheckbox);
    checkboxes.forEach((checkbox, indx) => {
      if (previousIndex < index) {
        if (indx > previousIndex && indx < index) {
          checkbox.checked = true;
        }
      } else if (previousIndex > index) {
        if (indx < previousIndex && indx > index) {
          checkbox.checked = true;
        }
      }
    });
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", check);
});

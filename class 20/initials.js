function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const fullName = formData.get("fullName");

  const nameHolder = document.querySelector("#nameHolder");
  nameHolder.innerText = fullName.initials();
}

String.prototype.initials = function initials(fullName) {
  const nameList = this.split(" ");
  let temp = "";
  let index;
  for (index = 0; index < nameList.length; index++) {
    temp += nameList[index].charAt(0);
    // temp = temp + nameList[index].charAt(0);
    // temp = temp + "kapil".charAt(0) // "Kapil" -> "K"
  }
  return temp;
};

"Kapil".customChatAt(0);

String.prototype.initials1 = function () {
  console.log("Not Working now");
};

// for(intialization;condition;iteration)

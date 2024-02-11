let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let nom = document.getElementById("nom");
  let prenom = document.getElementById("prenom");
  let email = document.getElementById("email");
  let sexe = document.querySelector('input[name="sexe"]:checked');
  let axe = document.getElementById("axe");

  let fields = [nom, prenom, email];
  let fieldNames = ["Nom", "Prénom", "Email"];

  fields.forEach(function (field, index) {
    if (!field.value.trim()) {
      errorContainer.classList.add("visible");
      let err = document.createElement("li");
      err.textContent =
        "Le champ " + fieldNames[index] + " ne doit pas être vide";
      errorList.appendChild(err);
    }
  });

  if (!sexe) {
    errorContainer.classList.add("visible");
    let err = document.createElement("li");
    err.textContent = "Le champ Sexe ne doit pas être vide";
    errorList.appendChild(err);
  }

  if (axe.selectedIndex === 0) {
    errorContainer.classList.add("visible");
    let err = document.createElement("li");
    err.textContent = "Le champ Axe Préféré ne doit pas être vide";
    errorList.appendChild(err);
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (!errorContainer.classList.contains("visible")) {
    successContainer.classList.add("visible");
  }
});

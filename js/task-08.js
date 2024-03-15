const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const isEmpty = Object.values(formObject).some(
        (value) => value.trim() === ""
    );
    if (isEmpty) {
        alert("All fields must be filled in.");
        return;
    }

    console.log(formObject);

    event.target.reset();
});
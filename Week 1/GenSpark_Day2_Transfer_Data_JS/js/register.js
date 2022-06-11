// Use bootstrap's validator
(function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

function setData() {
    // Set values into storage
    localStorage.setItem("GenSpark_Name", document.getElementById("formName").value);
    localStorage.setItem("GenSpark_Email", document.getElementById("formEmail").value);
    localStorage.setItem("GenSpark_Password", document.getElementById("formPass").value);

}

function getData() {
    // Get values from storage
    document.getElementById("name").innerHTML = localStorage.getItem("GenSpark_Name");
    document.getElementById("email").innerHTML = localStorage.getItem("GenSpark_Email");
    document.getElementById("pass").innerHTML = localStorage.getItem("GenSpark_Password");
}
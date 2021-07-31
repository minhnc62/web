let  form = document.querySelectorAll('.needs-validation');

form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    if (!this.checkValidity()) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    this.classList.add('was-validated');
});
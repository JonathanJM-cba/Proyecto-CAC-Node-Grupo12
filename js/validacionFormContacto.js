(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          alert(
            "¡Gracias por contactarnos! Su formulario ha sido enviado exitosamente."
          );
          form.reset();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

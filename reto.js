
    document.getElementById("nombre").addEventListener("blur", function () {
        alert(this.value.toUpperCase());
    });

    // Activar botón al ingresar apellido
    document.getElementById("apellido").addEventListener("input", function () {
        document.getElementById("btnEnviar").disabled = this.value.trim() === "";
    });

    // Mostrar/ocultar checkboxes según la selección
    document.getElementById("opcionSi").addEventListener("click", function () {
        document.getElementById("checkboxes").style.display = "block";
    });

    document.getElementById("opcionNo").addEventListener("click", function () {
        document.getElementById("checkboxes").style.display = "none";
    });

    // Validación del email
    document.getElementById("email").addEventListener("blur", function () {
        if (!this.value.includes("@")) {
            alert("El correo debe contener un @.");
        }
    });

    // Validación de contraseñas
    document.getElementById("confirmPassword").addEventListener("input", function () {
        const password = document.getElementById("password").value;
        const confirmPassword = this.value;

        if (password === confirmPassword) {
            document.getElementById("password").classList.remove("is-invalid");
            document.getElementById("password").classList.add("is-valid");
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        } else {
            document.getElementById("password").classList.remove("is-valid");
            document.getElementById("password").classList.add("is-invalid");
            this.classList.remove("is-valid");
            this.classList.add("is-invalid");
        }
    });
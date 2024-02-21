(function () {

    const btnEliminacion = document.querySelectorAll(".btnEliminacion");

    btnEliminacion.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const confirmacion = confirm('¿Seguro deseas eliminar?');
            if (!confirmacion) {
                e.preventDefault();
            }
        });
    });

})();
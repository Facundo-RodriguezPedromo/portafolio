document.addEventListener("DOMContentLoaded", cargarComentarios);

function cargarComentarios() {
    // Recuperar comentarios del localStorage al cargar la página
    const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
    const commentUl = document.getElementById("comment-ul");

    // Mostrar comentarios en la lista
    comentariosGuardados.forEach(comentario => {
        const li = document.createElement("li");
        li.textContent = comentario;
        commentUl.appendChild(li);
    });
}

function publicarComentario() {
    // Obtener el texto del comentario
    const comentario = document.getElementById("comment-text").value.trim();

    if (comentario === "") {
        alert("Por favor, escribe un comentario antes de publicar.");
        return;
    }

    // Agregar comentario a la lista
    const commentUl = document.getElementById("comment-ul");
    const li = document.createElement("li");
    li.textContent = comentario;
    commentUl.appendChild(li);

    // Limpiar el cuadro de texto
    document.getElementById("comment-text").value = "";

    // Guardar comentario en el localStorage
    guardarComentario(comentario);
}

function guardarComentario(comentario) {
    // Obtener comentarios existentes del localStorage
    const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

    // Agregar el nuevo comentario
    comentariosGuardados.push(comentario);

    // Guardar en el localStorage
    localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));
}
function login() {
    const role = document.querySelector("select").value;

    if (role === "Admin") {
        window.location.href = "admin.html";
    } else {
        alert("Only Admin dashboard is built for now.");
    }
}

let modal = `
    <div class="modal fade" id="contactModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-body p-5 text-center">
                    <h2 class="fw-bold mb-0">Aquí puedes encontrar mis cotáctos!</h2>
                    <ul class="d-grid gap-4 my-5 list-unstyled small">
                        <li class="d-flex justify-content-center gap-4">
                            <div>
                                <h5 class="mb-0">Tel: 6010-8021</h5>
                            </div>
                        </li>
                        <li class="d-flex justify-content-center gap-4">
                            <div>
                                <a href="https://www.linkedin.com/in/wanda-martínez-a-0127362ab/"> <img src="assets/svg/linkedIn.svg" class="icon" alt="icon"></a>
                            </div>
                        </li>
                        <li class="d-flex justify-content-center gap-4">
                            <div>
                                <a href="https://github.com/WandaMA97"><img src="assets/svg/github.svg" class="icon" alt="icon"></a>
                            </div>
                        </li>
                        <li class="d-flex justify-content-center gap-4">
                            <div>
                             <a href="mailto:wanda.martineza2001@gmail.com"><img src="assets/svg/mail.svg" class="icon" alt="icon"></a>
                            </div>
                        </li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">Listo, Gracias!</button>
                </div>
            </div>
        </div>
    </div>
`;
let nav = `
    <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Wanda M.A/Info. Empresarial</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Sobre Mi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="curriculum.html">Currículum</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="proyectos.html">Proyectos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" data-bs-toggle="modal"
                                data-bs-target="#contactModal">Contáctame</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
`;

let footer = `
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top p-2 bg-light">
        <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-body-secondary">© 2025 Wanda M.A/Programadora Web</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a href="https://www.linkedin.com/in/wanda-martínez-a-0127362ab/"> <img src="assets/svg/linkedIn.svg" class="icon" alt="icon"></a></li>
            <li class="ms-3"><a href="https://github.com/WandaMA97"><img src="assets/svg/github.svg" class="icon" alt="icon"></a></li>
            <li class="ms-3"><a href="mailto:wanda.martineza2001@gmail.com"><img src="assets/svg/mail.svg" class="icon" alt="icon"></a></li>
        </ul>
    </footer>
`;

document.getElementById("contMod").innerHTML = modal;
document.getElementById("contNav").innerHTML = nav;
document.getElementById("contFoot").innerHTML = footer;
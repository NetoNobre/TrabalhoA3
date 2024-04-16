import Link from "next/link";

export default function NavBar() {
    return (
      <nav className="nav">
        <div className="nav-div nav-logo">
          <div className="nav-div">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-li-link" href="#">IDEs</Link></li>
              <li className="nav-item"><Link className="nav-li-link" href="#">Modelos de Processos de Software</Link></li>
              <li className="nav-item"><Link className="nav-li-link" href="#">Para Requisitos</Link></li>
              <li className="nav-item"><Link className="nav-li-link" href="#">Testes de Software</Link></li>
              <li className="nav-item"><Link className="nav-li-link" href="#">Prototipação</Link></li>
              <li className="nav-item"><Link className="nav-li-link" href="#">Gerenciamento de Projetos</Link></li>
              <li className="nav-item"><Link className="nav-li-link" href="#">IAs</Link></li>
              <li className="nav-item"><Link className="nav-li-link" href="#">Outras Ferramentas</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
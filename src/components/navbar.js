import Link from "next/link";

export default function NavBar() {
    return (
      <nav className="nav">
        <div className="nav-div nav-logo">
          <div className="nav-div">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-li-link" href="#">Noticias</Link></li>
              <li className="nav-item"><Link className="nav-li-link" href="#">Comunidade</Link></li>
              <li className="nav-item"><Link className="nav-li-link" href="#">Sobre Nós</Link></li>
            </ul>
          </div>
        </div>
        <div className="nav-div">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-li-link" href="#">Login</Link></li>
            <li className="nav-item"><Link className="nav-li-link" href="#">Criar Conta</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
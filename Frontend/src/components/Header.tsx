import Link from 'next/link';
export default function Header() {
     return(
          <div>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                         <Link className="navbar-brand" href="/">DevOps CRUD</Link>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                   <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link className="nav-link" href="/cadastrar">Cadastrar</Link>
                                   </li>
                              </ul>
                         </div>
                   </div>
              </nav>
        </div>  
     )
}
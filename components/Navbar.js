import Link from "next/link"

export default function Navbar({ page }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://twitter.com/munnyreol" target="_blank">
                    <img src="/images/munnyreol.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" style={{ borderRadius: "20%" }} />
                    @munnyreol
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${page == "home" ? "active" : ""}`} aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${page == "about" ? "active" : ""}`} href="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${page == "social" ? "active" : ""}`} href="social">Social</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${page == "#" ? "active" : ""}`} href="#">#</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
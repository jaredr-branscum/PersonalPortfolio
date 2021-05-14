import React, {Component} from 'react';

class Header extends Component {
	render() {
		return (
		  <div>
		  <i className="bi bi-list mobile-nav-toggle d-xl-none" />
		  {/* ======= Header ======= */}
		  <header id="header">
			<div className="d-flex flex-column">
			  <div className="profile">
				<img src={process.env.PUBLIC_URL +"/img/profile-img.jpg"} alt="" className="img-fluid rounded-circle" />
				<h1 className="text-light"><a href="index.html">Jared Branscum</a></h1>
				<div className="social-links mt-3 text-center">
				  <a href="https://www.facebook.com/jared.branscum.14/" target="_blank" rel="noopener noreferrer" className="facebook"><i className="bx bxl-facebook" /></a>
				  <a href="https://www.instagram.com/jaredthegoat_/" target="_blank" rel="noopener noreferrer" className="instagram"><i className="bx bxl-instagram" /></a>
				  <a href="https://www.linkedin.com/in/jared-branscum-46a844115" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="bx bxl-linkedin" /></a>
				  <a href="https://github.com/jaredr-branscum" target="_blank" rel="noopener noreferrer" className="github"><i className="bx bxl-github" /></a>
				</div>
			  </div>
			  <nav id="navbar" className="nav-menu navbar">
				<ul>
				  <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
				  <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
				  <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
				  {/*<li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li>*/}
				  <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
				</ul>
			  </nav>{/* .nav-menu */}
			</div>
		  </header>{/* End Header */}
		  </div>
		)
	}
}
export default Header;
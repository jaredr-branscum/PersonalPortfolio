import React, {Component} from 'react';

class Hero extends Component {
	render() {
		return (
		  <div>
		  {/* ======= Hero Section ======= */}
		  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
			<div className="hero-container" data-aos="fade-in">
			  <h1>Jared Branscum</h1>
			  <p><span className="typed" data-typed-items='Christian,Eagle Scout,Software Engineer,Georgia Tech Alumni' /> </p>
			</div>
		  </section>{/* End Hero */}
		  </div>
		)
	}
}
export default Hero;
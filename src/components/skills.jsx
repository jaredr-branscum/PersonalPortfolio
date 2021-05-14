import React, {Component} from 'react';

class Skills extends Component {
	render() {
		return (
		  <div>
			{/* ======= Skills Section ======= */}
			<section id="skills" className="skills section-bg">
			  <div className="container">
				<div className="section-title">
				  <h2>Skills</h2>
				  <p>These skills have been acquired throughout my undergraduate and graduate studies. Many of them were introduced through
				  coursework that I later continued practicing with in side projects. The percentages below are a subjective measure of my proficiency
				  using those languages/libraries/frameworks.</p>
				</div>
				<div className="row skills-content">
				  <div className="col-lg-6" data-aos="fade-up">
					<div className="progress">
					  <span className="skill">HTML <i className="val">90%</i></span>
					  <div className="progress-bar-wrap">
						<div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
					  </div>
					</div>
					<div className="progress">
					  <span className="skill">CSS <i className="val">75%</i></span>
					  <div className="progress-bar-wrap">
						<div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
					  </div>
					</div>
					<div className="progress">
					  <span className="skill">JavaScript <i className="val">80%</i></span>
					  <div className="progress-bar-wrap">
						<div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
					  </div>
					</div>
					<div className="progress">
					  <span className="skill">C <i className="val">90%</i></span>
					  <div className="progress-bar-wrap">
						<div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
					  </div>
					</div>
					<div className="progress">
					  <span className="skill">Python <i className="val">90%</i></span>
					  <div className="progress-bar-wrap">
						<div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
					  </div>
					</div>
				  </div>
				  <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
					<div className="progress">
					  <span className="skill">C++ <i className="val">80%</i></span>
					  <div className="progress-bar-wrap">
						<div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
					  </div>
					</div>
					<div className="progress">
					  <span className="skill">SQL <i className="val">85%</i></span>
					  <div className="progress-bar-wrap">
						<div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
					  </div>
					</div>
					<div className="progress">
					  <span className="skill">Java (Swing)<i className="val">80%</i></span>
					  <div className="progress-bar-wrap">
						<div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
					  </div>
					</div>
					<div className="progress">
					  <span className="skill">PHP <i className="val">70%</i></span>
					  <div className="progress-bar-wrap">
						<div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
					  </div>
					</div>
					<div className="progress">
					  <span className="skill">React JS<i className="val">60%</i></span>
					  <div className="progress-bar-wrap">
						<div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</section>{/* End Skills Section */}
		  </div>
		)
	}
}
export default Skills;
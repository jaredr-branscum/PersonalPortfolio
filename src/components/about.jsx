import React, {Component} from 'react';

class About extends Component {
	render() {
		return (
		  <div>
			{/* ======= About Section ======= */}
			<section id="about" className="about">
			  <div className="container">
				<div className="section-title">
				  <h2>About</h2>
				  <p>Passionate about <strong>software engineering</strong> and working with <font size="+1"><em>people</em></font> to tackle the 
				  <i> world's greatest challenges</i>. 
					<strong><font size="+1"> My experience </font></strong>includes
				  full-stack development, network science, and UI/UX. I give a special thanks to <b>my mom</b> who has been a tremendous support in providing 
				  me opportunities to pursue my dreams :)</p>
				</div>
				<div className="row">
				  <div className="col-lg-4" data-aos="fade-right">
					<img src={process.env.PUBLIC_URL +"/img/profile-img.jpg"} className="img-fluid" alt="" />
				  </div>
				  <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
					<h3>Software Engineer & Computer Scientist</h3>
					<p className="fst-italic">
					  I challenge myself to think about problems differently by focusing on the customer
					  and being open to feedback.
					</p>
					<div className="row">
					  <div className="col-lg-6">
						<ul>
						  <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>M.S. @ Georgia Tech</span></li>
						  <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Atlanta, GA</span></li>
						  <li><i className="bi bi-chevron-right" /> <strong>Current Work:</strong> <span>Software Engineer @ NCR</span></li>
						</ul>
					  </div>
					  <div className="col-lg-6">
						<ul>
						  <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>20</span></li>
						  <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>jaredr.branscum@gmail.com</span></li>
						</ul>
					  </div>
					</div>
					<p>
					  I have conducted research at the FAU Tecore Networks Lab supervised by Dr. Imad Mahgoub developing vehicle-to-vehicle 
					  communication & at Georgia Tech supervised by  Dr. Mostafa Ammar and Dr. Ellen Zegura investigating QoE for video conferencing 
					  applications and the Jitsi Meet application.
					</p>
				  </div>
				</div>
			  </div>
			</section>{/* End About Section */}
		  </div>
		)
	}
}
export default About;
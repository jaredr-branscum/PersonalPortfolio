import React, {Component} from 'react';

class Resume extends Component {
	render() {
		return (
		  <div>
			{/* ======= Resume Section ======= */}
			<section id="resume" className="resume section-bg">
			  <div className="container">
				<div className="section-title">
				  <h2>Resume</h2>
				  <p>Resume updated on January 30, 2022. Contains relevant education, research, and work experience.</p>
				</div>
				<div className="row">
				  <div className="col-lg-6" data-aos="fade-up">
					<h3 className="resume-title">Summary</h3>
					<div className="resume-item pb-0">
					  <h4>Jared Branscum</h4>
					  <p><em>Creative and Perseverant Computer Scientist with a passion for solving problems. Areas of interest include:
					  Computer Networks, Network Science, Software Design, Education, and Cross-platform App Development</em></p>
					  <ul>
						<li>Atlanta, GA</li>
						<li>jaredr.branscum@gmail.com</li>
					  </ul>
					</div>

					<h3 className="resume-title">Work Experience</h3>
					<div className="resume-item">
					  <h4>Software Engineer I</h4>
					  <h5>July 2021 - Present</h5>
					  <p><em>NCR Corporation, Atlanta, GA</em></p>
					  <ul>
						<li>Software development with agile methodology on a scrum team</li>
						<li>Designed and developed features for backend Java Spring Boot Microservices and client Typescript SDK</li>
						<li>Developed capabilities with test-driven development (TDD) using JUnit & Jest</li>
						<li>Developed capabilities with behavior-driven development (BDD) using Cucumber</li>
						<li>Tested and deployed features with the GCP Kubernetes Engine environment using Docker Images & Helm Charts</li>
					  </ul>
					</div>

					<h3 className="resume-title">Education</h3>
					<div className="resume-item">
					  <h4>Master of Science in Computer Science</h4>
					  <h5>2019 - 2021</h5>
					  <p><em>Georgia Institute of Technology, Atlanta, GA</em></p>
					  <p>Activities: Tech Wesley & Georgia Tech Cru</p>
					</div>
					<div className="resume-item">
					  <h4>Bachelor of Science in Computer Science</h4>
					  <h5>2016 - 2019</h5>
					  <p><em>Florida Atlantic University, Boca Raton, FL</em></p>
					  <p>Activities: FAU Table Tennis, Technology & Aerospace Club</p>
					</div>
				  </div>
				  <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
					<h3 className="resume-title">Research Experience</h3>
					<div className="resume-item">
					  <h4>Special Problems</h4>
					  <h5>Spring 2021</h5>
					  <p><em>Georgia Institute of Technology, Atlanta, GA </em></p>
					  <ul>
						<li>Supervised by Dr. Mostafa Ammar and Dr. Ellen Zegura</li>
						<li>Investigated Quality of Experience literature for video conferencing applications and video streaming</li>
						<li>Examined the WebRTC protocol</li>
						<li>Designed architecture diagrams for the Jitsi Meet Application</li>
						<li>Analyzed RTP web traffic of Bluejeans Calls</li>
					  </ul>
					</div>
					<div className="resume-item">
					  <h4>FAU Tecore Networks Lab</h4>
					  <h5>February 2018 - February 2019</h5>
					  <p><em>Florida Atlantic University, Boca Raton, FL</em></p>
					  <ul>
						<li>Studied IEEE 1609 and MAC 802.11 protocols</li>
						<li>Contributed to the migration of the Vehicular Multi-Technology Communication Device that is capable of 
						both vehicle-to-vehicle and vehicle-to-infrastructure communication from the Linux 3.4.39 kernel to the Linux 4.4 kernel on 
						the Intel NUC.</li>
						<li>Presented demonstrations of channel switching functionality and user interactions to faculty and industry professionals</li>
					  </ul>
					</div>
				  </div>
				</div>
			  </div>
			</section>{/* End Resume Section */}
		  </div>
		)
	}
}
export default Resume;
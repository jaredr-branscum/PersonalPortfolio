import React, {Component} from 'react';

class Contact extends Component {
	render() {
		return (
		  <div>
			{/* ======= Contact Section ======= */}
			<section id="contact" className="contact">
			  <div className="container">
				<div className="section-title">
				  <h2>Contact</h2>
				  <p>I currently cannot be contacted at this time through the form since this web app is hosted statically on GitHub Pages for now, but feel 
				  free to contact me through email. You can also
				  contact me through social media by clicking on the icons on the navigation menu bar.</p>
				</div>
				<div className="row" data-aos="fade-in">
				  <div className="col-lg-5 d-flex align-items-stretch">
					<div className="info">
					  <div className="address">
						<i className="bi bi-geo-alt" />
						<h4>Location:</h4>
						<p>Atlanta, GA 30308</p>
					  </div>
					  <div className="email">
						<i className="bi bi-envelope" />
						<h4>Email:</h4>
						<p>jaredr.branscum@gmail.com</p>
					  </div>
					  <iframe title="Work Location"
					  crossOrigin="anonymous"
					  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.2865198631926!2d-84.39173448479215!3d33.779098480681036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f504670c4255c7%3A0xfe3ba7a1ca5397a5!2sNCR%20Global%20Headquarters!5e0!3m2!1sen!2sus!4v1620890161420!5m2!1sen!2sus" 
					  frameBorder={0} style={{border: 0, width: '100%', height: '290px'}} allowFullScreen />
					</div>
				  </div>
				  <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
					{/*<form action="forms/contact.php" method="post" role="form" className="php-email-form">*/}
					<form action="" method="post" className="php-email-form">
					  <div className="row">
						<div className="form-group col-md-6">
						  <label htmlFor="name">Your Name</label>
						  <input type="text" name="name" className="form-control" id="name" required />
						</div>
						<div className="form-group col-md-6">
						  <label htmlFor="name">Your Email</label>
						  <input type="email" className="form-control" name="email" id="email" required />
						</div>
					  </div>
					  <div className="form-group">
						<label htmlFor="name">Subject</label>
						<input type="text" className="form-control" name="subject" id="subject" required />
					  </div>
					  <div className="form-group">
						<label htmlFor="name">Message</label>
						<textarea className="form-control" name="message" rows={10} required defaultValue={""} />
					  </div>
					  <div className="my-3">
						<div className="loading">Loading</div>
						<div className="error-message" />
						<div className="sent-message">Your message has been sent. Thank you!</div>
					  </div>
					  <div className="text-center"><button type="submit">Send Message</button></div>
					</form>
				  </div>
				</div>
			  </div>
			</section>{/* End Contact Section */}
		  </div>
		)
	}
}
export default Contact;
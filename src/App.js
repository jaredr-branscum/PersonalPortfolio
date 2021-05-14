import './App.css';

function App() {
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
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Jared Branscum</h1>
      <p><span className="typed" data-typed-items='Christian,Eagle Scout,Software Engineer,Georgia Tech Alumni' /> </p>
    </div>
  </section>{/* End Hero */}
  <main id="main">
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
            <h3>Software Engineer & Computer Scientist.</h3>
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
    {/* ======= Resume Section ======= */}
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Resume updated on May 13, 2021. Contains relevant education, research, and work experience.</p>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Jared Branscum</h4>
              <p><em>Creative and Perseverant Computer Scientist with a passion for solving problems. Areas of interest include:
			  Computer Networks, Network Science, Software Design, Education, and Cross-platform App Development</em></p>
              <ul>
                <li>Atlanta, GA</li>
                <li>jaredr.branscum@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Science</h4>
              <h5>2019 - 2021</h5>
              <p><em>Georgia Institute of Technology, Atlanta, GA</em></p>
              <p>Activities: Tech Wesley & Georgia Tech Cru</p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Science</h4>
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
    {/* ======= Portfolio Section ======= */}
	{/*
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={process.env.PUBLIC_URL +"/img/portfolio/portfolio-1.jpg"} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href={process.env.PUBLIC_URL +"/img/portfolio/portfolio-1.jpg"} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={process.env.PUBLIC_URL +"/img/portfolio/portfolio-2.jpg"} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="%PUBLIC_URL%/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={process.env.PUBLIC_URL +"/img/portfolio/portfolio-3.jpg"} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href={process.env.PUBLIC_URL +"/img/portfolio/portfolio-3.jpg"} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={process.env.PUBLIC_URL +"/img/portfolio/portfolio-4.jpg"} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href={process.env.PUBLIC_URL +"/img/portfolio/portfolio-4.jpg"} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={process.env.PUBLIC_URL +"/img/portfolio/portfolio-5.jpg"} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href={process.env.PUBLIC_URL +"/img/portfolio/portfolio-5.jpg"} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={process.env.PUBLIC_URL +"/img/portfolio/portfolio-6.jpg"} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href={process.env.PUBLIC_URL +"/img/portfolio/portfolio-6.jpg"} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={process.env.PUBLIC_URL +"/img/portfolio/portfolio-7.jpg"} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href={process.env.PUBLIC_URL +"/img/portfolio/portfolio-7.jpg"} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={process.env.PUBLIC_URL +"/img/portfolio/portfolio-8.jpg"} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href={process.env.PUBLIC_URL +"/img/portfolio/portfolio-8.jpg"} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={process.env.PUBLIC_URL +"/img/portfolio/portfolio-9.jpg"} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href={process.env.PUBLIC_URL +"/img/portfolio/portfolio-9.jpg"} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    */}
    {/* End Portfolio Section */}
    {/* ======= Services Section ======= */}
		{/*
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><i className="bi bi-briefcase" /></div>
            <h4 className="title"><a href>Lorem Ipsum</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
            <div className="icon"><i className="bi bi-card-checklist" /></div>
            <h4 className="title"><a href>Dolor Sitema</a></h4>
            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon"><i className="bi bi-bar-chart" /></div>
            <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
            <div className="icon"><i className="bi bi-binoculars" /></div>
            <h4 className="title"><a href>Magni Dolores</a></h4>
            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
            <div className="icon"><i className="bi bi-brightness-high" /></div>
            <h4 className="title"><a href>Nemo Enim</a></h4>
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
            <div className="icon"><i className="bi bi-calendar4-week" /></div>
            <h4 className="title"><a href>Eiusmod Tempor</a></h4>
            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
          </div>
        </div>
      </div>
    </section>
	*/}
	{/* End Services Section */}
    {/* ======= Testimonials Section ======= */}
		{/*
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img src={process.env.PUBLIC_URL +"/img/testimonials/testimonials-1.jpg"} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
		*/}
			{/* End testimonial item */}
			{/*
            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay={100}>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img src={process.env.PUBLIC_URL +"/img/testimonials/testimonials-2.jpg"} className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
			*/}
			{/* End testimonial item */}
			{/*
            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay={200}>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img src={process.env.PUBLIC_URL +"/img/testimonials/testimonials-3.jpg"} className="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
			*/}
			{/* End testimonial item */}
			{/*
            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay={300}>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img src={process.env.PUBLIC_URL +"/img/testimonials/testimonials-4.jpg"} className="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>{/* End testimonial item */}
			{/*
            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay={400}>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img src={process.env.PUBLIC_URL +"/img/testimonials/testimonials-5.jpg"} className="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
			*/}
			{/* End testimonial item */}
		{/*</div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
	*/}
	{/* End Testimonials Section */}
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
  </main>
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="container">
	{/*       <div className="copyright">
        © Copyright <strong><span>iPortfolio</span></strong>
    </div> */}
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ */}
        {/*Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>*/}
      </div>
    </div>
  </footer>{/* End  Footer */}
  <a href="#hero" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  </div>
  );
}

export default App;
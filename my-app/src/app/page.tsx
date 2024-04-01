import Image from "next/image";

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/animate.min.css" />
      <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
      <link rel="stylesheet" href="assets/css/all.min.css" />
      <link rel="stylesheet" href="assets/css/odometer.min.css" />
      <link rel="stylesheet" href="assets/css/jquery.modal.min.css" />
      <link rel="stylesheet" href="assets/css/meanmenu.css" />
      <link rel="stylesheet" href="assets/css/swipper.css" />
      <link rel="stylesheet" href="assets/css/main.css" />
      <div
      // className="page-wrapper home-1"
      // data-background="assets/img/bg/page-bg-1.jpg"
      >
        {/* PRELOADER */}
        <div id="">
          <div className="" />
        </div>
        {/* /PRELOADER */}
        {/* header-start 
        
                <div className="bostami-header-area mb-30 z-index-5">
          <div className="container">
            <div className="bostami-header-wrap">
              <div className="row align-items-center">
                {/* logo */}
                {/* <div className="col-6">
                  <div className="bostami-header-logo">
                    <a className="site-logo" href="../index.html">
                      <img src="assets/img/logo/logo-2.png" alt="" />
                    </a>
                  </div> */}
                {/* </div> */}
                {/* menu btn */}
                {/* <div className="col-6">
                  <div className="bostami-header-menu-btn text-right">
                    <div className="dark-btn dark-btn-stored dark-btn-icon">
                      <i className="fa-light fa-moon" />
                      <i className="fa-light fa-sun" />
                    </div>
                    <div className="menu-btn toggle_menu">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* mobile menu */}
            {/* <div className="mobile-menu-wrap">
              <div className="mobile-menu mobile_menu"></div>
            </div>
          </div>
        </div>
       */}

        {/* header-end */}
        <div className="container z-index-3">
          <div className="row">
            {/* parsonal-info-start */}
            <div className="col-xxl-3 col-xl-3">
              <div className="bostami-parsonal-info-area">
                <div className="bostami-parsonal-info-wrap">
                  {/* img */}
                  <div className="bostami-parsonal-info-img">
                    <img src="rafi 3.jpeg" alt="avatar" />
                  </div>
                  {/* name */}
                  <h4 className="bostami-parsonal-info-name">
                    <a href="#">Rafi Ali</a>
                  </h4>
                  <span className="bostami-parsonal-info-bio mb-15">
                    Generative AI & Chatbots, Full Stack Web App Developer,
                    Typescript, Next.js, Python, FASTAPI, Aotumation & Web
                    Scraping
                  </span>
                  {/* socail link */}
                  <ul className="bostami-parsonal-info-social-link mb-30">
                    <li>
                      <a
                        href="https://twitter.com/therafiali"
                        className="twitter"
                      >
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/therafiali"
                        className="github"
                      >
                        <i className="fa-brands fa-github" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/therafiali/"
                        className="linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@therafiali/videos"
                        className="youtube"
                      >
                        <i className="fa-brands fa-youtube" />
                      </a>
                    </li>
                  </ul>
                  {/* contact */}
                  <div className="bostami-parsonal-info-contact mb-30">
                    <div className="bostami-parsonal-info-contact-item phone">
                      <div className="icon">
                        <i className="fa-solid fa-mobile-screen-button" />
                      </div>
                      <div className="text">
                        <span>Phone</span>
                        <p>+92 319 026 9909</p>
                      </div>
                    </div>
                    <div className="bostami-parsonal-info-contact-item email">
                      <div className="icon">
                        <i className="fa-regular fa-envelope-open-text" />
                      </div>
                      <div className="text">
                        <span>Email</span>
                        <p>therafiali@gmail.com</p>
                      </div>
                    </div>
                    <div className="bostami-parsonal-info-contact-item location">
                      <div className="icon">
                        <i className="fa-solid fa-location-dot" />
                      </div>
                      <div className="text">
                        <span>Location</span>
                        <p>Karachi, Pakistan</p>
                      </div>
                    </div>
                    <div className="bostami-parsonal-info-contact-item calendar">
                      <div className="icon">
                        <i className="fa-light fa-calendar-days" />
                      </div>
                      <div className="text">
                        <span>Birthday</span>
                        <p>Oct 17, 2001</p>
                      </div>
                    </div>
                  </div>
                  {/* cv button */}
                  <div className="bostami-parsonal-info-btn">
                    <a className="btn-1" target="_blank" href="/rafi.pdf">
                      <span className="icon">
                        <i className="fa-regular fa-download" />
                      </span>
                      download cv
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* personal-info-end */}
            {/* about-page-start */}
            <div className="col-xxl-8 col-xl-9">
              <div className="bostami-page-content-wrap">
                {/* page title */}
                <div className="section-wrapper pl-60 pr-60 pt-60">
                  <div className="bostami-page-title-wrap mb-35">
                    <h2 className="page-title">about</h2>
                    <p>
                      Software Engineer with Expertise in AI and Full Stack
                      Development As a generative AI developer, I specialize in
                      creating chatbots and implementing AI solutions on
                      websites. My proficiency extends to Next.js, where I build
                      web apps and integrate generative AI features.
                    </p>
                    <p>
                      Additionally, I excel in automation and web scraping using
                      Python and Selenium, creating tools for web scraping,
                      autoresponders in WhatsApp, and email extraction. I have
                      also built APIs using FastAPI. My commitment to staying
                      current with industry trends ensures effective digital
                      solutions.
                    </p>
                  </div>
                </div>
                {/* what-do */}
                <div className="section-wrapper pl-60 pr-60">
                  <div className="bostami-section-title-wrap mb-30">
                    <h3 className="section-title">What I do!</h3>
                  </div>
                  <div className="bostami-what-do-wrap mb-30">
                    <div className="row">
                      {/* single item */}
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item bg-prink">
                          <div className="icon">
                            <i className="fa-light fa-swatchbook" />
                          </div>
                          <div className="text">
                            <h4 className="title">
                              Generative AI & Chatbot Integration{" "}
                            </h4>
                            <p>
                              Successfully integrated AI models into websites
                              for enhanced user experiences and process
                              automation. Designed and deployed conversational
                              chatbots using NLP techniques.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* single item */}
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item bg-catkrill">
                          <div className="icon">
                            <i className="fa-regular fa-grid-2" />
                          </div>
                          <div className="text">
                            <h4 className="title">Nextjs Development</h4>
                            <p>
                              Web App Development in Nextjs. Implemented RESTful
                              APIs and optimized server-side rendering (SSR).
                              Proficient in both front-end and back-end
                              development.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* single item */}
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item  bg-catkrill">
                          <div className="icon">
                            <i className="fa-regular fa-camera-retro" />
                          </div>
                          <div className="text">
                            <h4 className="title">Automation</h4>
                            <p>
                              Created a WhatsApp autoresponder and email
                              extraction scripts. Implemented automated email
                              sending for marketing campaigns.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* single item */}
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item bg-prink bg-blue">
                          <div className="icon">
                            <i className="fa-regular fa-code" />
                          </div>
                          <div className="text">
                            <h4 className="title">Web Scraping</h4>
                            <p>
                              Proficient in using Selenium and Beautiful Soup
                              for web scraping
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* client */}
                <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
                  <div className="bostami-section-title-wrap text-center mb-50">
                    <h3 className="section-title">clinet</h3>
                  </div>
                  <div className="bostami-client-slider">
                    <div className="swiper-container client_slide_active">
                      <div className="swiper-wrapper">
                        {/* single item */}
                        <div className="swiper-slide">
                          <img
                            className="bostami-client-slider-logo"
                            src="assets/img/client/client-logo-1.png"
                            alt=""
                          />
                        </div>
                        {/* single item */}
                        <div className="swiper-slide">
                          <img
                            className="bostami-client-slider-logo"
                            src="assets/img/client/client-logo-2.png"
                            alt=""
                          />
                        </div>
                        {/* single item */}
                        <div className="swiper-slide">
                          <img
                            className="bostami-client-slider-logo"
                            src="assets/img/client/client-logo-3.png"
                            alt=""
                          />
                        </div>
                        {/* single item */}
                        <div className="swiper-slide">
                          <img
                            className="bostami-client-slider-logo"
                            src="assets/img/client/client-logo-4.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* footer copyright */}
                <div className="footer-copyright text-center pt-25 pb-25">
                  <span>
                    © 2024 All Rights Reserved by{" "}
                    <a
                      href="https://themeforest.net/user/elite-themes24"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rafi Ali
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
            {/* about-page-end */}
            {/* main-menu-start */}
            <div className="col-xxl-1 d-xxl-block d-none">
              <div className="bostami-main-menu-wrap">
                <nav className="bastami-main-menu main_menu">
                  <ul>
                    <li className="active">
                      <a href="index.html">
                        <span>
                          <i className="fa-light fa-address-card" />
                        </span>
                        about
                      </a>
                    </li>
                    <li>
                      <a href="resume.html">
                        <span>
                          <i className="fa-light fa-file-user" />
                        </span>
                        Resume
                      </a>
                    </li>
                    <li>
                      <a href="portfolio.html">
                        <span>
                          <i className="fa-light fa-briefcase" />
                        </span>
                        Works
                      </a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <span>
                          <i className="fa-light fa-newspaper" />
                        </span>
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <span>
                          <i className="fa-light fa-address-book" />
                        </span>
                        contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* main-menu-end */}
          </div>
        </div>
      </div>
      {/* JS here */}
    </>
  );
}

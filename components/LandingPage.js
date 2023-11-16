import React from "react"
import { TypeAnimation } from 'react-type-animation';
//import 'src/components/LandingPage.css';
import Land

export const LandingPage = () => {

          return (
            <div>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
              <title>Rex : Home</title>
              {/* Favicon */}
              <link rel="shortcut icon" type="image/icon" href="assets/images/favicon.ico" />
              {/* Font Awesome */}
              <link href="assets/css/font-awesome.css" rel="stylesheet" />
              {/* Bootstrap */}
              <link href="assets/css/bootstrap.css" rel="stylesheet" />
              {/* Slick slider */}
              <link rel="stylesheet" type="text/css" href="assets/css/slick.css" /> 
              {/* Fancybox slider */}
              <link rel="stylesheet" href="assets/css/jquery.fancybox.css" type="text/css" media="screen" /> 
              {/* Animate css */}
              <link rel="stylesheet" type="text/css" href="assets/css/animate.css" />  
              {/* Theme color */}
              <link id="switcher" href="assets/css/theme-color/default.css" rel="stylesheet" />
              <link href="preloader.css" rel="stylesheet" />
              {/* Main Style */}
              <link href="style.css" rel="stylesheet" />
              {/* Fonts */}
              {/* Open Sans for body font */}
              <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
              {/* Raleway for Title */}
              <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type="text/css" />
              {/* Pacifico for 404 page   */}
              <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" type="text/css" />
              {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
              {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
              {/*[if lt IE 9]>
            
            
          <![endif]*/}
              {/* BEGAIN PRELOADER */}
              <div id="preloader">
                <div className="loader">&nbsp;</div>
              </div>
              {/* END PRELOADER */}    
              {/* SCROLL TOP BUTTON */}
              <a className="scrollToTop" href="#"><i className="fa fa-chevron-up" /></a>
              {/* END SCROLL TOP BUTTON */}
              {/* Start header section */}  
              <div className="aniText">
              <TypeAnimation
                  sequence={['One', 500, 'Two', 500, 'Three', 500]}
                   style={{ fontSize: '2em' }}
                    repeat={Infinity}
              />
              </div>
              
              <header id="header">
                <div className="header-inner">
                  {/* Header image */}
                  <img src="https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg" alt="img" />
                  <div className="header-overlay">
                    <div className="header-content">
                      {/* Start header content slider */}
                      <h2 className="header-slide">WE GENERATE
                        <span>MOST CREATIVE</span>
                        <span>MOST Design</span>
                        <span>MOST Valuable</span>
                        IDEA</h2>
                      {/* End header content slider */}  
                      {/* Header btn area */}
                      <div className="header-btn-area">
                        <a className="knowmore-btn" href="#">KNOW MORE</a>
                        <a className="download-btn" href="#">DOWNLOAD Theme</a>
                      </div>
                    </div>
                  </div>      
                </div>
              </header>
              {/* End header section */}
              {/* Start menu section */}
              <section id="menu-area">
                <nav className="navbar navbar-default main-navbar" role="navigation">  
                  <div className="container">
                    <div className="navbar-header">
                      {/* FOR MOBILE VIEW COLLAPSED BUTTON */}
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                      {/* LOGO */}                                               
                      <a className="navbar-brand logo" href="index.html"><img src="assets/images/logo.jpg" alt="logo" /></a>                      
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                      <ul id="top-menu" className="nav navbar-nav main-nav menu-scroll">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="#about">ABOUT</a></li> 
                        <li><a href="#team">TEAM</a></li>                    
                        <li><a href="#service">SERVICE</a></li> 
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#pricing-table">PRICE </a></li>             
                        <li><a href="#from-blog">BLOG </a></li>      
                        <li><a href="#contact">CONTACT</a></li>
                      </ul>                            
                    </div>{/*/.nav-collapse */}
                    <div className="search-area">
                      <form action>
                        <input id="search" name="search" type="text" placeholder="What're you looking for ?" />
                        <input id="search_submit" defaultValue="Rechercher" type="submit" />
                      </form>
                    </div>         
                  </div>          
                </nav> 
              </section>
              {/* End menu section */}
              {/* Start about section */}
              <section id="about">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      {/* Start welcome area */}
                      <div className="welcome-area">
                        <div className="title-area">
                          <h2 className="tittle">Welcome to <span>Nex</span></h2>
                          <span className="tittle-line" />
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  labore et dolore magna aliqua. Ut enim ad minim veniamo laboris nis</p>
                        </div>
                        <div className="welcome-content">
                          <ul className="wc-table">
                            <li>
                              <div className="single-wc-content wow fadeInUp">
                                <span className="fa fa-users wc-icon" />
                                <h4 className="wc-tittle">Creative concept</h4>
                                <p>At vero eos et accusamus et iusto odio in dignissimos ducimus voluptatum in delenatque </p>
                              </div>
                            </li>
                            <li>
                              <div className="single-wc-content wow fadeInUp">
                                <span className="fa fa-sellsy wc-icon" />
                                <h4 className="wc-tittle">interface design</h4>
                                <p>At vero eos et accusamus et iusto odio in dignissimos ducimus voluptatum in delenatque </p>
                              </div>
                            </li>
                            <li>
                              <div className="single-wc-content wow fadeInUp">
                                <span className="fa fa-line-chart wc-icon" />
                                <h4 className="wc-tittle">strategy</h4>
                                <p>At vero eos et accusamus et iusto odio in dignissimos ducimus voluptatum in delenatque </p>
                              </div>
                            </li>
                            <li>
                              <div className="single-wc-content wow fadeInUp">
                                <span className="fa fa-bus wc-icon" />
                                <h4 className="wc-tittle">business solution</h4>
                                <p>At vero eos et accusamus et iusto odio in dignissimos ducimus voluptatum in delenatque </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* End welcome area */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="about-area">
                        <div className="row">
                          <div className="col-md-5 col-sm-6 col-xs-12">
                            <div className="about-left wow fadeInLeft">
                              <img src="assets/images/about-img.jpg" alt="img" />
                              <a className="introduction-btn" href="#">Introduction</a>
                            </div>
                          </div>
                          <div className="col-md-7 col-sm-6 col-xs-12">
                            <div className="about-right wow fadeInRight">
                              <div className="title-area">
                                <h2 className="tittle">About <span>Nex</span> design</h2>
                                <span className="tittle-line" />
                                <p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illotore itatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores e</p>
                                <div className="about-btn-area">
                                  <a href="#" className="button button-default" data-text="KNOW MORE"><span>KNOW MORE</span></a>
                                </div>                    
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> 
              {/* End about section */}
              {/* Start call to action */}
              <section id="call-to-action">
                <img src="assets/images/call-to-action-bg.png" alt="img" />
                <div className="call-to-overlay">
                  <div className="container">
                    <div className="call-to-content wow fadeInUp">
                      <h2>The most impressive templete you will find</h2>
                      <a href="#" className="button button-default" data-text="GET IT NOW"><span>GET IT NOW</span></a>
                    </div>
                  </div>
                </div> 
              </section>
              {/* End call to action */}
              {/* Start Team action */}
              <section id="team">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="team-area">
                        <div className="title-area">
                          <h2 className="tittle">Meet our team</h2>
                          <span className="tittle-line" />
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                        </div>
                        {/* Start team content */}
                        <div className="team-content">
                          <ul className="team-grid">
                            <li>
                              <div className="team-item team-img-1 wow fadeInUp">
                                <div className="team-info">
                                  <p> I must explain to you how all this mistaken idea of denouncing pleasure n</p>
                                  <a href="#"><span className="fa fa-facebook" /></a>
                                  <a href="#"><span className="fa fa-twitter" /></a>
                                  <a href="#"><span className="fa fa-pinterest" /></a>
                                  <a href="#"><span className="fa fa-rss" /></a>
                                </div>
                              </div>
                              <div className="team-address">
                                <p>John Richerd</p>
                                <span>CEO &amp; Founder</span>
                              </div>
                            </li>
                            <li>
                              <div className="team-item team-img-2 wow fadeInUp">
                                <div className="team-info">
                                  <p> I must explain to you how all this mistaken idea of denouncing pleasure n</p>
                                  <a href="#"><span className="fa fa-facebook" /></a>
                                  <a href="#"><span className="fa fa-twitter" /></a>
                                  <a href="#"><span className="fa fa-pinterest" /></a>
                                  <a href="#"><span className="fa fa-rss" /></a>
                                </div>
                              </div>
                              <div className="team-address">
                                <p>MIKE BATTON</p>
                                <span>Co-founder</span>                  
                              </div>
                            </li>
                            <li>
                              <div className="team-item team-img-3 wow fadeInUp">
                                <div className="team-info">
                                  <p> I must explain to you how all this mistaken idea of denouncing pleasure n</p>
                                  <a href="#"><span className="fa fa-facebook" /></a>
                                  <a href="#"><span className="fa fa-twitter" /></a>
                                  <a href="#"><span className="fa fa-pinterest" /></a>
                                  <a href="#"><span className="fa fa-rss" /></a>
                                </div>
                              </div>
                              <div className="team-address">
                                <p>JOHN VICK</p>
                                <span>Developer</span>
                              </div>
                            </li>
                            <li>
                              <div className="team-item team-img-4 wow fadeInUp">
                                <div className="team-info">
                                  <p> I must explain to you how all this mistaken idea of denouncing pleasure n</p>
                                  <a href="#"><span className="fa fa-facebook" /></a>
                                  <a href="#"><span className="fa fa-twitter" /></a>
                                  <a href="#"><span className="fa fa-pinterest" /></a>
                                  <a href="#"><span className="fa fa-rss" /></a>
                                </div>
                              </div>
                              <div className="team-address">
                                <p>ROB HANSOM</p>
                                <span>Senior designer</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* End team content */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Start Team action */}
              {/* Start service section */}
              <section id="service">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="service-area">
                        <div className="title-area">
                          <h2 className="tittle">Service we offer</h2>
                          <span className="tittle-line" />
                          <p>perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                        </div>
                        {/* service content */}
                        <div className="service-content">
                          <ul className="service-table">
                            <li className="col-md-3 col-sm-6">
                              <div className="single-service wow slideInUp">
                                <span className="fa fa-edit service-icon" />
                                <h4 className="service-title">UX Design</h4>
                                <p>At vero eos et accusa mus odio in dignissimos ducimus qui anditiis the tatum</p>
                              </div>
                            </li>
                            <li className="col-md-3 col-sm-6">
                              <div className="single-service wow slideInUp">
                                <span className="fa fa-sort-amount-asc service-icon" />
                                <h4 className="service-title">Strategy</h4>
                                <p>At vero eos et accusa mus odio in dignissimos ducimus qui anditiis the tatum</p>
                              </div>
                            </li>
                            <li className="col-md-3 col-sm-6">
                              <div className="single-service wow slideInUp">
                                <span className="fa fa-map-o service-icon" />
                                <h4 className="service-title">UI Design</h4>
                                <p>At vero eos et accusa mus odio in dignissimos ducimus qui anditiis the tatum</p>
                              </div>
                            </li>
                            <li className="col-md-3 col-sm-6">
                              <div className="single-service wow slideInUp">
                                <span className="fa fa-rocket service-icon" />
                                <h4 className="service-title">Analystic</h4>
                                <p>At vero eos et accusa mus odio in dignissimos ducimus qui anditiis the tatum</p>
                              </div>
                            </li>
                            <li className="col-md-3 col-sm-6">
                              <div className="single-service wow slideInUp">
                                <span className="fa fa-car service-icon" />
                                <h4 className="service-title">Usibility</h4>
                                <p>At vero eos et accusa mus odio in dignissimos ducimus qui anditiis the tatum</p>
                              </div>
                            </li>
                            <li className="col-md-3 col-sm-6">
                              <div className="single-service wow slideInUp">
                                <span className="fa fa-bank service-icon" />
                                <h4 className="service-title">Business solution</h4>
                                <p>At vero eos et accusa mus odio in dignissimos ducimus qui anditiis the tatum</p>
                              </div>
                            </li>
                            <li className="col-md-3 col-sm-6">
                              <div className="single-service wow slideInUp">
                                <span className="fa fa-user-secret service-icon" />
                                <h4 className="service-title">Creative concept</h4>
                                <p>At vero eos et accusa mus odio in dignissimos ducimus qui anditiis the tatum</p>
                              </div>
                            </li>
                            <li className="col-md-3 col-sm-6">
                              <div className="single-service wow slideInUp">
                                <span className="fa fa-support service-icon" />
                                <h4 className="service-title">Support</h4>
                                <p>At vero eos et accusa mus odio in dignissimos ducimus qui anditiis the tatum</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End service section */}
              {/* Start Portfolio section */}
              <section id="portfolio">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="portfolio-area">
                        <div className="title-area">
                          <h2 className="tittle">Recent portfolio</h2>
                          <span className="tittle-line" />
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                        </div>
                        {/* Portfolio content */}
                        <div className="portfolio-content">
                          {/* portfolio menu */}
                          <div className="portfolio-menu">
                            <ul>
                              <li className="filter" data-filter="all">All</li>
                              <li className="filter" data-filter=".branding">Branding</li>
                              <li className="filter" data-filter=".design">Design</li>
                              <li className="filter" data-filter=".development">Development</li>
                              <li className="filter" data-filter=".photography">Photography</li>
                            </ul>
                          </div>
                          {/* Portfolio container */}
                          <div id="mixit-container" className="portfolio-container">
                            <div className="single-portfolio mix branding">
                              <div className="single-item">
                                <img src="assets/images/portfolio-img-small1.jpg" alt="img" />
                                <div className="single-item-content">
                                  <div className="portfolio-social-icon">
                                    <a className="fancybox" data-fancybox-group="gallery" href="assets/images/portfolio-img-big1.jpg"><i className="fa fa-eye" /></a>
                                    <a className="link-btn" href="#"><i className="fa fa-link" /></a>
                                  </div>
                                  <div className="portfolio-title">
                                    <h4>Mobile application</h4>
                                    <span>UI Design</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-portfolio mix design">
                              <div className="single-item">
                                <img src="assets/images/portfolio-img-small2.jpg" alt="img" />
                                <div className="single-item-content">
                                  <div className="portfolio-social-icon">
                                    <a className="fancybox" data-fancybox-group="gallery" href="assets/images/portfolio-img-big2.jpg"><i className="fa fa-eye" /></a>
                                    <a className="link-btn" href="#"><i className="fa fa-link" /></a>
                                  </div>
                                  <div className="portfolio-title">
                                    <h4>Mobile application</h4>
                                    <span>UI Design</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-portfolio mix development">
                              <div className="single-item">
                                <img src="assets/images/portfolio-img-small3.jpg" alt="img" />
                                <div className="single-item-content">
                                  <div className="portfolio-social-icon">
                                    <a className="fancybox" data-fancybox-group="gallery" href="assets/images/portfolio-img-big3.jpg"><i className="fa fa-eye" /></a>
                                    <a className="link-btn" href="#"><i className="fa fa-link" /></a>
                                  </div>
                                  <div className="portfolio-title">
                                    <h4>Mobile application</h4>
                                    <span>UI Design</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-portfolio mix photography">
                              <div className="single-item">
                                <img src="assets/images/portfolio-img-small4.jpg" alt="img" />
                                <div className="single-item-content">
                                  <div className="portfolio-social-icon">
                                    <a className="fancybox" data-fancybox-group="gallery" href="assets/images/portfolio-img-big4.jpg"><i className="fa fa-eye" /></a>
                                    <a className="link-btn" href="#"><i className="fa fa-link" /></a>
                                  </div>
                                  <div className="portfolio-title">
                                    <h4>Mobile application</h4>
                                    <span>UI Design</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-portfolio mix photography">
                              <div className="single-item">
                                <img src="assets/images/portfolio-img-small5.jpg" alt="img" />
                                <div className="single-item-content">
                                  <div className="portfolio-social-icon">
                                    <a className="fancybox" data-fancybox-group="gallery" href="assets/images/portfolio-img-big5.jpg"><i className="fa fa-eye" /></a>
                                    <a className="link-btn" href="#"><i className="fa fa-link" /></a>
                                  </div>
                                  <div className="portfolio-title">
                                    <h4>Mobile application</h4>
                                    <span>UI Design</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-portfolio mix photography">
                              <div className="single-item">
                                <img src="assets/images/portfolio-img-small6.jpg" alt="img" />
                                <div className="single-item-content">
                                  <div className="portfolio-social-icon">
                                    <a className="fancybox" data-fancybox-group="gallery" href="assets/images/portfolio-img-big6.jpg"><i className="fa fa-eye" /></a>
                                    <a className="link-btn" href="#"><i className="fa fa-link" /></a>
                                  </div>
                                  <div className="portfolio-title">
                                    <h4>Mobile application</h4>
                                    <span>UI Design</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-portfolio mix photography">
                              <div className="single-item">
                                <img src="assets/images/portfolio-img-small7.jpg" alt="img" />
                                <div className="single-item-content">
                                  <div className="portfolio-social-icon">
                                    <a className="fancybox" data-fancybox-group="gallery" href="assets/images/portfolio-img-big7.jpg"><i className="fa fa-eye" /></a>
                                    <a className="link-btn" href="#"><i className="fa fa-link" /></a>
                                  </div>
                                  <div className="portfolio-title">
                                    <h4>Mobile application</h4>
                                    <span>UI Design</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-portfolio mix photography">
                              <div className="single-item">
                                <img src="assets/images/portfolio-img-small2.jpg" alt="img" />
                                <div className="single-item-content">
                                  <div className="portfolio-social-icon">
                                    <a className="fancybox" data-fancybox-group="gallery" href="assets/images/portfolio-img-big2.jpg"><i className="fa fa-eye" /></a>
                                    <a className="link-btn" href="#"><i className="fa fa-link" /></a>
                                  </div>
                                  <div className="portfolio-title">
                                    <h4>Mobile application</h4>
                                    <span>UI Design</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>      
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Portfolio section */}
              {/* Start counter section */}
              <section id="counter">
                <img src="assets/images/counter-bg.jpg" alt="img" />
                <div className="counter-overlay">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        {/* Start counter area */}
                        <div className="counter-area">
                          <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="single-counter">
                              <span className="fa fa-users" />
                              <div className="counter-count">
                                <span className="counter">1050</span>
                                <p>Happy Clients</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="single-counter">
                              <span className="fa fa-bus" />
                              <div className="counter-count">
                                <span className="counter">750</span>
                                <p>Project delivery</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="single-counter">
                              <span className="fa fa-twitter" />
                              <div className="counter-count">
                                <span className="counter">2,300</span>
                                <p>Followers</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="single-counter">
                              <span className="fa fa-tasks" />
                              <div className="counter-count">
                                <span className="counter">800</span>
                                <p>Project done</p>
                              </div>
                            </div>
                          </div>    
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </section>
              {/* End counter section */}
              {/* Start Pricing Table section */}
              <section id="pricing-table">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pricing-table-area">
                        <div className="title-area">
                          <h2 className="tittle">Pricing table</h2>
                          <span className="tittle-line" />
                          <p>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                        </div>
                        {/* service content */}
                        <div className="pricing-table-content">
                          <ul className="price-table">
                            <li className="wow slideInUp">
                              <div className="single-price">
                                <h4 className="price-header">Basic</h4>
                                <span className="price-amount">$0.00/mo</span>
                                <p>5GB Storage</p>
                                <p>1GB RAM</p>
                                <p>400GB Bandwidth</p>
                                <p>10 Email Address</p>
                                <p>Unlimited access</p>
                                <p>Forum Support</p>
                                <a data-text="SIGN UP" className="button button-default" href="#"><span>SIGN UP</span></a>
                              </div>
                            </li>
                            <li className="wow slideInUp">
                              <div className="single-price standard-price">
                                <h4 className="price-header">Standard</h4>
                                <span className="price-amount">$10.00/mo</span>
                                <p>5GB Storage</p>
                                <p>1GB RAM</p>
                                <p>400GB Bandwidth</p>
                                <p>10 Email Address</p>
                                <p>Unlimited access</p>
                                <p>Forum Support</p>
                                <a data-text="SIGN UP" className="button button-default" href="#"><span>SIGN UP</span></a>
                              </div>
                            </li>
                            <li className="wow slideInUp">
                              <div className="single-price">
                                <h4 className="price-header">Advance</h4>
                                <span className="price-amount">$19.00/mo</span>
                                <p>5GB Storage</p>
                                <p>1GB RAM</p>
                                <p>400GB Bandwidth</p>
                                <p>10 Email Address</p>
                                <p>Unlimited access</p>
                                <p>Forum Support</p>
                                <a data-text="SIGN UP" className="button button-default" href="#"><span>SIGN UP</span></a>
                              </div>
                            </li>
                            <li className="wow slideInUp">
                              <div className="single-price">
                                <h4 className="price-header">Mighty</h4>
                                <span className="price-amount">$39.00/mo</span>
                                <p>5GB Storage</p>
                                <p>1GB RAM</p>
                                <p>400GB Bandwidth</p>
                                <p>10 Email Address</p>
                                <p>Unlimited access</p>
                                <p>Forum Support</p>
                                <a data-text="SIGN UP" className="button button-default" href="#"><span>SIGN UP</span></a>
                              </div>
                            </li>
                          </ul>     
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Pricing Table section */}
              {/* Start Testimonial section */}
              <section id="testimonial">
                <img src="assets/images/testimonial-bg.jpg" alt="img" />
                <div className="counter-overlay">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        {/* Start Testimonial area */}
                        <div className="testimonial-area">
                          <div className="title-area">
                            <h2 className="tittle">What people say about us</h2>
                            <span className="tittle-line" />              
                          </div>
                          <div className="testimonial-conten">
                            {/* Start testimonial slider */}
                            <div className="testimonial-slider">
                              {/* single slide */}
                              <div className="single-slide">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoquat. Duis aute irure d olor in reprehenderit</p>
                                <div className="single-testimonial">
                                  <img className="testimonial-thumb" src="assets/images/testimonial-image1.png" alt="img" />
                                  <p>Jonna Hike</p>
                                  <span>CEO, Themeforest</span>
                                </div>
                              </div>
                              {/* single slide */}
                              <div className="single-slide">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoquat. Duis aute irure d olor in reprehenderit</p>
                                <div className="single-testimonial">
                                  <img className="testimonial-thumb" src="assets/images/team-member2.png" alt="img" />
                                  <p>Jonna Hike</p>
                                  <span>CEO, Themeforest</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </section>
              {/* End Testimonial section */}
              {/* Start from blog section */}
              <section id="from-blog">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="from-blog-area">
                        <div className="title-area">
                          <h2 className="tittle">Our blog</h2>
                          <span className="tittle-line" />
                          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est</p>
                        </div>
                        {/* From Blog content */}
                        <div className="from-blog-content">
                          <div className="row">
                            <div className="col-md-4">
                              <article className="single-from-blog">
                                <figure>
                                  <a href="blog-single.html"><img src="assets/images/the-sky.jpg" alt="img" /></a>
                                </figure>
                                <div className="blog-title">
                                  <h2><a href="blog-single.html">Here is the post title</a></h2>
                                  <p>Posted by <a className="blog-admin" href="#">admin</a> on <span className="blog-date">23rd july 2015</span></p>
                                </div>
                                <p>Sed ut perspiciatis unde mnis is te natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis </p>
                                <div className="blog-footer">
                                  <a href="#"><span className="fa fa-comment" />18 Comments</a>
                                  <a href="#"><span className="fa fa-thumbs-o-up" />35 Likes</a>
                                </div>
                              </article>
                            </div>
                            <div className="col-md-4">
                              <article className="single-from-blog">
                                <figure>
                                  <a href="blog-single.html"><img src="assets/images/photographer.jpg" alt="img" /></a>
                                </figure>
                                <div className="blog-title">
                                  <h2><a href="blog-single.html">Here is the post title</a></h2>
                                  <p>Posted by <a className="blog-admin" href="#">admin</a> on <span className="blog-date">23rd july 2015</span></p>
                                </div>
                                <p>Sed ut perspiciatis unde mnis is te natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis </p>
                                <div className="blog-footer">
                                  <a href="#"><span className="fa fa-comment" />18 Comments</a>
                                  <a href="#"><span className="fa fa-thumbs-o-up" />35 Likes</a>
                                </div>
                              </article>
                            </div>
                            <div className="col-md-4">
                              <article className="single-from-blog">
                                <figure>
                                  <a href="blog-single.html"><img src="assets/images/sealand.jpg" alt="img" /></a>
                                </figure>
                                <div className="blog-title">
                                  <h2><a href="blog-single.html">Here is the post title</a></h2>
                                  <p>Posted by <a className="blog-admin" href="#">admin</a> on <span className="blog-date">23rd july 2015</span></p>
                                </div>
                                <p>Sed ut perspiciatis unde mnis is te natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis </p>
                                <div className="blog-footer">
                                  <a href="#"><span className="fa fa-comment" />18 Comments</a>
                                  <a href="#"><span className="fa fa-thumbs-o-up" />35 Likes</a>
                                </div>
                              </article>
                            </div>
                          </div>    
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End from blog section */}
              <section id="client">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="client-area">
                        <ul className="client-table">
                          <li><img src="assets/images/envato.png" alt="client logo" /></li>
                          <li><img src="assets/images/google.png" alt="client logo" /></li>
                          <li><img src="assets/images/amazon.png" alt="client logo" /></li>
                          <li><img src="assets/images/discovery.png" alt="client logo" /></li>
                          <li><img src="assets/images/envato.png" alt="client logo" /></li>
                          <li><img src="assets/images/tuenti.png" alt="client logo" /></li>
                          <li><img src="assets/images/envato.png" alt="client logo" /></li>
                          <li><img src="assets/images/google.png" alt="client logo" /></li>
                          <li><img src="assets/images/amazon.png" alt="client logo" /></li>
                          <li><img src="assets/images/discovery.png" alt="client logo" /></li>
                          <li><img src="assets/images/envato.png" alt="client logo" /></li>
                          <li><img src="assets/images/tuenti.png" alt="client logo" /></li>                    
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Start Contact section */}
              <section id="contact">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="contact-left wow fadeInLeft">
                        <h2>Contact with us</h2>
                        <address className="single-address">
                          <h4>Postal address:</h4>
                          <p>PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                        </address>
                        <address className="single-address">
                          <h4>Headquarters:</h4>
                          <p>121 King Street, Melbourne Victoria 3000 Australia</p>
                        </address>
                        <address className="single-address">
                          <h4>Phone</h4>
                          <p>Phone Number: (123) 456 7890</p>
                          <p>Fax Number: (123) 456 7890</p>
                        </address>
                        <address className="single-address">
                          <h4>E-Mail</h4>
                          <p>Support: Support@example.com</p>
                          <p>Sales: sales@example.com</p>
                        </address>
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-6 col-xs-12">
                      <div className="contact-right wow fadeInRight">
                        <h2>Send a message</h2>
                        <form action className="contact-form">
                          <div className="form-group">                
                            <input type="text" className="form-control" placeholder="Name" />
                          </div>
                          <div className="form-group">                
                            <input type="email" className="form-control" placeholder="Enter Email" />
                          </div>              
                          <div className="form-group">
                            <textarea className="form-control" defaultValue={""} />
                          </div>
                          <button type="submit" data-text="SUBMIT" className="button button-default"><span>SUBMIT</span></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Contact section */}
              {/* Start Google Map */}
              <section id="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d6303.67022361714!2d144.955652!3d-37.817331!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-37.8173306!2d144.9556518!5e0!3m2!1sen!2sbd!4v1442411159706" width="100%" height={500} frameBorder={0} style={{border: 0}} allowFullScreen />  
              </section>
              {/* End Google Map */}
              {/* Start Footer */}    
              <footer id="footer">
                <div className="footer-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="footer-top-area">             
                          <a className="footer-logo" href="#"><img src="assets/images/logo.jpg" alt="Logo" /></a>              
                          <div className="footer-social">
                            <a className="facebook" href="#"><span className="fa fa-facebook" /></a>
                            <a className="twitter" href="#"><span className="fa fa-twitter" /></a>
                            <a className="google-plus" href="#"><span className="fa fa-google-plus" /></a>
                            <a className="youtube" href="#"><span className="fa fa-youtube" /></a>
                            <a className="linkedin" href="#"><span className="fa fa-linkedin" /></a>
                            <a className="dribbble" href="#"><span className="fa fa-dribbble" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <p>Designed by <a rel="nofollow" href="http://www.markups.io/">Jayesh Nikwade</a></p>
                </div>
              </footer>
              {/* End Footer */}
              {/* initialize jQuery Library */} 
              {/* Include all compiled plugins (below), or include individual files as needed */}
              {/* Bootstrap */}
              {/* Slick Slider */}
              {/* Counter */}
              {/* mixit slider */}
              {/* Add fancyBox */}        
              {/* Wow animation */}
              {/* Custom js */}
            </div>
         );
}
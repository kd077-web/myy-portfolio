import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import cinemate from "../../assets/images/cinemate.png";
import Recipe from "../../assets/images/Recipe.png";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
           RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={cinemate}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React JS</span>

                  <span className="card-detail-badge">API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Cinemate movie</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://englishmovierecommend.netlify.app"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={Recipe}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React js</span>
                  <span className="card-detail-badge">api</span>

                  <span className="card-detail-badge">search</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Ingredient Based Recipe Search Engine</h5>
                  </div>
                  <a className="ad-btn" href="https://ingrez-search.netlify.app">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661661583168-659045108488?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluY29tZSUyMGV4cGVuc2V8ZW58MHx8MHx8fDA%3D"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Nodejs</span>

                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Income Expenses Tracker</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/kd077-web/incomeexpensetrackerbackend"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2clMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Nodejs</span>

                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Blog management system</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/kd077-web/fullstckblogapp"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
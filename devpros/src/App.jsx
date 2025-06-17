
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div className="cyberpunk-container">
      {/* Background effects */}
      <div className="cyber-grid"></div>
      <div className="neon-particles"></div>
      
      {/* Main content card */}
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row w-100 justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="cyber-card">
              
              {/* Logo Section */}
              <div className="logo-section">
                <div className="logo-container">
                  <div className="logo-glow"></div>
                  <img 
                    src="/devpros.png" 
                    alt="DevPros Logo" 
                    className="devpros-logo"
                  />
                </div>
              </div>

              {/* Motto Section */}
              <div className="motto-section">
                <div className="motto-container">
                  <h1 className="cyber-motto">
                    <span className="motto-group-1">ALL IN</span>
                    <span className="motto-separator"> </span>
                    <span className="motto-group-2">OR ALL ALTERED</span>
                  </h1>
                  <div className="motto-underline"></div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="contact-section">
                <div className="contact-grid">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="contact-symbol">@</i>
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">EMAIL</span>
                      <a href="mailto:work.devpros@gmail.com" className="contact-link">
                        work.devpros@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="contact-symbol">f</i>
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">FACEBOOK</span>
                      <a href="https://facebook.com/blog.devpros" target="_blank" className="contact-link">
                        blog.devpros
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="contact-symbol">git</i>
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">GITHUB</span>
                      <a href="https://github.com/devprosvn" target="_blank" className="contact-link">
                        devprosvn
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="contact-symbol">D</i>
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">DORAHACKS</span>
                      <a href="https://dorahacks.io/hacker/devprosvn" target="_blank" className="contact-link">
                        devprosvn
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="contact-symbol">🤗</i>
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">HUGGINGFACE</span>
                      <a href="https://huggingface.co/devprosvn" target="_blank" className="contact-link">
                        devprosvn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default App

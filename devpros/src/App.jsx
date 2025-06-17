
import { createSignal, onMount, onCleanup } from 'solid-js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [scrollY, setScrollY] = createSignal(0)
  const [isVisible, setIsVisible] = createSignal({
    logo: false,
    motto: false,
    contacts: false
  })

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    setScrollY(currentScrollY)

    // Trigger animations based on scroll position
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    if (currentScrollY > 50) {
      setIsVisible(prev => ({ ...prev, logo: true }))
    } else {
      setIsVisible(prev => ({ ...prev, logo: false }))
    }

    if (currentScrollY > 200) {
      setIsVisible(prev => ({ ...prev, motto: true }))
    } else {
      setIsVisible(prev => ({ ...prev, motto: false }))
    }

    if (currentScrollY > 400) {
      setIsVisible(prev => ({ ...prev, contacts: true }))
    } else {
      setIsVisible(prev => ({ ...prev, contacts: false }))
    }
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
  })

  onCleanup(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div class="cyberpunk-container">
      {/* Background effects */}
      <div class="cyber-grid"></div>
      <div class="neon-particles"></div>
      
      {/* Main content card */}
      <div class="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div class="row w-100 justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="cyber-card">
              
              {/* Logo Section */}
              <div class={`logo-section ${isVisible().logo ? 'animate-in' : 'animate-out'}`}>
                <div class="logo-container">
                  <div class="logo-glow"></div>
                  <img 
                    src="/attached_assets/devpros (7)_1750193717159.png" 
                    alt="DevPros Logo" 
                    class="devpros-logo"
                  />
                </div>
              </div>

              {/* Motto Section */}
              <div class={`motto-section ${isVisible().motto ? 'animate-in' : 'animate-out'}`}>
                <div class="motto-container">
                  <h1 class="cyber-motto">
                    <span class="motto-word">ALL</span>
                    <span class="motto-separator">IN</span>
                    <span class="motto-word">OR</span>
                    <span class="motto-word">ALL</span>
                    <span class="motto-highlight">ALTERED</span>
                  </h1>
                  <div class="motto-underline"></div>
                </div>
              </div>

              {/* Contact Section */}
              <div class={`contact-section ${isVisible().contacts ? 'animate-in' : 'animate-out'}`}>
                <div class="contact-grid">
                  <div class="contact-item">
                    <div class="contact-icon">
                      <i class="contact-symbol">@</i>
                    </div>
                    <div class="contact-info">
                      <span class="contact-label">EMAIL</span>
                      <a href="mailto:work.devpros@gmail.com" class="contact-link">
                        work.devpros@gmail.com
                      </a>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="contact-icon">
                      <i class="contact-symbol">f</i>
                    </div>
                    <div class="contact-info">
                      <span class="contact-label">FACEBOOK</span>
                      <a href="https://facebook.com/blog.devpros" target="_blank" class="contact-link">
                        blog.devpros
                      </a>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="contact-icon">
                      <i class="contact-symbol">git</i>
                    </div>
                    <div class="contact-info">
                      <span class="contact-label">GITHUB</span>
                      <a href="https://github.com/devprosvn" target="_blank" class="contact-link">
                        devprosvn
                      </a>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="contact-icon">
                      <i class="contact-symbol">D</i>
                    </div>
                    <div class="contact-info">
                      <span class="contact-label">DORAHACKS</span>
                      <a href="https://dorahacks.io/hacker/devprosvn" target="_blank" class="contact-link">
                        devprosvn
                      </a>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="contact-icon">
                      <i class="contact-symbol">🤗</i>
                    </div>
                    <div class="contact-info">
                      <span class="contact-label">HUGGINGFACE</span>
                      <a href="https://huggingface.co/devprosvn" target="_blank" class="contact-link">
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

      {/* Scroll indicator */}
      <div class="scroll-indicator">
        <div class="scroll-text">SCROLL TO EXPLORE</div>
        <div class="scroll-arrow">↓</div>
      </div>

      {/* Extra space for scrolling */}
      <div style="height: 200vh;"></div>
    </div>
  )
}

export default App

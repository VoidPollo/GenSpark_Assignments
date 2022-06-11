import './home.css'

export default function home() {
    return (
      <>
        <div id="hero" className="hero route bg-image" style={{backgroundImage: "url(assets/img/hero-bg.jpg)"}}>
        <div className="overlay-itro"></div>
          <div className="hero-content display-table">
            <div className="table-cell">
              <div className="container">
                <h1 className="hero-title mb-4">Hello, I'm Miguel</h1>
                <p className="hero-subtitle">
                  <span className="typed" data-typed-items="Designer, Developer, Gamer"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
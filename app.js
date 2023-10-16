class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
    };
  }

  // Méthode pour le click sur les cartes
  handleCardClick = () => {
    this.props.onCardClick(this.state.color);
  };

  // Corps des cartes
  render() {
    return (
      <div className="col-md-4 mb-3">
        <div
          className={`card text-white bg-${this.state.color}`}
          onClick={this.handleCardClick}
        >
          <div className="card-body">
            <img
              src="/images/3.jpg"
              alt="Astronaute"
              className="img-fluid img-top"
            />
          </div>
        </div>
      </div>
    );
  }
}

// Composant principal de l'App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarColor: "dark",
    };
  }

  // Méthode pour changer la couleur du navbar au click
  handleCardClick = (color) => {
    this.setState({ navbarColor: color });
  };

  componentDidMount() {
    // Stockage du navbarColor dans le local storage
    const storedColor = localStorage.getItem("navbarColor");
    if (storedColor) {
      this.setState({ navbarColor: storedColor });
    }
  }

  componentDidUpdate() {
    // Mise à jour du stockage du navbarColor dans le local storage
    localStorage.setItem("navbarColor", this.state.navbarColor);
  }

  // Affichage principal
  render() {
    return (
      <div>
        <nav
          className={`navbar fixed-top navbar-expand-lg navbar-${this.state.navbarColor} bg-${this.state.navbarColor}`}
        >
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                src="/images/2.jpg"
                alt="Logo"
                className="img-fluid logo rounded-circle mx-5"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mx-auto fw-bold text-uppercase">
                <li class="nav-item">
                  <a
                    class="nav-link active text-light"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">
                    Project
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container my-5 pt-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/images/1.png"
                alt="Femme voilée"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 pt-5 mt-5">
              <p className="text-danger fw-bold">Hello, I'm Agetha</p>
              <h1 className="fw-bold">Visual Designer</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                fugiat ipsa, repellat, est molestiae sed praesentium quisquam
                optio mollitia in sapiente aut beatae error eveniet nobis! Sint
                quibusdam aliquam blanditiis?
              </p>
              <button className="btn btn-lg btn-danger text-uppercase fw-bold">
                About Me
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <Card color="transparent" onCardClick={this.handleCardClick} />
            <Card color="secondary" onCardClick={this.handleCardClick} />
            <Card color="success" onCardClick={this.handleCardClick} />
            <Card color="danger" onCardClick={this.handleCardClick} />
            <Card color="warning" onCardClick={this.handleCardClick} />
            <Card color="info" onCardClick={this.handleCardClick} />
            <Card color="dark" onCardClick={this.handleCardClick} />
            <Card color="black" onCardClick={this.handleCardClick} />
            <Card color="primary" onCardClick={this.handleCardClick} />
          </div>
        </div>
        <div className="container contact mt-5 p-5 d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-md-9">
              <h2 className="fw-bold">
                Let's work together on <br /> your next project
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis eveniet <br /> doloremque id vitae at numquam
                placeat iste ab, voluptate facilis, tempora <br /> quam sed
                asperiores possimus nihil minima, praesentium rem dicta.
              </p>
            </div>
            <div className="col-md-3 pt-5 px-5">
              <button className="btn btn-lg btn-danger text-uppercase fw-bold">
                Contact
              </button>
            </div>
          </div>
        </div>
        <footer className="container-fluid mt-5 mb-5">
          <div className="container text-center">
            <div className="text-uppercase fw-bold link">
              <a href="#" className="px-2">
                Home
              </a>
              <a href="#" className="px-2">
                About
              </a>
              <a href="#" className="px-2">
                Project
              </a>
              <a href="#" className="px-2">
                Contact
              </a>
            </div>
            <div className="row pt-5">
              <div className="col-md-4 pb-3">
                <img
                  src="/images/2.jpg"
                  alt="Logo"
                  className="logo img-fluid rounded-circle"
                />
              </div>
              <div className="col-md-4 pb-3">
                <i class="bi bi-facebook px-4 fs-4"></i>
                <i class="bi bi-twitter px-4 fs-4"></i>
                <i class="bi bi-youtube px-4 fs-4"></i>
              </div>
              <div className="col-md-4">
                <p className="fw-bold">
                  <span>
                    <i class="bi bi-balloon-heart-fill text-danger px-2"></i>
                  </span>
                  Create by Rey
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

// Branchement de l'appli sur la root
ReactDOM.render(<App />, document.getElementById("root"));

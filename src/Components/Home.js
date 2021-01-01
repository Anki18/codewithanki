import aspmvc from '../img/ASPMVC.jpg';
function Home() {
    return (
        <div className="row">
            <div className="col s12 l6">
                <div className="card">
                    <div className="card-image">
                        <img src={aspmvc} alt="anki" />
                        <a href="" className="halfway-fab btn-floating pink pulse">
                            <i className="material-icons">favorite</i>
                        </a>
                    </div>
                    <div className="card-content">
                        <span className="card-title">ASP.Net MVC</span>
                        <p>The Model View Controller or the MVC improvement is an open-source structure ideally utilized for building most new versatile applications with to-the-point highlights.</p>
                    </div>
                    <div className="card-action">
                        <a href="">More details</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
import { Link } from "react-router-dom";
import aspmvc from "./img/ASPMVC2.png";
import articleData from "./Articles/articleData";

function Home() {
  return (
    <div className="row">
      {console.log(aspmvc)}
      {articleData.map((article) => {
        return (
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src={aspmvc} alt="anki" />
                <a href="" className="halfway-fab btn-floating pink pulse">
                  <i className="material-icons">favorite</i>
                </a>
              </div>

              <div className="card-content">
                <span className="card-title">{article.title}</span>
                <p>{article.content}</p>
              </div>
              <div className="card-action">
                {article.route && <Link to={article.route}>More details</Link>}
              </div>
            </div>
            <Link className="btn-floating btn-large waves-effect waves-light red" to="/addarticle">
              <i class="material-icons">add</i>
            </Link>

          </div>
        );
      })}
    </div>
  );
}

export default Home;

import "../App.css";
import 'bulma/css/bulma.min.css';

function Profileinfo() {
    return (
        

        <div className="tile is-ancestor">
  <div className="tile is-vertical is-parent">
    <div className="tile is-vertical is-10 is-child box notification is-danger">
      <p className="title">One</p>
      <figure className="image ">
            {/* <img src="/"> </img> */}
          </figure>
    </div>
    {/* <div className="tile is-child box">
      <p className="title">Two</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    </div> */}
  </div>
  <div className="tile is-parent">
    <div className="tile is-vertical is-12 is-child box notification is-danger">
      <p className="title">Three</p>
      <p>Addy:</p> <p>Email</p> <p>Contact #1</p>
       </div>
  </div>
</div>
        );
    }
    
    export default Profileinfo;
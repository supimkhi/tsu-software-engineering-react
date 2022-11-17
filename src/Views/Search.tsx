import "../App.css";
import 'bulma/css/bulma.min.css';

function Search() {
    return (

      
      // <div className="App">
      //   <div className="container">
      //     <div className="columns">
      //     <div className="column">
      //     <h1 className="title">
      //           Recent Changes
      //         </h1>
      //         </div>
      //     </div>
      //   </div>
      //   <div className="container2">
      //     <div className="columns is-centered">
      //       <div className="column is-half">
      //       <button className="button">
      //         Show more recent changes
      //       </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className="content container has-text-centered">
        <h1 className="title has-text-success">
          Profile 
        </h1>
          <h1 className="subtitle">
            what the
          </h1>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-20">
            <article className="tile is-child has-background-dark box">
              <h1 className="title is-underlined has-text-white"> Recent Changes </h1>
              
              <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores placeat cumque excepturi earum reprehenderit rerum consequuntur deserunt error, ratione sunt nisi tempora est beatae mollitia eaque ad inventore asperiores saepe?
              Voluptatibus assumenda suscipit modi explicabo et a nostrum vitae? Odio repellendus repellat neque modi vel possimus eum, dignissimos quaerat alias laborum ex magnam id consequuntur mollitia molestias. Temporibus, harum amet?
              Fuga voluptatem ipsum nam consequatur minus blanditiis soluta laborum excepturi, beatae, a, itaque aut ipsa repellendus. Nemo quasi amet quos, a vel ut iusto mollitia ullam minima, excepturi necessitatibus labore.</h1>
              <button>Show more recent changes </button>
            </article>
            {/* <article className="tile is-child box has-background-warning">
              <p className="title"> coding </p>
            </article>
            <article className="tile is-child box has-background-warning">
              <p className="title"> coding </p>
            </article> */}
          </div>
        </div>
        {/* <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box has-background-warning">
              <p className="title"> coding </p>
            </div>
          </div>
        </div> */}

      </div>



        
    );
}

export default Search;
import marvImage from './marvimage.jpg';
import './App.css';

function App() {
  return (
  //   <div className="App container">
  //       <div></div>
  //       <img src={marvImage} className="AppProfileImage" alt="profImage" />
  //       <h3 className="headerName">
  //         Marvin Kamwenji Murage
  //       </h3>
  //       <p className="professionName">
  //         Software Engineer and Quality Assurance
  //       </p>
  //       <p className="websiteName">
  //         marvinkamwenji.website
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //   </div>
  // );


  <div class="card" >
      <img class="card-img-top" src={marvImage} alt="Card cap" />

        <div class="card-body">
            <h5 class="card-title"> Marvin Kamwenji Murage</h5>
            <p class="card-text">Software Engineer and Quality Assurance</p>
            <p class="card-text-1">marvinkamwenji.website</p>
        </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
      </ul>

      <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
      </div>
</div>
  );
}

export default App;

import marvImage from './marvimage.jpg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (

  <div class="card rounded-2" >
      <img class="card-img-top" src={marvImage} alt="Card cap" />

        <div class="card-body">
            <h5 class="card-title"> Marvin Kamwenji Murage</h5>
            <p class="card-subtitle">Software Engineer and Quality Assurance</p>
            <p class="card-text">marvinkamwenji.website</p>
        </div>
       <div class="card-body">
        <div className="buttons">
          <button className="emailButton rounded-2"><FontAwesomeIcon icon="fa-regular fa-envelope" />Email</button>
          <button className="linkedInButton rounded-2"><i class="fab fa-twitter fa-lg"></i>LinkedIn</button>
        </div>
        
        <div>
          <h5 className="aboutme">About</h5>
          <p className="paragraphs">I am a highly motivated and passionate individual with skills and expertise in software development and Quality Assurance. 
            I care deeply about building high quality softwares and I'm excited to put my creativity and skills to 
            work to actively contribute towards creating innovative solutions. .</p>
        </div>

        <div>
          <h5 className="aboutme">Interests</h5>
          <p className="paragraphs">I have interests in robotics, artificial intelligence and blockchain. </p>
        </div>

      </div>

      <div className="card-footer">

        {/* Twitter  */}
        <i class="fab fa-facebook-f fa-lg"></i>

        <i class="bi bi-instagram"></i>

      </div>
</div>
  );
}

export default App;

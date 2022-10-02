import marvImage from './marvimage.jpg';
import './App.css';
import { SocialIcon } from 'react-social-icons';


function App() {

  return (
<div className="allbody">
  <div class="card rounded-2" >
      <img class="card-img-top" src={marvImage} alt="Card cap" />

        <div class="card-body">
            <h5 class="card-title"> Marvin Kamwenji Murage</h5>
            <p class="card-subtitle">Software Engineer and Quality Assurance</p>
            <p class="card-text"></p>
        </div>
       <div class="card-body">
        <div className="buttons">
          <a href="mailto:marvinkamwenjih@gmail.com">
            <button className="emailButton rounded-2"><SocialIcon network="email" style={{ height: 25, width: 25 }} />
                Email
            </button>
          </a>
         
         <a href="https://linkedin.com/in/marvin-kamwenji-1bb012197/">
            <button className="linkedInButton rounded-2"><SocialIcon network="linkedin" fgColor='white' style={{ height: 25, width: 25 }} />
            LinkedIn
            </button>
         </a>
          
        </div>
        
        <div>
          <h5 className="aboutme">About</h5>
          <p className="paragraphs">I am a highly motivated and passionate individual with skills and expertise in software development and Quality Assurance. 
            I care deeply about building high quality softwares and I'm excited to put my creativity and skills to 
            work to actively contribute towards creating innovative solutions. .</p>
        </div>

        <div>
          <h5 className="aboutme">Interests</h5>
          <p className="paragraphs">I have interests in robotics, artificial intelligence and computer networks. </p>
        </div>

      </div>

      <div className="card-footer">

      
        {/* Twitter  */}
        <SocialIcon className="TwitterFooter" url="https://twitter.com/MarvinKamwenji" fgColor='1A1B21' bgColor='#D8D8D8' />

        {/* LinkedIn */}
        <SocialIcon className="LinkedInFooter" url="https://linkedin.com/in/marvin-kamwenji-1bb012197/" fgColor='1A1B21' bgColor='#D8D8D8'/>

        {/* GITHUB */}

        <SocialIcon className="GithubFooter" url="https://github.com/Marvin-kamwenji" fgColor='1A1B21' bgColor='#D8D8D8'/>


        <i class="bi bi-instagram"></i>

      </div>
 </div>
</div>
  );
}

export default App;

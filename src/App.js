import logo from './logo.svg';
import './App.css';
import headerStyle from './Header';
import sqiLogo from './co.jpg'


function App() {
  return (
    <>
      <header style={headerStyle.header}>
          <div className='logoContainer'>
            <img className='logo' style={headerStyle.logo} src={sqiLogo} alt="" />
          </div>
              <div className='dropDown'>
   
                  <div className='about'>
                    <p>About</p>
                    <div className='drop'>
                    <p>Our story</p>
                    <p>Our Team</p>
                    <p>Campus Info</p>
                  </div>
                  </div>
                 
              
                <div className='about'>
                  <p>Programme</p>
                  <div className='drop'>
                    <p>National Innovation</p>
                    <p>Diploma</p>
                    <p>Professional Diploma</p>
                    <p>Progra</p>
                    <p>Executive Professional</p>
                    <p>Certificate</p>
                    <p>Programme</p>
                  </div>
                </div>
                <div  className='about'>
                  <p>Admissions</p>
                  <div className='drop'>
                    <p>Apply for a<br></br> Proggramme</p>
                    <p>Mode of study</p>
                    <p>Tuition</p>
                    <p>Frequently asked <br></br>questions</p>
                    
                  </div>
                </div>
                <div className='about'>
                  <p>E-Portal</p>
                  <div className='drop'>
                    <p>Student</p>
                    <p>Staff</p>
                  </div>
                </div>
                <div className='about'>
                  <p>SQI Schorlarships</p>
                 
                </div>
                <div className='about'>
                    <p>News</p>
                 
                </div>
              </div>
          </header>
         
          
    </>
  );
}

export default App;

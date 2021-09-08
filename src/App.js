import './App.css'
import github from './images/logos/github.png'
import instagram from './images/logos/instagram.png'
import {LogoLinkAndText} from './components/LogoLinkAndText'
import {HomePage} from './pages/HomePage.tsx'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div style={{fontFamily: "Snell Roundhand, cursive", fontWeight: "bold", fontSize: "50px", padding: "0"}}>
          Delaney Jo Coveno
        </div>
        <div> Portrait and Nature Photography </div>
      </header>
      <HomePage/>
      <footer className="app-footer2">
        <div >Create more than you consume</div>
        <br/>
        <LogoLinkAndText image={instagram} text="@dj.coveno" link="instagram link"></LogoLinkAndText>
        <br/>
        <LogoLinkAndText image={github} text="@djcoven" link="github link"></LogoLinkAndText>
      </footer>
      <footer className="app-footer">© 2021 by Delaney Coveno <br></br> Please contact me at djcoveno@gmail.com to create some photos together :)</footer>
    </div>

  );
}

export default App;

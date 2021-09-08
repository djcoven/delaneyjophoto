import './App.css'
import img from './images/maternity/IMG_7557.jpg'
import img2 from './images/nature/IMG_7064.jpg'
import github from './images/logos/github.png'
import instagram from './images/logos/instagram.png'
import { ClickablePhoto } from './components/ClickablePhoto'
import Grid from '@material-ui/core/Grid'
import {LogoLinkAndText} from './components/LogoLinkAndText'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div style={{fontFamily: "Snell Roundhand, cursive", fontWeight: "bold", fontSize: "50px", padding: "0"}}>
          Delaney Jo Coveno
        </div>
        <div> Portrait and Nature Photography </div>
      </header>
      <Grid container spacing={0}>
        <Grid item xs></Grid>
        <Grid item xs>
            <ClickablePhoto linkTo="somewhere" alt="propAlt" imageSrc={img} text="Portraiture"/>
        </Grid>
        <Grid item xs>
            <ClickablePhoto linkTo="somewhere" alt="propAlt" imageSrc={img2} text="Nature and Wildlife Shop"/>
        </Grid>
        <Grid item xs></Grid>

      </Grid>
      <footer className="app-footer2">
        <div>Create more than you consume</div>
        <LogoLinkAndText image={instagram} text="@dj.coveno" link="instagram link"></LogoLinkAndText>
        <br/>
        <LogoLinkAndText image={github} text="@djcoven" link="github link"></LogoLinkAndText>
      </footer>
      <footer className="app-footer">© 2021 by Delaney Coveno. The code for this site is on my GitHub: @djcoven. <br></br> Please contact me at djcoveno@gmail.com to create some photos together :)</footer>
    </div>

  );
}

export default App;

import './App.css'
import github from './images/logos/github.png'
import instagram from './images/logos/instagram.png'
import {LogoLinkAndText} from './components/LogoLinkAndText.tsx'
import { AppHeader } from './components/AppHeader.tsx'
import {HomePage} from './pages/HomePage.tsx'
import {PortraitPage} from './pages/PortraitPage.tsx'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <AppHeader/>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:portaitGallery" component={PortraitPage} />
      </Switch>

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

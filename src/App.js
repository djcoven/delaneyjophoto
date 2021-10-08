import './App.css'
import { AppHeader } from './components/AppHeader.tsx'
import { AppFooter } from './components/AppFooter.tsx'
import {HomePage} from './pages/HomePage.tsx'
import {PortraitPage} from './pages/PortraitPage.tsx'
import {MaternityPage, ChristmasTreeFamilyPage, BeethovenGotchaDayPage} from './pages/GalleryPageFactory.tsx'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <AppHeader/>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portraitGallery" component={PortraitPage} />
        <Route exact path="/maternity" component={MaternityPage} />
        <Route exact path="/christmasTreeFamily" component={ChristmasTreeFamilyPage} />
        <Route exact path="/beethovenGotchaDay" component={BeethovenGotchaDayPage} />


      </Switch>

      <AppFooter/>
    </div>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import img from './images/maternity/IMG_7557.jpg';
import img2 from './images/nature/IMG_7064.jpg';
import { ClickablePhoto } from './components/ClickablePhoto';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Delaney's Photo Website because Wordpress stinks!
        </p>
      </header>
      <Grid container spacing={0}>
        <Grid item xs></Grid>
        <Grid item xs justifyContent="center" direction="row">
            <ClickablePhoto linkTo="somewhere" alt="propAlt" imageSrc={img} text="Portraiture"/>
        </Grid>
        <Grid item xs>
            <ClickablePhoto linkTo="somewhere" alt="propAlt" imageSrc={img2} text="Nature and Wildlife Shop"/>
        </Grid>
        <Grid item xs></Grid>

      </Grid>
    </div>

  );
}

export default App;

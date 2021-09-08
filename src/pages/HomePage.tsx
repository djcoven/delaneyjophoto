import Grid from '@material-ui/core/Grid'
import img from '../images/maternity/IMG_7557.jpg'
import img2 from '../images/nature/IMG_7064.jpg'
import { ClickablePhoto } from '../components/ClickablePhoto'

export const HomePage = () : JSX.Element => {
return (
<>
    <Grid container spacing={0} justify="center" alignItems="center">
        <Grid item xs={2}></Grid>
        <Grid item xs>
            <ClickablePhoto linkTo="somewhere" alt="propAlt" imageSrc={img} text="Portraiture"/>
        </Grid>
        <Grid item xs>
            <ClickablePhoto linkTo="somewhere" alt="propAlt" imageSrc={img2} text="Nature and Wildlife Shop"/>
        </Grid>
        <Grid item xs={2}></Grid>
    </Grid>
</>

);

}
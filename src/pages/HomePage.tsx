import Grid from '@material-ui/core/Grid'
import img from '../images/maternity/image01.jpg'
import img2 from '../images/nature/IMG_7064.jpg'
import { ClickablePhoto } from '../components/ClickablePhoto'

export const HomePage = () : JSX.Element => {
return (
<>
    <Grid container spacing={0} alignItems="center">
        <Grid item sm={1}></Grid>
        <Grid item xs={6} sm={5} >
            <ClickablePhoto linkTo="portraitGallery" alt="propAlt" img={img} text="Portraiture"/>
        </Grid>
        <Grid item xs={6} sm={5} >
            <ClickablePhoto linkTo="printShop" alt="propAlt" img={img2} text="Print Shop"/>
        </Grid>
        <Grid item sm={1}></Grid>
    </Grid>
</>

);

}
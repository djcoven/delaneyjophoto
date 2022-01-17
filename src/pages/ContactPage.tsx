import { LogoLinkAndTextSmall } from '../components/LogoLinkAndTextSmall';
import github from '../images/logos/github.png'
import instagram from '../images/logos/instagram.png'
import email from '../images/logos/email.png'
import location from '../images/logos/location.png'

import {makeStyles} from "@material-ui/core/styles"
import { fabClasses } from '@mui/material';
import { TurnLeftTwoTone } from '@mui/icons-material';
import Grid from '@material-ui/core/Grid'
import { LocationCity } from '@material-ui/icons';



const useStyles = makeStyles({
    block : { 
        backgroundColor: "#D6E5D6",
        padding: "20px",
        margin: "10px",
        width: "320px",
        "@media (max-width: 400px)": {
            width: "auto"
        },
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    title: {
        fontFamily: 'tahoma',
        fontSize: 30,
        // color: "#7F9680",
        color: "black",
        textAlign: "left",
        paddingTop: "20px",
        paddingBottom: "20px",
        "@media (max-width: 400px)": {
            //fontSize: "18px",
        }
    },
    contact: {
        fontFamily: 'tahoma',
        fontSize: 22,
        // color: "#7F9680",
        textDecoration: "none",
        color: "black",
        textAlign: "left",
        paddingTop: "5px",
        paddingBottom: "5px",
        "@media (max-width: 400px)": {
            fontSize: "16px",
        }
    }
})

export const ContactPage = () : JSX.Element => {
    const classes = useStyles();

    return (
    <>
        <div className={classes.block}>
            <div className={classes.title}>Contact</div>
            <div className={classes.contact}>
                <LogoLinkAndTextSmall image={email} text="dj.coveno.insta@gmail.com" link="" 
                alt="alt"></LogoLinkAndTextSmall>
            </div>
            <div className={classes.contact}>
                <LogoLinkAndTextSmall image={location} text="Salem, MA 01970" link="https://www.google.com/maps/place/Salem,+MA/@42.5157007,-70.9172734,12z/data=!3m1!4b1!4m5!3m4!1s0x89e369646af856b7:0x81e0b8a2a5a55945!8m2!3d42.51954!4d-70.8967155" 
                alt="alt"></LogoLinkAndTextSmall>
            </div>
            <div className={classes.contact}>
                <LogoLinkAndTextSmall image={instagram} text="@dj.coveno" link="https://www.instagram.com/dj.coveno/" 
                alt="alt"></LogoLinkAndTextSmall>
            </div>
            <div className={classes.contact}>
                <LogoLinkAndTextSmall image={github} text="@djcoven" link="https://github.com/djcoven" 
                alt="alt"></LogoLinkAndTextSmall>
            </div>
        </div>        
    </>

);

}
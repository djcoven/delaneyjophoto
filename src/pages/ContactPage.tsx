import { LogoLinkAndText } from '../components/LogoLinkAndText';
import github from '../images/logos/github.png'
import instagram from '../images/logos/instagram.png'
import email from '../images/logos/email.png'
import {makeStyles} from "@material-ui/core/styles"
import { fabClasses } from '@mui/material';
import { TurnLeftTwoTone } from '@mui/icons-material';
import Grid from '@material-ui/core/Grid'



const useStyles = makeStyles({
    block : { 
        backgroundColor: "#D6E5D6",
        padding: "20px",
        margin: "10px",
        width: "300px",
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
        paddingBottom: "20px"
    },
    contact: {
        fontFamily: 'tahoma',
        fontSize: 22,
        // color: "#7F9680",
        color: "black",
        textAlign: "left",
        paddingTop: "5px",
        paddingBottom: "5px"
    }
})

export const ContactPage = () : JSX.Element => {
    const classes = useStyles();

    return (
    <>
        <div className={classes.block}>
            <div className={classes.title}>Contact</div>
            <div className={classes.contact}>
                <LogoLinkAndText image={email} text="dj.coveno.insta@gmail.com" link="/" 
                textStyle={{fontSize: 22}} imageStyle={{width: "29px"}} alt="alt"></LogoLinkAndText>
            </div>
            <div className={classes.contact}> Salem, MA 01970 </div>
            <div className={classes.contact}>
                <LogoLinkAndText image={instagram} text="@dj.coveno" link="https://www.instagram.com/dj.coveno/" 
                textStyle={{fontSize: 22}} imageStyle={{width: "29px"}} alt="alt"></LogoLinkAndText>
            </div>
            <div className={classes.contact}>
                <LogoLinkAndText image={github} text="@djcoven" link="https://github.com/djcoven" 
                textStyle={{fontSize: 22}} imageStyle={{width: "29px"}} alt="alt"></LogoLinkAndText>
            </div>
        </div>        
    </>

);

}
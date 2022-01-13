import React from 'react';
import { LogoLinkAndText } from './LogoLinkAndText';
import github from '../images/logos/github.png'
import instagram from '../images/logos/instagram.png'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    appFooter2: {
        color: "#5c705d",
        padding: "10px",
        backgroundColor: "#D6E5D6",
        height: "auto",
    },
    appFooter: {
        backgroundColor: "white",
        fontSize: "small",
    }
})

export const AppFooter = () : JSX.Element => {
    const classes = useStyles();
    return (   
    <div>  
        <footer className={classes.appFooter2}>
            <div >Create more than you consume</div>
            <br/>
            <LogoLinkAndText image={instagram} text="@dj.coveno" link="https://www.instagram.com/dj.coveno/" alt="alt"></LogoLinkAndText>
            <br/>
            <LogoLinkAndText image={github} text="@djcoven" link="https://github.com/djcoven" alt="alt"></LogoLinkAndText>
        </footer>
        <footer className={classes.appFooter}>© 2021 by Delaney Coveno :) <br></br>
        </footer>
    </div> 
    )
}
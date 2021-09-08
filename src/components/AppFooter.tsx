import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import { LogoLinkAndText } from './LogoLinkAndText';
import github from '../images/logos/github.png'
import instagram from '../images/logos/instagram.png'

const useStyles = makeStyles({

})

export const AppFooter = () : JSX.Element => {
    const classes = useStyles();
    return (   
    <div>  
        <footer className="app-footer2">
            <div >Create more than you consume</div>
            <br/>
            <LogoLinkAndText image={instagram} text="@dj.coveno" link="instagram link" alt="alt"></LogoLinkAndText>
            <br/>
            <LogoLinkAndText image={github} text="@djcoven" link="github link" alt="alt"></LogoLinkAndText>
        </footer>
        <footer className="app-footer">© 2021 by Delaney Coveno <br></br>
         Please contact me at djcoveno@gmail.com to create some photos together :)
        </footer>
    </div> 
    )
}
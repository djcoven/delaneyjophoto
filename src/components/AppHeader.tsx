import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import { Link } from 'react-router-dom'
import { AppMenu } from "./Menu"

type HeaderProps = {

}
const useStyles = makeStyles({
    heading : { 
        fontFamily: "Snell Roundhand, cursive",
        fontWeight: "bold",
        fontSize: "50px",
        padding: "0",
        "&:hover": {
            opacity: ".8"
        },
        "@media (max-width: 800px)": {
            paddingTop: "10px",
            fontSize: "20px",
          }
    },
})

export const AppHeader = (props: HeaderProps) : JSX.Element => {
    const classes = useStyles();
    return (      
    <header className="app-header">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className={classes.heading}>
                Delaney Jo Coveno
            </div>
        </Link>
        <div> Portrait and Nature Photography </div>
        <AppMenu></AppMenu>
    </header>
    )
}
import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import { Link } from 'react-router-dom'
import { AppMenu } from "./Menu"

type HeaderProps = {

}
const useStyles = makeStyles({
    appHeader : {
        backgroundColor: "#D6E5D6",
        height: "auto",
        padding: "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "5",
        color: "#7F9680",
      }, 
    title : { 
        fontFamily: "Snell Roundhand, cursive",
        fontWeight: "bold",
        fontSize: "40px",
        padding: "0",
        "&:hover": {
            opacity: ".8"
        },
        "@media (max-width: 400px)": {
            paddingTop: "20px",
            fontSize: "20px",
          }
    },
    subtitle: {
        paddingBottom: "5px",
        fontSize: "14px",
        "@media (max-width: 400px)": {
            // paddingTop: "20px",
            fontSize: "10px",
          }
    },
    menu : {
        backgroundColor: "#bed1be",
        width: "100%",
        color: "#7F9680",
        display: "flex",
        justifyContent: "space-around",
        fontWeight: "bold",
        "@media (max-width: 400px)": {
            fontSize: "11px",
          }
    },
    menuItem : {
        paddingTop: "5px",
        paddingBottom: "5px",
        height: "100%",
        width: "20%",
        "&:hover" : {
            opacity: 0.8,
            backgroundColor: "#acc2ac"
        },
        "@media (max-width: 400px)": {
            width: "auto",
            padding: "5px",
        }
    }
})

export const AppHeader = (props: HeaderProps) : JSX.Element => {
    const classes = useStyles();
    return (      
    <header className={classes.appHeader}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className={classes.title}>
                Delaney Jo Coveno
            </div>
            <div className={classes.subtitle}> PHOTOGRAPHER </div>
        </Link>
        <div className={classes.menu}>
            <span className={classes.menuItem}>
             <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                 Home
             </Link>
             </span>
            <span className={classes.menuItem}>
             <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                 About Me
             </Link>
             </span>
             <span className={classes.menuItem}>

             <Link to="/portraitGallery" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                 Portraits
             </Link>
             </span>

             <span className={classes.menuItem}>

             <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                 Print Shop
             </Link>
             </span>

             <span className={classes.menuItem}>

             <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                 Contact
             </Link>
             </span>

        </div>
    </header>
    )
}
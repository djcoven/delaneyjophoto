import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import { Link } from 'react-router-dom'

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
            fontSize: "10px",
          }
    },
    menu : {
        backgroundColor: "#bed1be",
        width: "100%",
        height: "40px",
        color: "#7F9680",
        display: "flex",
        justifyContent: "space-around",
        fontWeight: "bold",
        "@media (max-width: 400px)": {
            height: "30px",
            fontSize: "11px",
          }
    },
    menuItem : {
        color: "inherit",
        textDecoration: "inherit",
        display: "block",    
        position: "relative",    
        zIndex: 1,
        width: "20%",
        padding: "10px 15px 5px 15px",
        "&:hover" : {
            opacity: 0.8,
            backgroundColor: "#acc2ac"
        },
        "@media (max-width: 400px)": {
            width: "auto",
            padding: "8px 5px 0px 5px",
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
             <Link to="/" className={classes.menuItem}>
                 Home
             </Link>
             <Link to="/about" className={classes.menuItem}>
                 About Me
             </Link>
             <Link to="/portraitGallery" className={classes.menuItem}>
                 Portraits
             </Link>
             <Link to="/printShop" className={classes.menuItem}>
                 Print Shop
             </Link>
             <Link to="/contact" className={classes.menuItem}>
                 Contact
             </Link>
        </div>
    </header>
    )
}
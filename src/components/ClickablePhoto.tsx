import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import { Link } from 'react-router-dom'


type PhotoProps = {
    img: string,
    linkTo: string,
    alt: string,
    text?: string
}
const useStyles = makeStyles({
    imageContainer: {
        height: "75vh",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 20,
        maxWidth: "100%",
        "&:hover": { 
            opacity: 0.8,
        },
        "@media (max-width: 800px)": {
            //backgroundColor: "red",
            height: "40vh",
            margin: 0,
          }
    },
    textOverlay: {
        position: 'relative',
        top: '250px',
        paddingTop: 20,
        paddingBottom: 20,
        fontFamily: 'tahoma',
        fontSize: 30,
        backgroundColor: '#D6E5D6',
        opacity: .5,
        "@media (max-width: 800px)": {
            fontSize: 20,
            top: '120px'
          }
    },

    //TODO: conditional styling for mobile??
    // @media screen and (max-width: 40.5em) {
    // }
})


const clickFunction = () => {
console.log("hi");
}
export const ClickablePhoto = (props: PhotoProps) : JSX.Element => {
    const classes = useStyles();
    return (
        <Link to={props.linkTo} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div className={classes.imageContainer} 
            style={{backgroundImage: `url(${props.img})`}}
            onClick={clickFunction}>
            {((props.text) !== undefined) ?
            <div className={classes.textOverlay}>{props.text}</div> : null}
        </div>
        </Link>
    )
}
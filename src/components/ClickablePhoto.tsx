import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import { Link } from 'react-router-dom'


type PhotoProps = {
    imageSrc: string,
    linkTo: string,
    alt: string,
    text?: string
}
const useStyles = makeStyles({
    imageContainer: {
        height: "600px",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 20,
        maxWidth: "30vw",
        "&:hover": { 
            opacity: 0.8,
        },
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
            style={{backgroundImage: `url(${props.imageSrc})`}}
            onClick={clickFunction}>
            {((props.text) !== undefined) ?
            <div className={classes.textOverlay}>{props.text}</div> : null}
        </div>
        </Link>
    )
}
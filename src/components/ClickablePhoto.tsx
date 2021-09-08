import React from 'react';
import {makeStyles} from "@material-ui/core/styles"

type PhotoProps = {
    imageSrc: string,
    linkTo: string,
    alt: string,
    text?: string
}
const useStyles = makeStyles({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        //display: 'flex',
        maxWidth: '400px',
        //width: '50%',
        position: 'relative',
    },
    image: {
        height: "auto",
        width: "400px",
        padding: 15,
        paddingTop: 0,
        "&:hover": { 
            opacity: 0.8,
        },
    },
    textOverlay: {
        zIndex: 10,
        position: 'relative',
        top: '300px',
        paddingTop: 20,
        paddingBottom: 20,
        left: '15px',
        fontFamily: 'tahoma',
        fontSize: 30,
        //color: '#4D5656',
        backgroundColor: '#D6E5D6',
        opacity: .5,
        width: '400px',
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
    return (<span className="imageContainer">
        {((props.text) !== null) ? 
        <div className={classes.textOverlay}>{props.text}</div>
        : null}
        <img src={props.imageSrc} className={classes.image} alt={props.alt} onClick={clickFunction}/>
</span>)
}
import React from 'react';
import {makeStyles} from "@material-ui/core/styles"

type LogoProps = {
    image: string,
    link: string,
    text?: string,
    alt: string
}
const useStyles = makeStyles({
    container: {
        //padding: "2px",
        width: "100px",
        //alignItems: "center",
        display: "inline-block"
    },
    image: {
        height: "auto",
        width: "18px",
        paddingRight: "5px",
        verticalAlign: "middle",
        float: "left",
        "&:hover": { 
            opacity: 0.8,
        },
    },
    text: {
        //width: "100%",
        //textAlign: "justify",
        float: "left",
        fontFamily: 'tahoma',
        fontSize: "small",
        "&:hover": { 
            opacity: 0.8,
        },
    },
})

const clickFunction = () => {
    //TODO go to link
console.log("hi");
}
export const LogoLinkAndText = (props: LogoProps) : JSX.Element => {
    const classes = useStyles();
    return (<span className={classes.container} onClick={clickFunction}>
        <img src={props.image} className={classes.image} alt={props.alt} onClick={clickFunction}/>
        <span className={classes.text}>{props.text}</span>
</span>)
}
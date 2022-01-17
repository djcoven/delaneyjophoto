import React, { CSSProperties } from 'react';
import {makeStyles} from "@material-ui/core/styles"

type LogoProps = {
    image: string,
    link: string,
    text?: string,
    alt: string,
}
const useStyles = makeStyles({
    container: {
        padding: "2px",
        width: "auto",
        alignItems: "center",
        display: "inline-block",
    },
    image: {
        //zIndex: -1,
        height: "auto",
        width: "30px",
        paddingRight: "5px",
        //verticalAlign: "middle",
        float: "left",
        "&:hover": { 
            opacity: 0.8,
        },
        "@media (max-width: 400px)": {
            width: "22px",
        }

    },
    text: {
        width: "auto",
        textAlign: "justify",
        float: "left",
        fontFamily: 'tahoma',
        textDecoration: "none",

        // fontSize: "small",
        "&:hover": { 
            opacity: 0.8,
        },
        "@media (max-width: 400px)": {
            fontSize: "16px",
        }
    },
})

export const LogoLinkAndTextSmall = (props: LogoProps) : JSX.Element => {
    const classes = useStyles();
    return (<a href={props.link} target='_blank' style={{color:'inherit'}}><span className={classes.container}>
        <img src={props.image} className={classes.image} alt={props.alt}/>
        <span className={classes.text}>{props.text}</span>
</span></a>)
}
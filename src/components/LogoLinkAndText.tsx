import React, { CSSProperties } from 'react';
import {makeStyles} from "@material-ui/core/styles"

type LogoProps = {
    image: string,
    link: string,
    text?: string,
    alt: string,
    textStyle?: CSSProperties,
    imageStyle?: CSSProperties
}
const useStyles = makeStyles({
    container: {
        //padding: "2px",
        width: "auto",
        //alignItems: "center",
        display: "inline-block",
    },
    image: {
        zIndex: -1,
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
        "@media (max-width: 400px)": {
            fontSize: "12px",
        }
    },
})

export const LogoLinkAndText = (props: LogoProps) : JSX.Element => {
    const classes = useStyles();
    return (<a href={props.link} target='_blank' style={{color:'inherit'}}><span className={classes.container}>
        <img src={props.image} className={classes.image} style={props.imageStyle} alt={props.alt}/>
        <span className={classes.text} style={props.textStyle}>{props.text}</span>
</span></a>)
}
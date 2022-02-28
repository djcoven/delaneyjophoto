import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    block : { 
        backgroundColor: "#D6E5D6",
        padding: "20px",
        margin: "10px",
        width: "320px",
        "@media (max-width: 400px)": {
            width: "auto"
        },
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    title: {
        fontFamily: 'tahoma',
        fontSize: 30,
        // color: "#7F9680",
        color: "black",
        textAlign: "left",
        paddingTop: "20px",
        paddingBottom: "20px",
        "@media (max-width: 400px)": {
            //fontSize: "18px",
        }
    },
})

export const PrintShop = () : JSX.Element => {
    const classes = useStyles();

    return (
    <>
        <div className={classes.block}>
            Coming Soon
        </div>        
    </>

);

}
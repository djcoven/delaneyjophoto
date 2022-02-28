import {makeStyles} from "@material-ui/core/styles"
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { ImageListItem } from '@mui/material';
import { galleryItem } from "../pages/GalleryFunctions";

type itemProps = {
    item: galleryItem
}

export const ClickableImageListItem = (props: itemProps) : JSX.Element => {
    const item = props.item;
    const [fullScreen, setFullScreen] = useState(false);


    return (
        <ImageListItem onClick={()=>{setFullScreen(!fullScreen)}}
            style={fullScreen ? {width:'100vh', height:'100vw'} : {}}
         key={item.img} rows={4} cols={item.wide ? 2 : 1}>
        <img src={item.img} alt={item.alt}/>
        </ImageListItem>
    )
}
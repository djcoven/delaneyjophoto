import { ImageList, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom'

export interface galleryItem {
    img: string,
    alt: string,
    link?: string,
    wide?: boolean
}

export function mapGalleryItemToImageListItem(item: galleryItem) : JSX.Element {
    return <ImageListItem component={Link}
            to={item.link !== undefined ? item.link : ""}
             key={item.img} rows={4} cols={item.wide ? 2 : 1}>
            <img src={item.img} alt={item.alt}/>
            </ImageListItem>
}

export function createGallery(galleryItems : JSX.Element[]) : JSX.Element {
    return(
    <>
        <ImageList variant="masonry" cols={3}>
            {galleryItems}
        </ImageList>
    </>)
}

export function createGallery2(galleryItems : galleryItem[]) : JSX.Element {
    const imageListItems : JSX.Element[] = galleryItems.map((item : galleryItem) => 
        mapGalleryItemToImageListItem(item)
    );

    return createGallery(imageListItems)
}
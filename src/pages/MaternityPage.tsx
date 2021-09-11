import {ImageList} from '@material-ui/core'
import { galleryItem, mapGalleryItemToImageListItem } from './GalleryFunctions'
import { images } from '../images/maternity/images'

export const MaternityPage = () : JSX.Element => {

    const galleryItems : JSX.Element[] = images.map((item : galleryItem) => 
        mapGalleryItemToImageListItem(item)
    );

    return (
    <>
        <ImageList rowHeight={160} cols={3}>
            {galleryItems}
        </ImageList>
    </>
    )
}
import {ImageList} from '@material-ui/core'
import { galleryItem, mapGalleryItemToImageListItem } from './GalleryFunctions'


import maternity from '../images/maternity/image01.jpg'
import christmasTreeFamily from '../images/christmas tree family/image01.jpg'
import img3 from '../images/artists bluff/IMG_1283.jpg'
import img4 from '../images/otto/IMG_1646.jpg'
import img5 from '../images/maddie cats/IMG_9375.jpg'
import img6 from '../images/beethoven/IMG_1769.jpg'
import img7 from '../images/christmas dogs/IMG_9435.jpg'

/// NEW IDEA: make a config file where can do imports, make gallery  list, manually set WIDE where needed,
/// manually change order of items on the page easily, then cleanly loop through on the page 

export const PortraitPage = () : JSX.Element => {

    //PATTERNS: VW, WV, VVV
    const g1 : galleryItem = {img: maternity, alt:"maternity", link: "maternity" }
    const g2: galleryItem = {img: christmasTreeFamily, alt: "christmas tree family", link: "christmasTreeFamily", wide: true}
    const g3: galleryItem = {img: img6, alt: "alt", link: ""}
    const g4: galleryItem = {img: img3, alt: "alt", link: ""}
    const g5: galleryItem = {img: img5, alt: "alt", link: ""}
    const g6: galleryItem = {img: img4, alt: "alt", link: "", wide: true}
    const g7: galleryItem = {img: img7, alt: "alt", link: ""}

    const gallery : galleryItem[] = [ g1, g2, g3, g4, g5, g6, g7]

    const galleryItems : JSX.Element[] = gallery.map((item) => 
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
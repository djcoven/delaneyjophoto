import {ImageList} from '@mui/material'
import { galleryItem, mapGalleryItemToImageListItem } from './GalleryFunctions'

import maternity from '../images/maternity/image01.jpg'
import christmasTreeFamily from '../images/christmas tree family/image01.jpg'
import img3 from '../images/artists bluff/IMG_1283.jpg'
import otto from '../images/otto/image3.jpg'
import kia from '../images/maddie cats/image1.jpg'
import beethoven from '../images/beethoven/image06.jpg'
import img7 from '../images/christmas dogs/IMG_9435.jpg'
import finnFall from '../images/finns fall photoshoot/image07.jpg'
import engaged from '../images/caleb abby engagement/image2.jpg'

/// NEW IDEA: make a config file where can do imports, make gallery  list, manually set WIDE where needed,
/// manually change order of items on the page easily, then cleanly loop through on the page 

export const PortraitPage = () : JSX.Element => {

    //PATTERNS: VW, WV, VVV
    const g1 : galleryItem = {img: maternity, alt:"maternity", link: "maternity" }
    const g2: galleryItem = {img: christmasTreeFamily, alt: "christmas tree family", link: "christmasTreeFamily", wide: true}
    const g3: galleryItem = {img: beethoven, alt: "alt", link: "beethovenGotchaDay"}
    const g4: galleryItem = {img: img3, alt: "alt", link: ""}
    const g5: galleryItem = {img: kia, alt: "kia the cat", link: "cats"}
    const g6: galleryItem = {img: otto, alt: "alt", link: "otto", wide: true}
    const g7: galleryItem = {img: img7, alt: "alt", link: ""}
    const g8: galleryItem = {img: finnFall, alt: "finnFall", link: "finnsFallPhotoshoot", wide: true}
    const g9: galleryItem = {img: engaged, alt: "engaged", link: "calebAbbyEngagement"}



    const gallery : galleryItem[] = [ g1, g3, g4, g9, g5, g2, g8, g6, g7]

    const galleryItems : JSX.Element[] = gallery.map((item) => 
        mapGalleryItemToImageListItem(item)

  );

    return (
    <>
        <ImageList variant="masonry" cols={3}>
            {galleryItems}
        </ImageList>
    </>
    )
}
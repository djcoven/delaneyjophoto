import {ImageList, ImageListItem} from '@material-ui/core'
import { Link } from 'react-router-dom'
import maternity from '../images/maternity/IMG_7557.jpg'
import img2 from '../images/christmas tree family/IMG_9378.jpg'
import img3 from '../images/artists bluff/IMG_1283.jpg'
import img4 from '../images/otto/IMG_1646.jpg'
import img5 from '../images/maddie cats/IMG_9375.jpg'
import img6 from '../images/beethoven/IMG_1769.jpg'
import img7 from '../images/christmas dogs/IMG_9435.jpg'

interface galleryItem {
    img: string,
    alt: string,
    link: string,
    wide?: boolean
}

/// NEW IDEA: make a config file where can do imports, make gallery  list, manually set WIDE where needed,
/// manually change order of items on the page easily, then cleanly loop through on the page 

export const PortraitPage = () : JSX.Element => {

    //PATTERNS: VW, WV, VVV
    const g1 : galleryItem = {img: maternity, alt:"maternity", link: "maternity" }
    const g2: galleryItem = {img: img2, alt: "christmas tree family", link: "christmas tree family", wide: true}
    const g3: galleryItem = {img: img6, alt: "alt", link: ""}
    const g4: galleryItem = {img: img3, alt: "alt", link: ""}
    const g5: galleryItem = {img: img5, alt: "alt", link: ""}
    const g6: galleryItem = {img: img4, alt: "alt", link: "", wide: true}
    const g7: galleryItem = {img: img7, alt: "alt", link: ""}

    const gallery : galleryItem[] = [ g1, g2, g3, g4, g5, g6, g7]

    const galleryItems : JSX.Element[] = gallery.map((item) => 
        <ImageListItem component={Link} to={item.link} key={item.img} rows={4} cols={item.wide ? 2 : 1}>
            <img src={item.img} alt={item.alt}/>
        </ImageListItem>

  );

    return (
    <>
        <ImageList rowHeight={160} cols={3}>
            {galleryItems}
        </ImageList>
    </>
    )
}
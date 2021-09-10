import {ImageList, ImageListItem} from '@material-ui/core'
import { Link } from 'react-router-dom'
import maternity from '../images/maternity/IMG_7557.jpg'

interface galleryItem {
    img: string,
    alt: string,
    link: string,
    wide?: boolean
}

export const MaternityPage = () : JSX.Element => {

    //PATTERNS: VW, WV, VVV
    const g1 : galleryItem = {img: maternity, alt:"maternity", link: "maternity" }

    const gallery : galleryItem[] = [ g1 ]

    const galleryItems : JSX.Element[] = gallery.map((item) => 
        <ImageListItem component={Link} to={item.link} key={item.img} rows={4} cols={item.wide ? 2 : 1}>
            <img src={item.img} alt={item.alt}/>
        </ImageListItem>

  );

    return (
    <>
    <div>on the maternity page!</div>
        <ImageList rowHeight={160} cols={3}>
            {galleryItems}
        </ImageList>
    </>
    )
}
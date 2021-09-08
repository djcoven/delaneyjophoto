import {ImageList, ImageListItem} from '@material-ui/core'
import { ClickablePhoto } from '../components/ClickablePhoto';
import img from '../images/maternity/IMG_7557.jpg'
import img2 from '../images/christmas tree family/IMG_9378.jpg'
import img3 from '../images/artists bluff/IMG_1283.jpg'
import img4 from '../images/otto/IMG_1646.jpg'
import img5 from '../images/maddie cats/IMG_9375.jpg'
import img6 from '../images/beethoven/IMG_1769.jpg'
import img7 from '../images/christmas dogs/IMG_9435.jpg'


// import img2 from '../images/nature/IMG_7064.jpg'
// import { ClickablePhoto } from '../components/ClickablePhoto'

export const PortraitPage = () : JSX.Element => {
return (
<>
        {/* <ImageList rowHeight={160} className={classes.imageList} cols={3}>
  {itemData.map((item) => (
    <ImageListItem key={item.img} cols={item.cols || 1}>
      <img src={item.img} alt={item.title} />
    </ImageListItem>
  ))}
</ImageList> */}
    <ImageList rowHeight={160} cols={3}>
        <ImageListItem key={img} rows={4}>
            <img src={img} width={"fill"} height={"fill"} alt={"blah"}/>
        </ImageListItem>
        <ImageListItem key={img} cols={2} rows={4}>
            <img src={img2} alt={"blah"}/>
        </ImageListItem>
        <ImageListItem key={img} rows={4}>
            <img src={img6} alt={"blah"}/>
        </ImageListItem>
        <ImageListItem key={img} rows={4}>
            <img src={img3} alt={"blah"}/>
        </ImageListItem>
        <ImageListItem key={img} rows={4}>
            <img src={img5} alt={"blah"}/>
        </ImageListItem>
        <ImageListItem key={img} rows={4} cols={2}>
            <img src={img4} alt={"blah"}/>
        </ImageListItem>
        <ImageListItem key={img} rows={4}>
            <img src={img7} alt={"blah"}/>
        </ImageListItem>
    </ImageList>

</>

);

}
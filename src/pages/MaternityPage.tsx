import { createGallery2 } from './GalleryFunctions'
import { maternityImages } from '../images/maternity/images'
// import { images } from '../images/christmas tree family/images'


export const MaternityPage = () : JSX.Element => {
    return (
        createGallery2(maternityImages)
    )
}

export const ChristmasTreeFamilyPage = () : JSX.Element => {
    return (
        createGallery2(maternityImages)
    )
}

// export function createGalleryPage(imageFolderName : string) : JSX.Element {
//     let imagesPath : string = '../images' + imageFolderName + 'images'
//     import {images} from imagesPath
//         return (
//             createGallery2(imageFolderName)
//         )
// }
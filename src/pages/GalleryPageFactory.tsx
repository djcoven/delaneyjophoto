import { createGallery2 } from './GalleryFunctions'

import { images as maternityImages } from '../images/maternity/images'
import { images as christmasTreeFamilyImages } from '../images/christmas tree family/images'
import { images as beethovenGotchaImages } from '../images/beethoven/images'

export const MaternityPage = () : JSX.Element => {
    return (
        createGallery2(maternityImages)
    )
}

export const ChristmasTreeFamilyPage = () : JSX.Element => {
    return (
        createGallery2(christmasTreeFamilyImages)
    )
}

export const BeethovenGotchaDayPage = () : JSX.Element => {
    return (
        createGallery2(beethovenGotchaImages)
    )
}
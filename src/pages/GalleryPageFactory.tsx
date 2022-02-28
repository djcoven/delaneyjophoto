import { createGallery2 } from './GalleryFunctions'

import { images as maternityImages } from '../images/maternity/images'
import { images as christmasTreeFamilyImages } from '../images/christmas tree family/images'
import { images as beethovenGotchaImages } from '../images/beethoven/images'
import { images as finnsFallPhotoshootImages } from '../images/finns fall photoshoot/images'
import { images as calebAbbyEngagementImages } from '../images/caleb abby engagement/images'
import { images as ottoImages } from '../images/otto/images'


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

export const FinnsFallPhotoshootPage = () : JSX.Element => {
    return (
        createGallery2(finnsFallPhotoshootImages)
    )
}

export const CalebAbbyEngagement  = () : JSX.Element => {
    return (
        createGallery2(calebAbbyEngagementImages)
    )
}

export const Otto  = () : JSX.Element => {
    return (
        createGallery2(ottoImages)
    )
}
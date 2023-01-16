import arm from './arm.json'
import ru from './ru.json'
import en from './en.json'
import flagArm  from '../../Asset/icons/flagArm.png'
import flagRu  from '../../Asset/icons/flagRu.png'
import flagEn  from '../../Asset/icons/flagEn.png'


type MenuItemType = {
  title : string
  path : string
  cName : string
}
type NavMenuItemsNameType = {
  left: Array<string>
  right: Array<string>
}

type ContactType = {
  title : string
  alt : string
  id : string
}

type AuthorInfoType =  {
  author : string
  name : string
  mail : string
  mailAddress : string
  phone : string
  phoneNumber : string
  contact : string
}

type GalleryTextInfoType = {
  1:string
  2:string
  3:string
  4:string
  5:string
  6:string
  7:string
  8:string
  9:string
  10:string
  11:string
  12:string
  13:string
  14:string
  15:string
  16:string
}

export type DictionaryListType = {
  menuItems : Array<MenuItemType>
  homeTitle : string
  navMenuItemsName : NavMenuItemsNameType
  contents : Array<ContactType>
  contentsParagraph : string
  authorInfo : AuthorInfoType
  galleryParagraph : string
  galeryInfoParagraph : string
  galleryTextInfo  : GalleryTextInfoType
}

export type DictionaryListLanguageType = {
  arm : DictionaryListType 
  ru : DictionaryListType
  en : DictionaryListType
}

export const dictionaryList:DictionaryListLanguageType = { arm, ru, en }

export type LanguageOptionsType = {
  arm : string
  en : string
  ru : string
}
export const languageOptions:LanguageOptionsType = {
  arm :flagArm,  
  en:flagEn ,
  ru:flagRu,
};
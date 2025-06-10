import type {
  AnimalItem,
  ValidationSubscribeToLettersSchemaType,
  ValidationContactUsSchemaType,
} from './types'

export const DOG_COLLARS: AnimalItem[] = [
  {
    id: 1,
    url: '/images/il_340.webp',
    description: 'Leather Dog Collars with Gold Name Tag',
    category: 'Luxe Animal Spa',
    price: 'CA $325.00',
  },
  {
    id: 2,
    url: '/images/il_158.webp',
    description: 'Pink & White Diamond Encrusted Dog Collar',
    category: 'Luxe Animal Spa',
    price: 'CA $1225.00',
  },
  {
    id: 3,
    url: '/images/il_1588.webp',
    description: 'Large 3000kt Silver Diamond Collar',
    category: 'Luxe Animal Spa',
    price: 'CA $1500.00',
  },
]

export const ANIMAL_CARRY: AnimalItem[] = [
  {
    id: 1,
    url: '/images/3304288.webp',
    description: 'Leather Dog Collars with Gold Name Tag',
    category: 'Luxe Animal Spa',
    price: 'CA $125.00',
  },
  {
    id: 2,
    url: '/images/fa017fc.webp',
    description: 'Pink & White Diamond Encrusted Dog Collar',
    category: 'Luxe Animal Spa',
    price: 'CA $135.00',
  },
  {
    id: 3,
    url: '/images/Pet-Carrier.webp',
    description: 'Large 3000kt Silver Diamond Collar',
    category: 'Luxe Animal Spa',
    price: 'CA $95.00',
  },
]

export const SUBSCRIBE_TO_LETTER_DEFAULT_VALUES: ValidationSubscribeToLettersSchemaType =
  {
    email: '',
  }

export const CONTACT_US_DEFAULT_VALUES: ValidationContactUsSchemaType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: '',
}

// export const commonTheme = {
//   dimensions: {
//     laptop: 1024,
//   },
//   colors: {
//     WHITE: Colors.WHITE,
//     BLACK: Colors.BLACK,
//     CHARCOAL: Colors.CHARCOAL,
//     GRAY: Colors.GRAY,
//     BRONZED: Colors.BRONZED,
//     ROSEY: Colors.ROSEY,
//     BEIGE: Colors.BEIGE,
//     PINK: Colors.PINK,
//     LIGHT_PINK: Colors.LIGHT_PINK,
//     CRIMSON: Colors.CRIMSON,
//   },
//   fontWeights: {
//     xxs: 200,
//     xs: 300,
//     s: 400,
//     m: 500,
//     l: 600,
//     xl: 700,
//   },
//   fontSizes: {
//     xxs: 14,
//     xs: 16,
//     ss: 22,
//     s: 26,
//     m: 30,
//     mm: 32,
//     mmm: 40,
//     l: 63,
//     ll: 66,
//     xl: 70,
//   },
//   fontFamilies: {
//     cormorant: "'Cormorant', sans-serif",
//     cinzelDecorative: "'Cinzel Decorative', sans-serif",
//     tangerine: "'Tangerine', sans-serif",
//   },
//   width: {
//     xxs: 24,
//     xs: 72,
//     s: 100,
//     ss: 128,
//     ssss: 180,
//     ssm: 200,
//     ssmm: 250,
//     sm: 332,
//     smm: 366,
//     smmm: 400,
//     sss: 478,
//     m: 498,
//     mm: 751,
//     l: 1280,
//   },
//   height: {
//     xxs: 12,
//     xss: 24,
//     xs: 52,
//     ss: 58,
//     sm: 80,
//     s: 110,
//     m: 330,
//     l: 420,
//     xl: 484,
//   },
//   margins: {
//     xxxs: 0,
//     xxs: 15,
//     xs: 25,
//     s: 50,
//   },
//   paddings: {
//     xxxs: 0,
//     xxs: 8,
//     xs: 25,
//   },
//   borders: {
//     xxs: 1,
//     xs: 4,
//     s: 6,
//   },
//   borderRadiuses: {
//     s: 8,
//     m: 30,
//     l: 50,
//   },
//   opacities: {
//     s: 0.2,
//     m: 0.5,
//     l: 1,
//   },
//   zIndexes: {
//     s: 1000,
//     m: 2000,
//   },
//   top: {
//     s: 100,
//   },
// }

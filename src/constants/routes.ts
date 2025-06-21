import {
  FacebookIcon,
  InstagramIcon,
  NetworkIcon,
  SnapchatIcon,
  TwitterIcon,
} from '@/components/icons'

export const Route = {
  home: '/',
  info: '/info',
  spaServices: '/spa-services',
  bookAppointment: '/book-appointment',
  blog: '/blog',
  aboutUs: '/about-us',
  contactUs: '/contact-us',
}

export const ROUTES_WITH_LABEL = [
  { href: Route.home, label: 'header.home' },
  { href: Route.info, label: 'header.info' },
  { href: Route.spaServices, label: 'header.spaServices' },
  { href: Route.bookAppointment, label: 'header.bookAppointment' },
  { href: Route.blog, label: 'header.blog' },
  { href: Route.aboutUs, label: 'header.aboutUs' },
  { href: Route.contactUs, label: 'header.contactUs' },
]

export const NAVIGATION_LINKS = {
  left: [
    { labelKey: 'footer.blog', href: Route.blog },
    { labelKey: 'footer.cancellations', href: Route.home },
    { labelKey: 'footer.trackYourAnimal', href: Route.home },
    { labelKey: 'footer.luxesAnnualSpaDay', href: Route.home },
    { labelKey: 'footer.paymentOptions', href: Route.home },
  ],
  right: [
    { labelKey: 'footer.home', href: Route.home },
    { labelKey: 'footer.aboutUs', href: Route.aboutUs },
    { labelKey: 'footer.contactUs', href: Route.contactUs },
    { labelKey: 'footer.faqs', href: Route.home },
    { labelKey: 'footer.helpWithNavigation', href: Route.home },
  ],
  cookies: [
    { labelKey: 'footer.cookiePolicy', href: Route.home },
    { labelKey: 'footer.cookiesSettings', href: Route.home },
  ],
  privacy: [
    { labelKey: 'footer.terms', href: Route.home },
    { labelKey: 'footer.privacy', href: Route.home },
    { labelKey: 'footer.security', href: Route.home },
  ],
}

export const NETWORK_LINKS = [
  { Icon: InstagramIcon, href: 'https://instagram.com' },
  { Icon: FacebookIcon, href: 'https://facebook.com' },
  { Icon: NetworkIcon, href: 'https://linkedin.com' },
  { Icon: TwitterIcon, href: 'https://twitter.com' },
  { Icon: SnapchatIcon, href: 'https://snapchat.com' },
]

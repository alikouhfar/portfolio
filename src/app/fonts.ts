import localFont from 'next/font/local'

export const iranYekan = localFont({
  src: [
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-UltraLight.woff2', weight: '200', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-Light.woff2', weight: '300', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-DemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-iran-yekan',
  display: 'swap',
})

export const outfit = localFont({
  src: [
    { path: '../assets/fonts/outfit/Outfit-Thin.ttf', weight: '100', style: 'normal' },
    { path: '../assets/fonts/outfit/Outfit-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '../assets/fonts/outfit/Outfit-Light.ttf', weight: '300', style: 'normal' },
    { path: '../assets/fonts/outfit/Outfit-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../assets/fonts/outfit/Outfit-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../assets/fonts/outfit/Outfit-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../assets/fonts/outfit/Outfit-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../assets/fonts/outfit/Outfit-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: '../assets/fonts/outfit/Outfit-Black.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-outfit',
  display: 'swap',
})

export const spaceGrotesk = localFont({
  src: [
    { path: '../assets/fonts/space-grotesk/SpaceGrotesk-Light.ttf', weight: '300', style: 'normal' },
    { path: '../assets/fonts/space-grotesk/SpaceGrotesk-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../assets/fonts/space-grotesk/SpaceGrotesk-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../assets/fonts/space-grotesk/SpaceGrotesk-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../assets/fonts/space-grotesk/SpaceGrotesk-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-space-grotesk',
  display: 'swap',
})

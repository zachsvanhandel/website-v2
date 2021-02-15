import { css } from "styled-components"

import MontserratBoldWOFF from "../assets/fonts/Montserrat/Montserrat-Bold.woff"
import MontserratBoldWOFF2 from "../assets/fonts/Montserrat/Montserrat-Bold.woff2"
import MontserratBoldItalicWOFF from "../assets/fonts/Montserrat/Montserrat-BoldItalic.woff"
import MontserratBoldItalicWOFF2 from "../assets/fonts/Montserrat/Montserrat-BoldItalic.woff2"

import OpenSansRegularWOFF from "../assets/fonts/OpenSans/OpenSans-Regular.woff"
import OpenSansRegularWOFF2 from "../assets/fonts/OpenSans/OpenSans-Regular.woff2"
import OpenSansItalicWOFF from "../assets/fonts/OpenSans/OpenSans-Italic.woff"
import OpenSansItalicWOFF2 from "../assets/fonts/OpenSans/OpenSans-Italic.woff2"
import OpenSansBoldWOFF from "../assets/fonts/OpenSans/OpenSans-Bold.woff"
import OpenSansBoldWOFF2 from "../assets/fonts/OpenSans/OpenSans-Bold.woff2"
import OpenSansBoldItalicWOFF from "../assets/fonts/OpenSans/OpenSans-BoldItalic.woff"
import OpenSansBoldItalicWOFF2 from "../assets/fonts/OpenSans/OpenSans-BoldItalic.woff2"

const montserrat = {
  name: `Montserrat`,
  weights: {
    700: {
      normal: {
        woff: MontserratBoldWOFF,
        woff2: MontserratBoldWOFF2,
      },
      italic: {
        woff: MontserratBoldItalicWOFF,
        woff2: MontserratBoldItalicWOFF2,
      },
    },
  },
}

const openSans = {
  name: `Open Sans`,
  weights: {
    400: {
      normal: {
        woff: OpenSansRegularWOFF,
        woff2: OpenSansRegularWOFF2,
      },
      italic: {
        woff: OpenSansItalicWOFF,
        woff2: OpenSansItalicWOFF2,
      },
    },
    700: {
      normal: {
        woff: OpenSansBoldWOFF,
        woff2: OpenSansBoldWOFF2,
      },
      italic: {
        woff: OpenSansBoldItalicWOFF,
        woff2: OpenSansBoldItalicWOFF2,
      },
    },
  },
}

const createFontFaces = fontFamilies => {
  let fontFaces = ``

  for (const fontFamily of fontFamilies) {
    for (const [weight, styles] of Object.entries(fontFamily.weights)) {
      for (const [style, formats] of Object.entries(styles)) {
        fontFaces += `
          @font-face {
            font-family: "${fontFamily.name}";
            src: url(${formats.woff2}) format("woff2"),
              url(${formats.woff}) format("woff");
            font-weight: ${weight};
            font-style: ${style};
            font-display: auto;
          }
        `
      }
    }
  }

  return fontFaces
}

const fonts = css`
  ${createFontFaces([montserrat, openSans])}
`

export default fonts

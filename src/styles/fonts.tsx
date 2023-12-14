import { Global } from "@emotion/react";

export const FontsGlobal = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Grotesque';
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/BasementGrotesque/BasementGrotesque.woff2') format('woff2'),
            url('/fonts/BasementGrotesque/BasementGrotesque.woff') format('woff');
      }
      @font-face {
        font-family: 'Aileron';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("https://use.typekit.net/gqb5zul.css") ,
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
    `}
  />
);

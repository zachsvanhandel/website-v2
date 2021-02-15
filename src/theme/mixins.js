import { css, keyframes } from "styled-components"

const fadeInAndOut = keyframes`
  0% {
    opacity: 0.001;
  }

  25%,
  75% {
    opacity: 1;
  }

  100% {
    opacity: 0.001;
  }
`

const fadeUp = keyframes`
  0% {
    opacity: 0.001;
    transform: translateY(50px);
  }

  50% {
    transform: translateY(0px);
  }

  100% {
    opacity: 1;
  }
`

const mixins = {
  body: css`
    font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  `,
  heading: css`
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  `,

  headline: css`
    font-size: 2.25rem;

    margin-top: 0;
    margin-bottom: 0;
  `,
  copy: css`
    font-size: 1.125rem;

    margin-top: 0.375rem;
    margin-bottom: 0;
  `,

  ctaButton: ({ theme }) => css`
    display: inline-block;

    position: relative;

    color: ${theme.colors.light};
    background-color: ${theme.colors.primary};

    text-decoration: none;

    padding: 0.625rem 1.5rem;
    border-radius: 1.375rem;

    transition: all 0.3s ease-in-out;

    :hover,
    :focus {
      padding-left: 1.125rem;
      padding-right: 1.875rem;
    }

    :hover:after,
    :focus:after {
      content: "›";
      position: absolute;
      right: 1.125rem;
    }
  `,
  ctaLink: ({ theme }) => css`
    display: inline-block;

    position: relative;

    color: ${theme.colors.primary};

    text-decoration: none;

    margin-top: 2rem;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;

      visibility: hidden;

      height: 0.125rem;
      width: 0;

      background-color: ${theme.colors.primary};

      transition: all 0.3s ease-in-out;
    }

    :hover:before,
    :focus:before {
      visibility: visible;

      width: 100%;
    }

    :after {
      content: "›";
      position: absolute;

      padding-left: 0.375rem;
    }
  `,

  unstyledList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  fadeInAndOutAnimation: ({ delay }) => css`
    animation-name: ${fadeInAndOut};
    animation-duration: 2.5s;
    animation-delay: ${delay || `0s`};
    animation-timing-function: linear;
    animation-fill-mode: both;
  `,
  fadeUpAnimation: ({ delay }) => css`
    animation-name: ${fadeUp};
    animation-duration: 1s;
    animation-delay: ${delay || `0s`};
    animation-timing-function: ease;
    animation-fill-mode: both;
  `,
}

export default mixins

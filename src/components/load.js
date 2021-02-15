import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import LogoIcon from "../assets/images/logo.svg"

const Logo = styled(LogoIcon)`
  ${({ theme }) => theme.mixins.fadeInAndOutAnimation}

  position: fixed;
  top: calc(50% - 2.3125rem);
  left: calc(50% - 2.3125rem);

  height: 4.625rem;
  width: 4.625rem;
`

const Load = ({ onLoadComplete }) => {
  return <Logo onAnimationEnd={onLoadComplete} />
}

Load.propTypes = {
  onLoadComplete: PropTypes.func,
}

export default Load

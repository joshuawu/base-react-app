import React from "react"
import styled from "styled-components"

interface Props {
  children: React.ReactNode
  href: string
}

const ExternalLink = ({ children, href }: Props) => (
  <AnchorContainer href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </AnchorContainer>
)

const AnchorContainer = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  &:link {
    color: #61dafb;
  }
  &:visited {
    color: #d499ff;
  }
`

export default ExternalLink

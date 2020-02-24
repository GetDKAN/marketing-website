import React from 'react'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import { colors, media } from '../tokens'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-color: #0077c0;
  background-position: right bottom;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    background-size: contain;
  }
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  margin: 10px 50px;
  color: ${colors.white};
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.25);
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubTitle = styled.h2`
  margin: 10px auto 20px;
  color: ${colors.white};
  font-weight: 400;
  font-size: 1.8rem;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.25);
  max-width: 90%;
  @media ${media.large} { 
    max-width: 800px;
  }
`

const HorizontalRule = styled.hr`
  border-top: 1px solid #fff;
  margin: 20px auto;
  max-width: 50%;
  opacity: .5;
  @media ${media.large} {
    max-width: 30%;
  }
`

const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = props.heroImg || fluid.src

  return (
    <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>
      <TitleContainer>
        <HeroTitle>{props.title}</HeroTitle>
        <HorizontalRule />
        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero

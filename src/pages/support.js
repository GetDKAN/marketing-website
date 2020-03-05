/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

import { Text } from '../components/Commons'


import Bio from '../components/Bio';


const Span = styled.span`
  h2,
  .support {
    text-align: center;
    img {
      margin: 25px
    }
  }
  h3 {
    margin: 1rem 0 1rem;
  }
  p {
    margin: 0 0 40px 30px;
  }
  strong {
    margin: 30px 0 15px;
    display: block;
  }
  hr {
    margin: 100px 0;
  }
`

const Support = props => {

  return (
    <Layout location={props.location}>
      <SEO title="DKAN Support" />
      <Hero title="DKAN Support" />
      <Wrapper>
        <Span>
        <h2>DKAN custom development and support is provided by:</h2>
        <div class="support">
          <a href="https://civicactions.com">
            <img src="./civicactions.png" alt="CivicActions"/>
          </a>
          <a href="http://landing.dkan.annai.co.jp">
            <img src="./annai.png" alt="Annai"/>
          </a>
        </div>

        <hr/>

        <h2>DKAN is led by a core team of developers, designers and open data leaders.</h2>
        <Bio />

        <hr/>

        <h2>Values</h2>

        <strong>DKAN is guided by these core values:</strong>

        <h3><i class="fa fa-check-square-o" aria-hidden="true"></i> Community and User Empowerment</h3>
        <p>DKAN empowers data publishers to easily share their data, empowers policymakers to make good, data-driven decisions, and empowers citizens to hold accountable the institutions that serve them.</p>
        
        <h3><i class="fa fa-check-square-o" aria-hidden="true"></i> Transparency and Openness</h3>
        <p>Driven by a transparent, engaging development process that advocates and enables transparency in our institutions, DKAN is open source, openly managed, and compliant with open standards.</p>

        <h3><i class="fa fa-check-square-o" aria-hidden="true"></i> Collaboration and Creativity</h3>
        <p>By working together, we can bring our unique skills, experience, and perspective to use data in ways none of us could have envisioned alone. Open data reveals a world of possibility, and DKAN is here to help us make the most of it.</p>

        <h3><i class="fa fa-check-square-o" aria-hidden="true"></i> Inclusiveness and Accessibility</h3>
        <p>Open data allows users from all walks of life to learn about and contribute to their communities. Academic researchers, policymakers, journalists and everyday citizens alike can all access and benefit from standardized, readily-accessible, machine-readable data. DKAN will always be free, easy-to-use for data publishers and data consumers, provide multilingual support, and will always strive to meet the needs of those with disabilities to ensure DKAN is accessible to all.</p>

        <h3><i class="fa fa-check-square-o" aria-hidden="true"></i> Sustainability and Extensibility</h3>
        <p>DKAN will provide a sustainable open data ecosystem, keeping information up-to-date and use modern, forward-thinking technology that grows as we do. Opening data is just the first step, after that it is all about what we do with it. There are many amazing tools out there, and DKAN should be able to help you work with any tool you need.</p>
        </Span>
      </Wrapper>
    </Layout>
  )
}

export default Support

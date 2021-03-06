import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/Content'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import '../css/style.css'

export default props => {
  const page = props.data.page

  return (
    <Layout location={props.location}>
      <SEO
        title={page.frontmatter.title}
        description={page.excerpt}
        path={page.frontmatter.slug}
        cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
      />

      <Hero
        heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
        title={page.frontmatter.title}
        subTitle={page.frontmatter.subTitle}
      />

      <Wrapper className={page.frontmatter.pageClass}>
        <article>
          <Content content={page.body} date={page.frontmatter.date} />
        </article>
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        subTitle
        date(formatString: "MMMM DD, YYYY")
        slug
        pageClass
        cover {
          publicURL
        }
      }
    }
  }
`

import React from 'react'
//import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import { colors } from '../tokens'
import logo from '../../content/images/dkan-white.png'
import bg from '../../content/images/bg.png'

const FooterWrapper = styled.footer`
  text-align: left;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: ${colors.primary};
  background-image: url(${bg});
  background-position: right bottom;
  background-repeat: no-repeat;
  color: ${colors.textLightest};
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    background-size: contain;
  }

  & nav {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    max-width: 900px;
    margin: 0 auto;

    .footer-col {
      flex: 1 auto;
      display: inline-flex;
      flex-direction: column;
      margin-bottom: 1em;
    }
  }

  & a {
    color: ${colors.textLightest};
    font-weight: bold;

    &:hover {
      color: ${colors.textLightestHover};
      /* border-bottom: 1px dotted ${colors.textLightestHover}; */
    }
  }

  .footer-col > p {
    margin: 0;
  }
  .footer-title {
    margin: 0 0 1rem;
  }

  .footer-item {
    padding: 0.25rem 0;
    color: ${colors.textLightest};
  }

  .footer-heart {
    color: ${colors.heartFooter};
  }

  .footer-item-text {
    padding: 0.1rem 0;
    color: ${colors.textLightest};
  }

  .footer-header {
    order: 1;
    margin: 0 0.25rem;
    margin-right: 0.25rem;
    padding: 0.25rem;
  }

  img.footer-logo {
    height: auto;
    width: 150px;
  }
  .footer-col .icons {
    display: flex;
    justify-content: start;
    margin-top: 20px;
    margin-bottom: 20px;
    i.fa {
        font-size: 2rem;
        margin: 0 20px 0 0;
    }
  }

  @media (max-width: 564px) {
    .footer-col:first-child {
      width: 100%;
      .icons {
        flex-wrap: wrap;
        a {
          width: 20%;
          text-align: center;
          margin-bottom: 20px;
        }
        i.fa {
          margin-right: 0;
        }
      }
    }
  }
`

const Footer = () => {
  const { authorName } = useSiteMetadata()

  // const FooterItem = ({ item }) => {
  //   if (item.url.startsWith('/')) {
  //     return (
  //       <span className="footer-item">
  //         <Link className="footer-link" to={item.url}>
  //           {item.label}
  //         </Link>
  //       </span>
  //     )
  //   }
  //   return (
  //     <span className="footer-item">
  //       <a className="footer-link" href={item.url}>
  //         {item.label}
  //       </a>
  //     </span>
  //   )
  // }

  // const FooterColumn = ({ column }) => {
  //   return (
  //     <div className="footer-col">
  //       {column.links.map((item, i) => {
  //         return <FooterItem item={item} key={`footer-column-item-${i}`} />
  //       })}
  //     </div>
  //   )
  // }

  return (
    <FooterWrapper>
      <nav>
        <div className="footer-col">
          <img src={logo} alt="DKAN logo" className="footer-logo" />
          <div className="icons">
            <a href="http://eepurl.com/c01YS1" title="Subscribe to our Newsletter">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a href="https://medium.com/dkan-blog" title="Read blog posts">
              <i className="fa fa-medium" aria-hidden="true"></i>
            </a>
            <a href="https://getdkan.org/community" title="Join us on Slack">
              <i className="fa fa-slack" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/getdkan" title="Follow us on Twitter">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/GetDKAN/" title="Like us on Facebook">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/company/dkan/" title="Check us out on LinkedIn">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/getdkan" title="Fork the code on Github">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCl7qFUCkyh32lss4EjQEUXg" title="View videos on YouTube">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a href="https://www.drupal.org/project/dkan" title="View the Drupal project page">
              <i className="fa fa-drupal" aria-hidden="true"></i>
            </a>
            <a href="https://www.eventbrite.com/o/dkan-14793986036" title="Register for events">
              <i className="fa fa-ticket" aria-hidden="true"></i>
            </a>
          </div>
          <h5 className="footer-title">
            {authorName} © {new Date().getFullYear()}
          </h5>
        </div>
        {/* {footerLinks.map((column, i) => {
          return <FooterColumn column={column} key={`footer-column-${i}`} />
        })} */}
      </nav>
    </FooterWrapper>
  )
}

export default Footer

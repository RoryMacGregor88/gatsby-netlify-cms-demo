import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel=""
          sizes="180x180"
          href={`${withPrefix('/')}Orbis-assets/tempTitleIcon.png`}
        />
        <link
          rel=""
          type="image/png"
          href={`${withPrefix('/')}Orbis-assets/tempTitleIcon.png`}
          sizes="32x32"
        />
        <link
          rel=""
          type="image/png"
          href={`${withPrefix('/')}Orbis-assets/tempTitleIcon.png`}
          sizes="16x16"
        />

        <link
          rel=""
          href={`${withPrefix('/')}Orbis-assets/tempTitleIcon.png`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper

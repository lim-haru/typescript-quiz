import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

type SEOProps = {
  title: string
  description: string
  url: string
  type: string
}

export default function SEO({ title, description, url, type }: SEOProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta data-rh="true" name="description" content={description} />
        <meta data-rh="true" property="og:url" content={url} />
        <meta data-rh="true" property="og:type" content={type} />
        <meta data-rh="true" property="og:title" content={title} />
        <meta data-rh="true" property="og:description" content={description} />
      </Helmet>
    </HelmetProvider>
  )
}

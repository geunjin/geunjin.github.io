import * as React from 'react'
import {useSiteMetaData} from "../hooks/useSiteMetaData";

export default function Seo({title,pathname,children}) {
  const {title:metaTitle,siteUrl} = useSiteMetaData()
  const seo = {
    title: title || metaTitle,
    url: `${siteUrl}${pathname || ''}`
  }
  return (
    <>
      <title>{seo.title}</title>
      <meta name="url" content={seo.url} />
      {children}
    </>
)
}

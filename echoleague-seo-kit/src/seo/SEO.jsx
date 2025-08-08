import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "EchoLeague — Designs worn to inspire",
  description = "Small-batch graphics with story and soul. Printed on demand to reduce waste.",
  canonical = "https://echoleague.xyz/",
  image = "/og/og-default.jpg",
  siteName = "EchoLeague",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Theme */}
      <meta name="theme-color" content="#111111" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}

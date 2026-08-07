import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  desc: string;
  canonical: string;
  type?: string;
  image?: string;
  siteName?: string;
}

/* Seo Helmet */
function Seo({
  title,
  desc,
  canonical,
  type = "website",
  siteName = "Bulus Hamnu",
  image = "https://bulushamnu.com/logo.png",
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />

      {/* Twitter meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default Seo;

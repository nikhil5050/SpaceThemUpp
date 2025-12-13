import React from "react";
// New (Assuming successful install of react-helmet-async)
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const Seo: React.FC<SeoProps> = ({
  title = "Space Them Upp | Premium Interior Design & Home Decor Solutions",
  description = "Space Them Upp: Premium residential, commercial design solutions across India. Specialists in modular kitchen, bedroom, and office design.",
  keywords = "interior designer, interior design company, home interior design, office interior designer, modular kitchen design, luxury interiors, commercial interiors, residential interiors, interior designers in India",
  url = "https://spacethemupp.com",
  image = "https://spacethemupp.com/og-image.jpg",
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "InteriorDesign",
    name: "Space Them Upp",
    url,
    logo: "https://spacethemupp.com/logo.png",
    description:
      "Premium interior design company offering residential, commercial and luxury interior solutions.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Space Them Upp" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Local / Geo */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default Seo;

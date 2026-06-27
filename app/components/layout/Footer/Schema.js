const FooterSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "WPFooter",
          "copyrightYear": new Date().getFullYear(),
          "copyrightHolder": {
            "@type": "Person",
            "name": "Athik Hasan",
            "url": "https://your-domain.com"
          }
        })
      }}
    />
  );
};

export default FooterSchema; 
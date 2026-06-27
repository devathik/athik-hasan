const QualificationSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Bachelor of Science in Computer Science",
              "educationalLevel": "Bachelor's Degree",
              "credentialCategory": "degree"
            },
            {
              "@type": "EducationalOccupationalCredential",
              "name": "AWS Certified Developer - Associate",
              "educationalLevel": "Professional Certificate",
              "credentialCategory": "certification"
            }
          ]
        })
      }}
    />
  );
};

export default QualificationSchema; 
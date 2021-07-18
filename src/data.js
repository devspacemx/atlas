export const metaInfo = (seo, title, showTitleSuffix = true) => {
  const baseURL = "https://comunidades.lat";
  const logoURL = encodeURI(`${baseURL}/logo.png`);
  const imageURL = encodeURI(`${baseURL}/screen.png`);
  const socialImage =
    `https://motif.imgix.com/i?url=${baseURL}` +
    `&image_url=${imageURL}` +
    `&color=94a2b3&` +
    `logo_url=${logoURL}` +
    `&logo_alignment=top%2Cleft` +
    `&text_alignment=bottom%2Cleft&logo_padding=70&font_family=Avenir%20Next%20Demi%2CBold&text_color=1d1d1d`;
  return seo({
    title: showTitleSuffix ? `${title} - Atlas de Comunidades` : title,
    baseUrl: `${baseURL}`,
    keywords: `atlas,atlas comunidades,atlas tech,comunidades tech,comunidad tech,comunidad`,
    lang: "es",
    language: "Spanish",
    image: socialImage,
    openGraph: {
      title: `${title} - Atlas de comunidades`,
      type: "website",
      image: socialImage,
    },
    twitter: {
      title: `${title} - Atlas de comunidades`,
      type: "summary_large_image",
      image: socialImage,
    },
  });
};

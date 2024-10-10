import React from "react";
import * as S from "./styles";

import Text from "../../common/Text";

const courtCorrectBrandLogo = process.env.PUBLIC_URL + "/brand_logo.png";

const mediaIcons = [
  { alt: "facebook icon", path: `${process.env.PUBLIC_URL + "/icons8-facebook.png"}` },
  { alt: "instagram icon", path: `${process.env.PUBLIC_URL + "/icons8-instagram.png"}` },
  { alt: "linkedin icon", path: `${process.env.PUBLIC_URL + "/icons8-linkedin.png"}` },
  { alt: "tiktok icon", path: `${process.env.PUBLIC_URL + "/icons8-tiktok.png"}` },
  { alt: "twitter icon", path: `${process.env.PUBLIC_URL + "/icons8-twitter.png"}` },
  { alt: "youtube icon", path: `${process.env.PUBLIC_URL + "/icons8-youtube.png"}` },
];

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/home" },
    { name: "Data", path: "/data" },
    { name: "Cases", path: "/cases" },
    { name: "Customers", path: "/customers" },
    { name: "Search Engine", path: "/search" },
    { name: "Custom Fields", path: "/custom" },
    { name: "Support", path: "/support" },
  ];
  const legals = [
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "AI Safety Policy", path: "/safety" },
  ];

  return (
    <S.Footer>
      <S.FooterContent>
        <div>
          <img src={courtCorrectBrandLogo} alt="CourtCorrect brand logo" />
          <Text as="TextBody" isSubdued={true}>
            Justice for all.
          </Text>
          <div>
            <Text as="TextBodyAlternative" isSubdued={true}>
              hello@courtcorrect.com
            </Text>
            <Text as="TextBodyAlternative" isSubdued={true}>
              33 Percy St, London W1T 2DF
            </Text>
            <Text as="TextBodyAlternative" isSubdued={true}>
              020 7867 3925
            </Text>
          </div>
        </div>
        <S.FooterLinks>
          <Text as="Heading">Quick Links</Text>
          {quickLinks.map(({ name }) => (
            <Text key={name} as="TextLink" isSubdued={true}>
              {name}
            </Text>
          ))}
        </S.FooterLinks>
        <S.FooterLinks>
          <Text as="Heading">Legals</Text>
          {legals.map(({ name }) => (
            <Text key={name} as="TextLink" isSubdued={true}>
              {name}
            </Text>
          ))}
        </S.FooterLinks>
      </S.FooterContent>
      <S.FooterEnd>
        <Text as="TextCaption" isSubdued={true}>
          © 2023 CourtCorrect Ltd
        </Text>
        <div>
          {mediaIcons.map(({ path, alt }) => (
            <img src={path} alt={alt} key={alt.replace(" ", "")} />
          ))}
        </div>
      </S.FooterEnd>
    </S.Footer>
  );
};

export default Footer;

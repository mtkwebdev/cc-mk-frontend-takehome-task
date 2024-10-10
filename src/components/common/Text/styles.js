import styled from "styled-components";
import { COLOURS } from "../../../enums/colours";
import {
  regular,
  semibold,
  textXl,
  textLg,
  textMd,
  textSm,
  textHeader,
  textSubheader,
  textBody,
  textCaption,
  lineXl,
  lineLg,
  lineMd,
  lineSm,
  lineHeader,
  lineSubheader,
  lineBody,
  lineCaption,
} from "../../../enums/textStyles.js";

const { text } = COLOURS;

const getFontColour = p => {
  if (p.type === "button") return "inherit";
  return p.isSubdued ? text.subdued : text.default;
};

export const TextXl = styled.h1`
  font-weight: ${semibold};
  font-size: ${textXl};
  line-height: ${lineXl};
  color: ${p => getFontColour(p)};
`;
export const TextLg = styled.h2`
  font-weight: ${semibold};
  font-size: ${textLg};
  line-height: ${lineLg};
  color: ${p => getFontColour(p)};
`;
export const TextMd = styled.h3`
  font-weight: ${regular};
  font-size: ${textMd};
  line-height: ${lineMd};
  color: ${p => getFontColour(p)};
`;
export const TextSm = styled.h4`
  font-weight: ${regular};
  font-size: ${textSm};
  line-height: ${lineSm};
  color: ${p => getFontColour(p)};
`;
export const Heading = styled.h5`
  font-weight: ${semibold};
  font-size: ${textHeader};
  line-height: ${lineHeader};
  color: ${p => getFontColour(p)};
  margin: 0;
`;
export const Subheading = styled.h6`
  font-weight: ${semibold};
  font-size: ${textSubheader};
  line-height: ${lineSubheader};
  color: ${p => getFontColour(p)};
  margin: 0;
`;

export const TextButton = styled.span`
  align-self: center;
  font-weight: ${regular};
  font-size: ${textBody};
  line-height: ${lineBody};
  color: ${p => getFontColour(p)};
`;

export const TextBody = styled.p`
  font-weight: ${regular};
  font-size: ${textBody};
  line-height: ${lineBody};
  color: ${p => getFontColour(p)};
`;

export const TextBodyAlternative = styled.p`
  font-weight: ${regular};
  font-size: ${textBody};
  line-height: ${lineBody};
  color: ${p => getFontColour(p)};
  margin: 0;
`;

export const TextLink = styled.a`
  font-weight: ${regular};
  font-size: ${textCaption};
  line-height: ${lineCaption};
  color: ${p => getFontColour(p)};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const TextCaption = styled.small`
  font-weight: ${regular};
  font-size: ${textCaption};
  line-height: ${lineCaption};
  color: ${p => getFontColour(p)};
`;

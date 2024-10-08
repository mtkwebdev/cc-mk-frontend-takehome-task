import styled from "styled-components";

import { COLOURS } from "../../../enums/colours";
const { text } = COLOURS;
const regular = 400;
const semibold = 600;

const fontXl = "2.625rem";
const fontLg = "1.75rem";
const fontMd = "1.625rem";
const fontSm = "1.25rem";
const fontHeader = "1rem";
const fontSubheader = "0.75rem";
const fontBody = "0.875rem";
const fontCaption = "0.75rem";

const lineXl = "2.75rem";
const lineLg = "2rem";
const lineMd = "2rem";
const lineSm = "1.75rem";
const lineHeader = "1.5rem";
const lineSubheader = "1rem";
const lineBody = "1.25rem";
const lineCaption = "1rem";

const getFontColour = p => {
  return p.isSubdued ? text.subdued : text.default;
};

export const TextXl = styled.h1`
  font-weight: ${semibold};
  font-size: ${fontXl};
  line-height: ${lineXl};
  color: ${p => getFontColour(p)};
`;
export const TextLg = styled.h2`
  font-weight: ${semibold};
  font-size: ${fontLg};
  line-height: ${lineLg};
  color: ${p => getFontColour(p)};
`;
export const TextMd = styled.h3`
  font-weight: ${regular};
  font-size: ${fontMd};
  line-height: ${lineMd};
  color: ${p => getFontColour(p)};
`;
export const TextSm = styled.h4`
  font-weight: ${regular};
  font-size: ${fontSm};
  line-height: ${lineSm};
  color: ${p => getFontColour(p)};
`;
export const Heading = styled.h5`
  font-weight: ${semibold};
  font-size: ${fontHeader};
  line-height: ${lineHeader};
  color: ${p => getFontColour(p)};
`;
export const SubHeading = styled.h6`
  font-weight: ${semibold};
  font-size: ${fontSubheader};
  line-height: ${lineSubheader};
  color: ${p => getFontColour(p)};
`;
export const TextBody = styled.p`
  font-weight: ${regular};
  font-size: ${fontBody};
  line-height: ${lineBody};
  color: ${p => getFontColour(p)};
`;
export const TextCaption = styled.small`
  font-weight: ${regular};
  font-size: ${fontCaption};
  line-height: ${lineCaption};
  color: ${p => getFontColour(p)};
`;

import dayjs from "dayjs";
import { COLOURS } from "../../../../enums/colours";
import Text from "../../../common/Text";
import * as S from "./styles";

const defaultText = {
  default: COLOURS.text.default,
  hover: COLOURS.text.default,
};

const actionPrimaryText = {
  default: COLOURS.actions.primary.default,
  pressed: COLOURS.actions.primary.pressed,
  hover: COLOURS.actions.primary.hover,
};

const SearchEngineResultsItem = () => {
  return (
    <>
      <Text variant={defaultText} as="Heading">
        18 Nov 2022
      </Text>
      <Text variant={actionPrimaryText} as="TextMd">
        Title Hotlink
      </Text>
    </>
  );
};

export default SearchEngineResultsItem;

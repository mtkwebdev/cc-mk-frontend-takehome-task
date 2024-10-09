import * as S from "./styles";
import Text from "../../common/Text";
import InputField from "../../common/InputFIeld";

const SearchEngine = () => {
  return (
    <S.SearchEngine>
      <Text as={"TextXl"}>AI-Powered Regulatory Search</Text>
      <Text as={"TextSm"} isSubdued={true}>
        Use the search engine to search for publications from courts and regulators.
      </Text>
      <InputField placeholder="Category" type="search" />
    </S.SearchEngine>
  );
};

export default SearchEngine;

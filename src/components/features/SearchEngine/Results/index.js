import * as S from "./styles";
import Text from "../../../common/Text";
import { formatDate } from "../../../../utils/formatting";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMockSearchResults } from "../../../../services/thunks/getDataOptions.js";
import { searchResultsState } from "../searchEngineSlice.js";

// const data = getSearchData();
const SearchEngineResults = () => {
  const dispatch = useDispatch();
  const data = useSelector(searchResultsState);
  useEffect(() => {
    dispatch(getMockSearchResults());
  }, [dispatch]);

  return (
    <S.ResultsContainer>
      {data && data.length > 0 ? (
        data.map(({ id, date, title, content, category, decision, company }) => (
          <S.ResultsItem key={id}>
            <Text as="Subheading">{formatDate(date)}</Text>
            <S.ResultItemTitle>{title}</S.ResultItemTitle>
            <Text as="TextBody" isSubdued={true}>
              {content}
            </Text>
            <S.ResultItemDetailsContainer>
              <S.ResultItemDetails>
                <Text as="TextCaption">Category</Text>
                <Text as="Heading">{category}</Text>
              </S.ResultItemDetails>
              <S.ResultItemDetails>
                <Text as="TextCaption">Decision</Text>
                <Text as="Heading">{decision}</Text>
              </S.ResultItemDetails>
              <S.ResultItemDetails>
                <Text as="TextCaption">Company</Text>
                <Text as="Heading">{company}</Text>
              </S.ResultItemDetails>
            </S.ResultItemDetailsContainer>
            <hr />
          </S.ResultsItem>
        ))
      ) : (
        <Text as="TextMd" isSubdued={true}>
          Oops! No results found
        </Text>
      )}
    </S.ResultsContainer>
  );
};

export default SearchEngineResults;

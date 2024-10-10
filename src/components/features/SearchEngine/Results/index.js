import * as S from "./styles";
import Text from "../../../common/Text";
import { formatDate } from "../../../../utils/formatting";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMockSearchResults } from "../../../../services/thunks/getDataLists.js";
import { searchResults } from "../searchEngineSlice.js";

// const data = getSearchData();
const SearchEngineResults = () => {
  const dispatch = useDispatch();
  const data = useSelector(searchResults);
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
        <div>No data</div>
      )}
    </S.ResultsContainer>
  );
};

export default SearchEngineResults;

import * as S from "./styles";
import Text from "../../../common/Text";
import { getSearchData } from "../../../../services";
import { formatDate } from "../../../../utils/formatting";

const data = getSearchData();
console.log(data);
const SearchEngineResultsItem = () => {
  return (
    <div style={{ marginTop: "5rem", overflowX: "auto", height: "50vh" }}>
      {data.map(({ id, date, title, content, category, decision, company }) => (
        <div key={id}>
          <Text as="Subheading">{formatDate(date)}</Text>
          <S.ResultItemTitle>{title}</S.ResultItemTitle>
          <Text as="TextBody" isSubdued={true}>
            {content}
          </Text>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5rem" }}>
            <div>
              <Text as="TextCaption">Category</Text>
              <Text as="Heading">{category}</Text>
            </div>
            <div>
              <Text as="TextCaption">Decision</Text>
              <Text as="Heading">{decision}</Text>
            </div>
            <div>
              <Text as="TextCaption">Company</Text>
              <Text as="Heading">{company}</Text>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SearchEngineResultsItem;

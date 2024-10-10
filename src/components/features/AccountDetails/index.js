import * as S from "./styles";
import Text from "../../common/Text";
const AccountDetails = () => {
  return (
    <S.AccountDetailsContainer>
      <S.AccountDetails>
        <Text as="TextSm">Name Surname</Text>
        <S.AccountDetailsIcon>
          <span>CC</span>
        </S.AccountDetailsIcon>
      </S.AccountDetails>
    </S.AccountDetailsContainer>
  );
};

export default AccountDetails;

import * as S from "./styles";

const InputContainer = ({ children, ...props }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <S.InputContainer>{children}</S.InputContainer>
    </div>
  );
};

export default InputContainer;

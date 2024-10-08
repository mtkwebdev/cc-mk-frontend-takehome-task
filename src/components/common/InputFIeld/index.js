import { Children } from "react";
import * as S from "./styles";

const InputField = ({ label, children, type, ...props }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <S.InputFIeldContainer>
        <S.InputFIeld {...props} placeholder={label} />
        {children}
        <div>^</div>
      </S.InputFIeldContainer>
    </div>
  );
};

export default InputField;

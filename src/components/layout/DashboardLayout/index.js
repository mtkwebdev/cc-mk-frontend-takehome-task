import * as S from "./styles";
import AccountDetails from "../../features/AccountDetails";
const DashboardLayout = ({ children }) => {
  return (
    <S.DashboardLayout>
      <AccountDetails />
      {children}
    </S.DashboardLayout>
  );
};

export default DashboardLayout;

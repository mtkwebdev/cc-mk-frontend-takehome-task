import BaseLayout from "../layout/BaseLayout";
import SearchEngine from "../features/SearchEngine";
import DashboardLayout from "../layout/DashboardLayout";

const SearchPage = () => {
  return (
    <BaseLayout>
      <DashboardLayout>
        <SearchEngine />
      </DashboardLayout>
    </BaseLayout>
  );
};

export default SearchPage;

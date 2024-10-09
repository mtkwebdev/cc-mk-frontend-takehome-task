import { mockData } from "./mock_data";
import { mockHTTP } from "../utils/mockHTTP";

const generateMockFilters = property => {
  const arr = [];
  mockData.forEach((data, i) => {
    const isNotDuplicateValue = !arr.find(x => x.text === data[property]);
    if (isNotDuplicateValue) arr.push({ text: data[property], value: i });
  });
  return arr;
};

export const getSearchData = async () => {
  return mockData;
};

export const getCategories = async () => {
  return await mockHTTP(generateMockFilters("category"));
};
export const getDecisions = async () => {
  return await mockHTTP(generateMockFilters("decision"));
};
export const getCompanies = async () => {
  return await mockHTTP(generateMockFilters("company"));
};
export const getDates = async () => {
  return await mockHTTP(generateMockFilters("date"));
};

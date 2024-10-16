import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchData, getCategories, getDecisions, getCompanies, getDates } from "../index.js";

export const getMockSearchResults = createAsyncThunk("/api/getMockSearchData", async () => {
  try {
    const data = await getSearchData();
    return data;
  } catch (error) {
    console.err(error);
  }
});

export const getMockCategoriesOptions = createAsyncThunk("/api/getCategories", async () => {
  try {
    const res = await getCategories();
    return res;
  } catch (error) {
    console.err(error);
  }
});
export const getMockDecisionsOptions = createAsyncThunk("/api/getDecisions", async () => {
  try {
    const res = await getDecisions();
    return res;
  } catch (error) {
    console.err(error);
  }
});
export const getMockCompaniesOptions = createAsyncThunk("/api/getCompanies", async () => {
  try {
    const res = await getCompanies();
    return res;
  } catch (error) {
    console.err(error);
  }
});
export const getMockDatesOptions = createAsyncThunk("/api/getDates", async () => {
  try {
    const res = await getDates();
    return res;
  } catch (error) {
    console.err(error);
  }
});

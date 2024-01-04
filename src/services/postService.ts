import apiService from "./axios";

export const fetchPosts = async (page?: string, limit?: string) => {
  try {
    const url = new URL(process.env.NEXT_PUBLIC_BASE_URL + "/get-posts");
    page && url.searchParams.set("page", page);
    limit && url.searchParams.set("limit", limit);
    const res = await apiService.get(url.toString());
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const fetchPostById = async (id: string) => {
  try {
    const res = await apiService.get(`/getById-posts/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const addPost = async (data: any) => {
  try {
    const res = await apiService.post("/create-posts", data);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const addComment = async (data: any) => {
  try {
    const res = await apiService.post("/create-comments", data);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const login = async (data: any) => {
  try {
    const res = await apiService.post("/login", data);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export const signup = async (data: any) => {
  try {
    const res = await apiService.post("/signup", data);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export const isValidUser = async () => {
  try {
    const res = await apiService.get("/isValidAuth");
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export const searchPosts = async (query: string) => {
  try {
    const res = await apiService.get(`/search?query=${query}`);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

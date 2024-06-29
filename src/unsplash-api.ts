import axios from "axios";

const baseURL: string = "https://api.unsplash.com/";

const API_KEY: string = "kAC5N1ugVhBQNEKoK7GlGSSH_wSZ5q-3XGJiB6o26EU";
export type ImageResult = {
  id: string;
  description: string | null;
  alt_description: string | null;
  likes:number;
  urls: {
    regular: string;
    small: string;
  };
};
type Params = {
  query: string;
  page: number;
  hitsPerPage: number;
};
type ResponseAPI={
  results: ImageResult[];
  total: number;
  total_pages: number;
}
export const getImages = async (
  topic: string,
  currentPage: number
): Promise<ImageResult[]> => {
  const params: Params = {
    query: topic,
    page: currentPage,
    
    hitsPerPage: 5,
  };
  const response = await axios.get<ResponseAPI>(
    `${baseURL}/search/photos?client_id=${API_KEY}`,
    {
      params,
    }
  );
  return response.data.results;
};

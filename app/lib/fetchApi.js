import axios from "axios";
export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const fetchApi = async (url, method = "GET", data = null) => {
  try {
    const config = {
      method: method,
      url: url,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
    };

    if (data) {
      config.data = data;
    }

    const response = await axios(config);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      console.error("Status Code:", error.response.status);
      console.error("Headers:", error.response.headers);
      throw new ApiError(
        error.response.data.message || "API Error",
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      console.error("API Error: No response received");
      throw new ApiError("No response from server", 500);
    } else {
      console.error("API Error:", error.message);
      throw new ApiError(error.message || "Request failed", 500);
    }
  }
};

export default fetchApi;

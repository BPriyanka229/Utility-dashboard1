import axios from "axios"
import type { ApiResponse } from "../types/utilityTypes"
const API_URL =
  "https://69c277b27518bf8facbe717b.mockapi.io/api/v1/utility"
export const fetchUtilityApi = async (): Promise<ApiResponse> => {
  const response = await axios.get(API_URL)
  return response.data[0].data
}
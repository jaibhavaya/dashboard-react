import { ApiResponse } from "./types";

export const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/users');
    const result: ApiResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};


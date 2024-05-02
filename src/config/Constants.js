export const isProduction = false; // Change this to true when you are ready to deploy
export const devURL = "http://localhost:8000/api/v1/admin";
export const prodURL = "https://eight8credit.onrender.com/api/v1/admin";
export const API_BASE_URL = isProduction ? prodURL : devURL;

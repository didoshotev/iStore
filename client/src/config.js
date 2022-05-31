const DEV_URL = "http://localhost:5000";
const PROD_URL = "https://istore-nodejs.herokuapp.com"; 

export const API_URL = process.env.NODE_ENV === "production" ? PROD_URL : DEV_URL; 
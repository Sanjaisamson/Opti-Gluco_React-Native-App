("REACT_NATIVE_PACKAGER_HOSTNAME=192.168.1.3 npx expo start");

const SERVER_CONSTANTS = {
  localhost: "192.168.1.3",
  port: "3000",
};
const RESPONSE_STATUS = {
  SUCCESS: 200 || 201,
  FAILED: 400 || 404 || 500,
};

const STORAGE_CONSTANTS = {
  ACCESS_TOKEN: "accessToken",
  USER_NAME: "userName",
  REQUEST_ID: "requestId",
  SERVER_IP: "serverIP",
};
const PATH_CONSTANTS = {
  HOME: "Home",
  Add_IP_Screen: "Add_IP",
  LOGIN: "Login",
  REGISTER: "Register",
  SPLASH: "Splash",
  ADD_PRODUCT: "AddProduct",
  RECENT_DATA: "RecentData",
  FINAL_READING: "FinalReading",
};

const STATUS_CONSTANTS = {
  SUCCESS: "Completed",
  COMPLETED: "Completed",
  FAILED: "Failed",
  PROGRESS: "On-progress",
  ERROR: "Error",
};
const SUGAR_LEVELS = {
  NON_DIABATIC: "85-95",
  PRE_DIABATIC: "96-110",
  DIABATIC: "111-125",
};
export default {
  SERVER_CONSTANTS,
  PATH_CONSTANTS,
  STATUS_CONSTANTS,
  RESPONSE_STATUS,
  STORAGE_CONSTANTS,
  SUGAR_LEVELS,
};

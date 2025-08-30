


const backendapi = "https://crms-website-backend.onrender.com";  
;

const SummaryApi = {
  signUp: {
    url: `${backendapi}/api/signup`,
    method: "post",
  },
  signin: {
    url: `${backendapi}/api/signin`,
    method: "post",
  },
  
  logout_user:{
    url:`${backendapi}/api/user_logout`,
    method:"get"
  },
 
  Forgot_Password:{
    url:`${backendapi}/api/forgot_password`,
    method:"post"
  },
  resetPassword:{
    url:`${backendapi}/api/reset_password/`,
    method:"post"

  }

};

export default SummaryApi;
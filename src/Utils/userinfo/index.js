export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
//   export const addUserInfo = (userInfo) => {
//       return localStorage.setItem("user",JSON.stringify(userInfo));
//    };
  
//    export const removeUserInfo = () => {
//     return localStorage.removeItem("user");
//   };
  
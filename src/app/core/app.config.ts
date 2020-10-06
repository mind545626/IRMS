
// const baseUrl: string = "http://192.168.88.109:3001/";

// export const config: any = {

//     apiUrl: baseUrl + "restful/crud",
//     loginUrl: baseUrl + "auth/login",
//     logoutUrl: baseUrl + "auth/logout",
//     reLoadSessionUrl: baseUrl + "auth/reLoadSession",
//     versionUrl: baseUrl + "auth/version",

// }


const baseUrl: string = "https://pushlab01.kunyutech.com.tw/CCTVAPI/api/";

export const config: any = {

    loginUrl: baseUrl + "User/UserLogin", // 使用者登入資訊
    roleUrl: baseUrl + "UserRole/GetRoles", // 取得角色權限
    authUrl: baseUrl + "UserRole/GetMenuAuth", // 取得選單權限
    logoutUrl: baseUrl + "User/UserLogout", // 使用者登出
    reLoadSessionUrl: baseUrl + "auth/reLoadSession",
    versionUrl: baseUrl + "auth/version",

    historyByCarUrl: baseUrl + "CCTV/API001",
    historyByCCTVUrl: baseUrl + "CCTV/API002",
    cctvInfoUrl: baseUrl + "CCTV/API003",
    cctvImg: baseUrl + "CCTV/API006",

}
import { Role } from "./role";

export interface User {
    LoginMessage?: string, // "LoginMessage": "登入成功"
    UserId: string; // "UserId": "Administrator"
    UserPW?: string; // "UserPW": "Cga#12345"
    UserName?: string; // "UserName": "系統管理員"
    IDNo?: string; // "IDNo": "A999999999"
    LineID?: string; // "LineID": null,
    Role?: string; // "Role": "Admin"
    MapScale?: string;
    Latitude?: number,
    Longitude?: number,
    Grade?: string,
    GradeName?: string,
    Dept?: string,
    DeptName?: string,
    Group?: string,
    GroupName?: string,
    Permission?: string;
    Cases?: string[];
    DeptId: string;

    ID?: string;
    CR_User?: string;
}

//     MapScale: 5,
//     Latitude: null,
//     Longitude: null,
//     Grade: BAA7000001,
//     GradeName: 署長,
//     Dept: A00000,
//     DeptName: 海洋委員會,
//     Group: Admin,
//     GroupName: 系統管理員,
//     Permission:"notice,maps,realtime-videos,history-videos,favoriate,cctv,carplate-directive,area-group,apply-list,review-list,daily-check,check-record,equipment-monitor,reliability,history-img,maintenance,mainten-report,report-export,account-details,repair-report,maintain-report,history-report,user-statistic,video-statistic,carplate-statistic,monitor-record,history-record,carplate-record,bulletin,group-manage,authority"
// }

import { Record, Bullet, Role, Department, Member, RouteNode } from './administrator';

export const RECORDS: Record[] = [
    { department: '基隆查緝隊', user: 'XXX', cctvid: 'YL0909094-S002', name: '(YL0909094-S002)頭濱路三段路口環鎮東路二段往烏石漁港', ip: '192.168.194.2', log: '2019/03/19 01:00:09', device: '網頁', filename: 'CGA010101', caseid: '01010101', record: '攝影機辨識查詢' },
    { department: '宜蘭查緝隊', user: 'OOO', cctvid: 'YL0909094-S002', name: '(YL0909094-S002)頭濱路三段路口環鎮東路二段往烏石漁港', ip: '192.168.194.2', log: '2019/03/19 01:00:09', device: '網頁', filename: 'CGA010101', caseid: '01010101', record: '攝影機辨識查詢' },
    { department: '宜蘭查緝隊', user: 'OOO', cctvid: 'YL0909094-S002', name: '(YL0909094-S002)頭濱路三段路口環鎮東路二段往烏石漁港', ip: '192.168.194.2', log: '2019/03/19 01:00:09', device: '網頁', filename: 'CGA010101', caseid: '01010101', record: '攝影機辨識查詢' }
];

export const DEPARTMENTS: Department[] = [{ name: '偵防查緝隊', id: 'A' }, { name: '宜蘭查緝隊', id: 'B' }, { name: '基隆查緝隊', id: 'C' }, { name: '臺北查緝隊', id: 'D' }, { name: '桃園查緝隊', id: 'E' }, { name: '新竹查緝隊', id: 'F' }, { name: '連江查緝隊', id: 'G' }, { name: '臺中查緝隊', id: 'H' }, { name: '苗栗查緝隊', id: 'I' }, { name: '雲林查緝隊', id: 'J' }, { name: '彰化查緝隊', id: 'K' }, { name: '嘉義查緝隊', id: 'L' }, { name: '金門查緝隊', id: 'M' }, { name: '臺南查緝隊', id: 'N' }, { name: '北門查緝隊', id: 'O' }, { name: '高雄查緝隊', id: 'P' }];

export const BULLETS: Bullet[] = [
    { department:'業務部',ontop: '是', isExpired: '否', StartTime: '2020-08-01', EndTime: '2020-9-28', announceTime: '2020-08-01', subject: '測試主題12345abcde', person: 'Shane', content: '測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容。', file: '' },
    { department:'GMD部',ontop: '是', isExpired: '否', StartTime: '2020-07-29', EndTime: '2020-9-28', announceTime: '2020-07-29', subject: '測試主題12345abcde', person: 'Ken', content: '測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容。', file: '' },
    { department:'ACC部',ontop: '是', isExpired: '否', StartTime: '2020-06-20', EndTime: '2020-9-28', announceTime: '2020-06-20', subject: '測試主題12345abcde', person: 'Van', content: '測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容。', file: '' },
    { department:'指派部',ontop: '是', isExpired: '否', StartTime: '2020-05-15', EndTime: '2020-9-28', announceTime: '2020-05-15', subject: '測試主題12345abcde', person: 'Kyle', content: '測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容。', file: '' },
    { department:'GRM部',ontop: '否', isExpired: '否', StartTime: '2020-05-10', EndTime: '2020-9-28', announceTime: '2020-05-10', subject: '行政公告：如附件，請同仁打開閱讀簽署', person: 'Umi', content: '測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容。', file: null }
];

export const ROLES: Role[] = [
    { name: '系統管理員', id: 0 },
    { name: '單位主官', id: 1 },
    { name: '偵查員', id: 2 },
    { name: '外部單位', id: 3 }
];

export const MEMBERS: Member[] = [
    { id: 1, title: '管理員', unit: '海巡署', group: '無', name: '吳名氏', account: 'Admin', role: '系統管理員', phone: 886912345689 },
    { id: 2, title: '副分署長', unit: '海巡署', group: '無', name: '王大明', account: 'CI005622', role: '單位主官', phone: 886912345689 },
    { id: 3, title: '偵查員', unit: '海巡署', group: '科技鑑識科', name: '李小恩', account: 'CI000001', role: '偵查員', phone: 886912345689 },
    { id: 4, title: '分局警員', unit: '警察局', group: '外部單位', name: '陳大維', account: 'TEMP0001', role: '外部單位', phone: 886912345689 }
];

export const TREE_DATA: RouteNode[] = [
    // monitor  影像監看服務
    { name: "電子地圖", id: 'maps' },
    { name: "即時影像監看", id: 'realtime-videos' },
    { name: "歷史影像查詢", id: 'history-videos' },
    { name: "我的最愛", id: 'favoriate' },
    // license-plate 車牌辨識系統
    { name: "攝影機辨識查詢", id: 'cctv' },
    { name: "車牌歷史軌跡查詢", id: 'carplate-directive' },
    { name: "AI區域分群篩選", id: 'area-group' },
    // verify 車牌辨識系統
    { name: "待批核", id: 'apply-list' },
    { name: "調閱申請彙整", id: 'review-list' },
    // inspect  稽核檢查
    { name: "每日稽核", id: "daily-check" },
    { name: "每日稽核紀錄查詢", id: "check-record" },
    { name: "設備狀態監控", id: "equipment-monitor" },
    { name: "歷史妥善率", id: "reliability" },
    { name: "歷史畫面稽核查詢", id: "history-img" },
    { name: "線上申告維修狀態", id: "maintenance" },
    { name: "維修人員回報", id: "mainten-report" },
    { name: "設備資料報表匯出", id: "report-export" },
    // audit 計費查核
    { name: "計罰與帳務明細", id: "account-details" },
    { name: "影像維修報表", id: "repair-report" },
    { name: "保養報表", id: "maintain-report" },
    { name: "歷史儲檔報表", id: "history-report" },
    // statistical-report 統計報表
    { name: "使用者紀錄統計", id: "user-statistic" },
    { name: "即時監看與歷史查詢統計", id: "video-statistic" },
    { name: "車牌辨識紀錄統計", id: "carplate-statistic" },
    // administrator
    { name: "電子佈告欄", id: "notice" },
    { name: "帳號管理", id: "account" },
    { name: "即時監看使用紀錄", id: "monitor-record" },
    { name: "歷史調閱使用紀錄", id: "history-record" },
    { name: "車牌辨識使用紀錄", id: "carplate-record" },
    { name: "公告管理", id: "bulletin" },
    { name: "區域分群管理", id: "group-manage" },
    { name: "系統權限管理", id: "authority" }
];

export interface FoodNode {
    name: string;
    id?: number;
    selected?: boolean;
    indeterminate?: boolean;
    children?: FoodNode[];
    ok?: boolean;
}

export const ROUTE_DATA: FoodNode[] = [
    {
        name: "Fruit",
        children: [
            { name: "Apple", id: 1 },
            { name: "Banana", id: 2 },
            { name: "Fruit loops", id: 3 }
        ]
    },
    {
        name: "Vegetables",
        children: [
            { name: "Broccoli", id: 4 },
            { name: "Brussel sprouts", id: 5 },
            { name: "Pumpkins", id: 6 }, 
            { name: "Carrots", id: 7 }
        ]
    }
];
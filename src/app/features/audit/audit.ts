
export interface AccountTotal {
    rentReceivable: number; 
    rentDeduction: number; 
    maintainDelayPenalty: number; 
    fileDamagePenalty: number; 
    courseDelayPenalty: number; 
    dataDelayPenalty: number; 
    spotcheckDeduction: number; 
    totalDeduction: number; 
    totalRevenue: number; 
}

export interface AccountDetails {
    cctvid: string;
    intersection: string;
    videoDisconnect: number;
    singleRent: number;
    singleRentDeduction: number;
    singleRentRevenue: number;
}

export interface RepairTotal {
    totalHours: number; // 影像儲存總時數
    noSignal: number; // 無訊號
    blueImg: number; // 藍畫面
    blur: number; // 模糊
    offset: number; // 偏移
    shadow: number; // 遮蔽
    actualHours: number; // 實際儲存總時數
}
export interface RepairDetails {
    repairNumber: string; // 報修單號
    cctvid: string; // 攝影機編號
    malfunction: string; // 故障原因
    errorMonth: string; // 故障月份
    errorDate: string; // 故障時間
    repairTime: string; // 完修時間
    disconnectTime: number; // 中斷時間
    rentDeduction: number; // 應扣除月租費
    rentUnit: number; // 月租單位
    delayPenalty: number; // 應扣除逾期罰款
    penaltyUnit: number; // 罰款單位
    disclaimer: number; // 免責費用
    totalDeduction: number; // 應扣總費用
    excludeHours: number; // 不計算時數
    reason: string; // 原因
}

export interface MaintainTotal {
    repairNumber: number; // 需保養支數
    completeRepair: number; // 已完成保養支數
    noncompleteRepair: number;// 未完成保養支數
    repairDelay: number;// 保養逾期天數
}
export interface MaintainDetails {
    cctvid: string; // 攝影機編號
    intersection: string; // 裝機地址
    repairQuarter: string; // 保養季
    repairDate: string; // 保養時間
    contractDate: string; // 契約期限
    isDelay: string; // 是否逾期
    delayDays: number; // 逾期幾日
    extensionDate: string; // 展延期限
    reason: string; // 原因
}

export interface HistoryDetails {
    cctvid: string; // 攝影機編號
    intersection: string; // 裝機地址
    videoError: string; // 影像資料是否損毀
    dataError: string; // 辨識資料是否損毀
    errorDays: number; // 損毀天數
    recordIncorrect: string; // 儲存紀錄不正確
    carplateIncorrect: string;// 車牌辨識資料不正確
    positionIncorrect: string;// 前端監控設備點位不正確 
}
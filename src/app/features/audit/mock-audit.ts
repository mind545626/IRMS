import { AccountTotal, AccountDetails, RepairTotal, RepairDetails, MaintainTotal, MaintainDetails, HistoryDetails } from './audit';

export const TITLE = [{ 'payMonth': '2020/11', 'paymentStartDate': '2020/11/1', 'paymentEndDate': '2020/11/30', 'days': 30, 'startRentDate': '2020/10/1', 'term': '2024/12/31' }]

// export const TITLE = [{ name: '付款月份', value: '2020/11' }, { name: '付款起始日期', value: '2020/11/1' }, { name: '付款截止日期', value: '2020/11/30' }, { name: '該月天數', value: 30 }, { name: '起租日期', value: '2020/10/1' }, { name: '可申設期限', value: '2024/12/31' }]



export const ACCOUNTS: AccountTotal[] = [
    { 'rentReceivable': 48000, 'rentDeduction': 1424, 'maintainDelayPenalty': 0, 'fileDamagePenalty': 0, 'courseDelayPenalty': 0, 'dataDelayPenalty': 0, 'spotcheckDeduction': 0, 'totalDeduction': 1424, 'totalRevenue': 46576 }
];

export const ACCOUNTDETAILS: AccountDetails[] = [
    { 'cctvid': 'YL0912001-D001', 'intersection': '濱海路三段160巷', 'videoDisconnect': 0, 'singleRent': 4800, 'singleRentDeduction': 0, 'singleRentRevenue': 4800 },
    { 'cctvid': 'YL0912001-D002', 'intersection': '濱海路三段160巷', 'videoDisconnect': 0, 'singleRent': 4800, 'singleRentDeduction': 0, 'singleRentRevenue': 4800 },
    { 'cctvid': 'YL0912001-D003', 'intersection': '濱海路二段、慶天宮', 'videoDisconnect': 0, 'singleRent': 4800, 'singleRentDeduction': 592, 'singleRentRevenue': 4208 },
    { 'cctvid': 'YL0912001-D004', 'intersection': '濱海路二段、慶天宮', 'videoDisconnect': 0, 'singleRent': 4800, 'singleRentDeduction': 160, 'singleRentRevenue': 4640 },
    { 'cctvid': 'YL0912001-D005', 'intersection': '濱海路二段、烏石港路口', 'videoDisconnect': 0, 'singleRent': 4800, 'singleRentDeduction': 592, 'singleRentRevenue':  4208 },
    { 'cctvid': 'YL0912001-D006', 'intersection': '濱海路二段、烏石港路口', 'videoDisconnect': 0, 'singleRent': 4800, 'singleRentDeduction': 80, 'singleRentRevenue': 4720 },
    { 'cctvid': 'YL0912001-D007', 'intersection': '濱海路二段、烏石港路口', 'videoDisconnect': 0, 'singleRent': 4800, 'singleRentDeduction': 0, 'singleRentRevenue': 4800 },
    { 'cctvid': 'YL0912001-D008', 'intersection': '港墘路', 'videoDisconnect': 0, 'singleRent': 4800, 'singleRentDeduction': 0, 'singleRentRevenue': 4800 }
    , { 'cctvid': 'YL0912001-D009', 'intersection': '烏石港聯外道路', 'videoDisconnect': 0, 'singleRent': 4800, 'singleRentDeduction': 0, 'singleRentRevenue': 4800 },
    { 'cctvid': 'YL0912001-D010', 'intersection': '烏石港聯外道路', 'videoDisconnect': 0, 'singleRent': 4800, 'singleRentDeduction': 0, 'singleRentRevenue': 4800 }
];


export const REPAIR: RepairTotal[] = [
    { 'totalHours': 7200, 'noSignal': 105, 'blueImg': 13, 'blur': 0, 'offset': 0, 'shadow': 23, 'actualHours': 7059 }
];

export const REPAIRDETAILS: RepairDetails[] = [
    { 'repairNumber': '1001', 'cctvid': 'YL0912001-D001', 'malfunction': '偏移', 'errorMonth': '2020/11', 'errorDate': '2020/11/1 4:00', 'repairTime': '2020/11/3 17:00', 'disconnectTime': 61, 'rentDeduction': 400, 'rentUnit': 5, 'delayPenalty': 192, 'penaltyUnit': 2, 'disclaimer': 0, 'totalDeduction': 592, 'excludeHours': 0, 'reason': '原因' },
    { 'repairNumber': '1002', 'cctvid': 'YL0912001-D002', 'malfunction': '偏移', 'errorMonth': '2020/11', 'errorDate': '2020/11/1 4:00', 'repairTime': '2020/11/3 17:00', 'disconnectTime': 61, 'rentDeduction': 400, 'rentUnit': 5, 'delayPenalty': 192, 'penaltyUnit': 2, 'disclaimer': 0, 'totalDeduction': 592, 'excludeHours': 0, 'reason': '原因' },
    { 'repairNumber': '1003', 'cctvid': 'YL0912001-D003', 'malfunction': '無訊號', 'errorMonth': '2020/11', 'errorDate': '2020/11/1 4:00', 'repairTime': '2020/11/3 17:00', 'disconnectTime': 61, 'rentDeduction': 400, 'rentUnit': 5, 'delayPenalty': 192, 'penaltyUnit': 2, 'disclaimer': 0, 'totalDeduction': 592, 'excludeHours': 0, 'reason': '原因' },
    { 'repairNumber': '1004', 'cctvid': 'YL0912001-D004', 'malfunction': '無訊號', 'errorMonth': '2020/11', 'errorDate': '2020/11/1 4:00', 'repairTime': '2020/11/3 17:00', 'disconnectTime': 61, 'rentDeduction': 400, 'rentUnit': 5, 'delayPenalty': 192, 'penaltyUnit': 2, 'disclaimer': 0, 'totalDeduction': 592, 'excludeHours': 0, 'reason': '原因' },
    { 'repairNumber': '1005', 'cctvid': 'YL0912001-D005', 'malfunction': '藍畫面', 'errorMonth': '2020/11', 'errorDate': '2020/11/1 4:00', 'repairTime': '2020/11/3 17:00', 'disconnectTime': 61, 'rentDeduction': 400, 'rentUnit': 5, 'delayPenalty': 192, 'penaltyUnit': 2, 'disclaimer': 0, 'totalDeduction': 592, 'excludeHours': 0, 'reason': '原因' }
];


export const MAINTAIN: MaintainTotal[] = [
    { 'repairNumber': 0, 'completeRepair': 0, 'noncompleteRepair': 0, 'repairDelay': 0 }
];

export const MAINTAINDETAILS: MaintainDetails[] = [
    { 'cctvid': 'YL0912001-D001', 'intersection': '濱海路三段160巷', 'repairQuarter': '2020 Q4', 'repairDate': '2020/11/1', 'contractDate': '2020/11/30', 'isDelay': '否', 'delayDays': 0, 'extensionDate': '2020/12/5', 'reason': '強風特報' },
    { 'cctvid': 'YL0912001-D002', 'intersection': '濱海路三段160巷', 'repairQuarter': '2020 Q4', 'repairDate': '2020/11/1', 'contractDate': '2020/11/30', 'isDelay': '否', 'delayDays': 0, 'extensionDate': '2020/12/5', 'reason': '強風特報' },
    { 'cctvid': 'YL0912001-D003', 'intersection': '濱海路二段、慶天宮', 'repairQuarter': '2020 Q4', 'repairDate': '2020/11/1', 'contractDate': '2020/11/30', 'isDelay': '否', 'delayDays': 1, 'extensionDate': '2020/12/5', 'reason': '強風特報' },
    { 'cctvid': 'YL0912001-D004', 'intersection': '濱海路二段、慶天宮', 'repairQuarter': '2020 Q4', 'repairDate': '2020/11/1', 'contractDate': '2020/11/30', 'isDelay': '否', 'delayDays': 2, 'extensionDate': '2020/12/5', 'reason': '強風特報' },
    { 'cctvid': 'YL0912001-D005', 'intersection': '濱海路二段、烏石港路口', 'repairQuarter': '2020 Q4', 'repairDate': '2020/11/1', 'contractDate': '2020/11/30', 'isDelay': '否', 'delayDays': 3, 'extensionDate': '2020/12/5', 'reason': '強風特報' },
    { 'cctvid': 'YL0912001-D001', 'intersection': '濱海路三段160巷', 'repairQuarter': '2020 Q4', 'repairDate': '2020/11/1', 'contractDate': '2020/11/30', 'isDelay': '否', 'delayDays': 0, 'extensionDate': '2020/12/5', 'reason': '強風特報' },
    { 'cctvid': 'YL0912001-D002', 'intersection': '濱海路三段160巷', 'repairQuarter': '2020 Q4', 'repairDate': '2020/11/1', 'contractDate': '2020/11/30', 'isDelay': '否', 'delayDays': 0, 'extensionDate': '2020/12/5', 'reason': '強風特報' },
    { 'cctvid': 'YL0912001-D003', 'intersection': '濱海路二段、慶天宮', 'repairQuarter': '2020 Q4', 'repairDate': '2020/11/1', 'contractDate': '2020/11/30', 'isDelay': '否', 'delayDays': 1, 'extensionDate': '2020/12/5', 'reason': '強風特報' },
    { 'cctvid': 'YL0912001-D004', 'intersection': '濱海路二段、慶天宮', 'repairQuarter': '2020 Q4', 'repairDate': '2020/11/1', 'contractDate': '2020/11/30', 'isDelay': '否', 'delayDays': 2, 'extensionDate': '2020/12/5', 'reason': '強風特報' },
    { 'cctvid': 'YL0912001-D005', 'intersection': '濱海路二段、烏石港路口', 'repairQuarter': '2020 Q4', 'repairDate': '2020/11/1', 'contractDate': '2020/11/30', 'isDelay': '否', 'delayDays': 3, 'extensionDate': '2020/12/5', 'reason': '強風特報' }
];


export const HISTORYDETAILS: HistoryDetails[] = [
    { 'cctvid': 'YL0912001-D001', 'intersection': '濱海路三段160巷', 'videoError': '否', 'dataError': '否', 'errorDays': 0, 'recordIncorrect': '否', 'carplateIncorrect': '否', 'positionIncorrect': '否' },
    { 'cctvid': 'YL0912001-D002', 'intersection': '濱海路三段160巷', 'videoError': '否', 'dataError': '否', 'errorDays': 0, 'recordIncorrect': '否', 'carplateIncorrect': '否', 'positionIncorrect': '否' },
    { 'cctvid': 'YL0912001-D003', 'intersection': '濱海路二段、慶天宮', 'videoError': '否', 'dataError': '否', 'errorDays': 1, 'recordIncorrect': '否', 'carplateIncorrect': '否', 'positionIncorrect': '否' },
    { 'cctvid': 'YL0912001-D004', 'intersection': '濱海路二段、慶天宮', 'videoError': '否', 'dataError': '否', 'errorDays': 2, 'recordIncorrect': '否', 'carplateIncorrect': '否', 'positionIncorrect': '否' },
    { 'cctvid': 'YL0912001-D005', 'intersection': '濱海路二段、烏石港路口', 'videoError': '否', 'dataError': '否', 'errorDays': 3, 'recordIncorrect': '否', 'carplateIncorrect': '否', 'positionIncorrect': '否' },
    { 'cctvid': 'YL0912001-D001', 'intersection': '濱海路三段160巷', 'videoError': '否', 'dataError': '否', 'errorDays': 0, 'recordIncorrect': '否', 'carplateIncorrect': '否', 'positionIncorrect': '否' },
    { 'cctvid': 'YL0912001-D002', 'intersection': '濱海路三段160巷', 'videoError': '否', 'dataError': '否', 'errorDays': 0, 'recordIncorrect': '否', 'carplateIncorrect': '否', 'positionIncorrect': '否' },
    { 'cctvid': 'YL0912001-D003', 'intersection': '濱海路二段、慶天宮', 'videoError': '否', 'dataError': '否', 'errorDays': 1, 'recordIncorrect': '否', 'carplateIncorrect': '否', 'positionIncorrect': '否' },
    { 'cctvid': 'YL0912001-D004', 'intersection': '濱海路二段、慶天宮', 'videoError': '否', 'dataError': '否', 'errorDays': 2, 'recordIncorrect': '否', 'carplateIncorrect': '否', 'positionIncorrect': '否' },
    { 'cctvid': 'YL0912001-D005', 'intersection': '濱海路二段、烏石港路口', 'videoError': '否', 'dataError': '否', 'errorDays': 3, 'recordIncorrect': '否', 'carplateIncorrect': '否', 'positionIncorrect': '否' }
];
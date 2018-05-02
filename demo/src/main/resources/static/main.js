var incomesList;
var expensesList;
var realAssetsList;
var financesList;
var realAssetsTimePriceList = {};
var financesTimePriceList = {};
var incomesEditIndex;
var expensesEditIndex;
var realAssetsEditIndex;
var financesEditIndex;
var incomesStructureOfPerMonth = { '01' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '02' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '03' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '04' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '05' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '06' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '07' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '08' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '09' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '10' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '11' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '12' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}] };
var expensesStructureOfPerMonth ={ '01' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}], '02' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}], '03' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}], '04' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}], '05' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}], '06' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}], '07' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}], '08' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}], '09' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}], '10' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}], '11' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}], '12' : [{value: 0, name:'交通'}, {value: 0, name:'租赁'}, {value: 0, name:'教育'}, {value: 0, name:'衣服'}, {value: 0, name:'饮食'}, {value: 0, name:'旅游'}, {value: 0, name:'运动'}, {value: 0, name:'医疗'}, {value: 0, name:'水电费'}, {value: 0, name:'其他'}] };
var incomesTrendOfYear = [];
var expensesTrendOfYear = [];

var currentDate = new Date();
var currentMonth=currentDate.getMonth()+1;
var currentYear=currentDate.getFullYear().toString();
currentMonth =(currentMonth < 10 ? "0" + currentMonth : currentMonth);

function modifyTypeOfUpdatetime() {
    for (var i = 0; i < incomesList.length; ++i) {
        incomesList[i].updateTime = Date(incomesList[i].updateTime);
    }
}

function computeForOneMonthOneIncomeSource(month, data, i) {
    if (data[i].incomeItemSource === "工资") {
        if (data[i].incomeItemPeriod === "一次性收入")
            incomesStructureOfPerMonth[month][0].value += data[i].incomeItemAmount;
        else if (data[i].incomeItemPeriod === "本月每天收入") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].incomeItemTimePoint.split('-')[2]) + 1;
                incomesStructureOfPerMonth[month][0].value += data[i].incomeItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].incomeItemTimePoint.split('-')[2]) + 1;
                incomesStructureOfPerMonth[month][0].value += data[i].incomeItemAmount * interval;
            }
        }
        else if (data[i].incomeItemPeriod === "每月收入") {
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            incomesStructureOfPerMonth[month][0].value += data[i].incomeItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                incomesStructureOfPerMonth[i2][0].value += data[i].incomeItemAmount;
            }
            //incomesStructureOfPerMonth[month][0].value += data[i].incomeItemAmount;
        }
    }
    else if (data[i].incomeItemSource === "租赁") {
        if (data[i].incomeItemPeriod === "一次性收入")
            incomesStructureOfPerMonth[month][1].value += data[i].incomeItemAmount;
        else if (data[i].incomeItemPeriod === "本月每天收入") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].incomeItemTimePoint.split('-')[2]) + 1;
                incomesStructureOfPerMonth[month][1].value += data[i].incomeItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].incomeItemTimePoint.split('-')[2]) + 1;
                incomesStructureOfPerMonth[month][1].value += data[i].incomeItemAmount * interval;
            }
        }
        else if (data[i].incomeItemPeriod === "每月收入") {
            //incomesStructureOfPerMonth[month][1].value += data[i].incomeItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            incomesStructureOfPerMonth[month][1].value += data[i].incomeItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                incomesStructureOfPerMonth[i2][1].value += data[i].incomeItemAmount;
            }
        }
    }
    else if (data[i].incomeItemSource === "财产转让") {
        if (data[i].incomeItemPeriod === "一次性收入")
            incomesStructureOfPerMonth[month][2].value += data[i].incomeItemAmount;
        else if (data[i].incomeItemPeriod === "本月每天收入") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].incomeItemTimePoint.split('-')[2]) + 1;
                incomesStructureOfPerMonth[month][2].value += data[i].incomeItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].incomeItemTimePoint.split('-')[2]) + 1;
                incomesStructureOfPerMonth[month][2].value += data[i].incomeItemAmount * interval;
            }
        }
        else if (data[i].incomeItemPeriod === "每月收入") {
            //incomesStructureOfPerMonth[month][2].value += data[i].incomeItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            incomesStructureOfPerMonth[month][2].value += data[i].incomeItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                incomesStructureOfPerMonth[i2][2].value += data[i].incomeItemAmount;
            }
        }
    }
    else if (data[i].incomeItemSource === "礼金") {
        if (data[i].incomeItemPeriod === "一次性收入")
            incomesStructureOfPerMonth[month][3].value += data[i].incomeItemAmount;
        else if (data[i].incomeItemPeriod === "本月每天收入") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].incomeItemTimePoint.split('-')[2]) + 1;
                incomesStructureOfPerMonth[month][3].value += data[i].incomeItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].incomeItemTimePoint.split('-')[2]) + 1;
                incomesStructureOfPerMonth[month][3].value += data[i].incomeItemAmount * interval;
            }
        }
        else if (data[i].incomeItemPeriod === "每月收入") {
            //incomesStructureOfPerMonth[month][3].value += data[i].incomeItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            incomesStructureOfPerMonth[month][3].value += data[i].incomeItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                incomesStructureOfPerMonth[i2][3].value += data[i].incomeItemAmount;
            }
        }
    }
    else if (data[i].incomeItemSource === "其他") {
        if (data[i].incomeItemPeriod === "一次性收入")
            incomesStructureOfPerMonth[month][4].value += data[i].incomeItemAmount;
        else if (data[i].incomeItemPeriod === "本月每天收入") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].incomeItemTimePoint.split('-')[2]) + 1;
                incomesStructureOfPerMonth[month][4].value += data[i].incomeItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].incomeItemTimePoint.split('-')[2]) + 1;
                incomesStructureOfPerMonth[month][4].value += data[i].incomeItemAmount * interval;
            }
        }
        else if (data[i].incomeItemPeriod === "每月收入") {
            //incomesStructureOfPerMonth[month][4].value += data[i].incomeItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            incomesStructureOfPerMonth[month][5].value += data[i].incomeItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                incomesStructureOfPerMonth[i2][5].value += data[i].incomeItemAmount;
            }
        }
    }
}

function computeForOneMonthOneExpenseSource(month, data, i) {
    if (data[i].expenseItemSource === "交通") {
        if (data[i].expenseItemPeriod === "一次性支出")
            expensesStructureOfPerMonth[month][0].value += data[i].expenseItemAmount;
        else if (data[i].expenseItemPeriod === "本月每天支出") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][0].value += data[i].expenseItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][0].value += data[i].expenseItemAmount * interval;
            }
        }
        else if (data[i].expenseItemPeriod === "每月支出") {
            //expensesStructureOfPerMonth[month][0].value += data[i].expenseItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            expensesStructureOfPerMonth[month][0].value += data[i].expenseItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                expensesStructureOfPerMonth[i2][0].value += data[i].expenseItemAmount;
            }
        }
    }
    else if (data[i].expenseItemSource === "租赁") {
        if (data[i].expenseItemPeriod === "一次性支出")
            expensesStructureOfPerMonth[month][1].value += data[i].expenseItemAmount;
        else if (data[i].expenseItemPeriod === "本月每天支出") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][1].value += data[i].expenseItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][1].value += data[i].expenseItemAmount * interval;
            }
        }
        else if (data[i].expenseItemPeriod === "每月支出") {
            //expensesStructureOfPerMonth[month][1].value += data[i].expenseItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            expensesStructureOfPerMonth[month][1].value += data[i].expenseItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                expensesStructureOfPerMonth[i2][1].value += data[i].expenseItemAmount;
            }
        }
    }
    else if (data[i].expenseItemSource === "教育") {
        if (data[i].expenseItemPeriod === "一次性支出")
            expensesStructureOfPerMonth[month][2].value += data[i].expenseItemAmount;
        else if (data[i].expenseItemPeriod === "本月每天支出") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][2].value += data[i].expenseItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][2].value += data[i].expenseItemAmount * interval;
            }
        }
        else if (data[i].expenseItemPeriod === "每月支出") {
            //expensesStructureOfPerMonth[month][2].value += data[i].expenseItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            expensesStructureOfPerMonth[month][2].value += data[i].expenseItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                expensesStructureOfPerMonth[i2][2].value += data[i].expenseItemAmount;
            }
        }
    }
    else if (data[i].expenseItemSource === "衣服") {
        if (data[i].expenseItemPeriod === "一次性支出")
            expensesStructureOfPerMonth[month][3].value += data[i].expenseItemAmount;
        else if (data[i].expenseItemPeriod === "本月每天支出") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][3].value += data[i].expenseItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][3].value += data[i].expenseItemAmount * interval;
            }
        }
        else if (data[i].expenseItemPeriod === "每月支出") {
            //expensesStructureOfPerMonth[month][3].value += data[i].expenseItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            expensesStructureOfPerMonth[month][3].value += data[i].expenseItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                expensesStructureOfPerMonth[i2][3].value += data[i].expenseItemAmount;
            }
        }
    }
    else if (data[i].expenseItemSource === "饮食") {
        if (data[i].expenseItemPeriod === "一次性支出")
            expensesStructureOfPerMonth[month][4].value += data[i].expenseItemAmount;
        else if (data[i].expenseItemPeriod === "本月每天支出") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][4].value += data[i].expenseItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][4].value += data[i].expenseItemAmount * interval;
            }
        }
        else if (data[i].expenseItemPeriod === "每月支出") {
            //expensesStructureOfPerMonth[month][4].value += data[i].expenseItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            expensesStructureOfPerMonth[month][4].value += data[i].expenseItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                expensesStructureOfPerMonth[i2][4].value += data[i].expenseItemAmount;
            }
        }
    }
    else if (data[i].expenseItemSource === "旅游") {
        if (data[i].expenseItemPeriod === "一次性支出")
            expensesStructureOfPerMonth[month][5].value += data[i].expenseItemAmount;
        else if (data[i].expenseItemPeriod === "本月每天支出") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][5].value += data[i].expenseItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][5].value += data[i].expenseItemAmount * interval;
            }
        }
        else if (data[i].expenseItemPeriod === "每月支出") {
            //expensesStructureOfPerMonth[month][5].value += data[i].expenseItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            expensesStructureOfPerMonth[month][5].value += data[i].expenseItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                expensesStructureOfPerMonth[i2][5].value += data[i].expenseItemAmount;
            }
        }
    }
    else if (data[i].expenseItemSource === "运动") {
        if (data[i].expenseItemPeriod === "一次性支出")
            expensesStructureOfPerMonth[month][6].value += data[i].expenseItemAmount;
        else if (data[i].expenseItemPeriod === "本月每天支出") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][6].value += data[i].expenseItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][6].value += data[i].expenseItemAmount * interval;
            }
        }
        else if (data[i].expenseItemPeriod === "每月支出") {
            //expensesStructureOfPerMonth[month][6].value += data[i].expenseItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            expensesStructureOfPerMonth[month][6].value += data[i].expenseItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                expensesStructureOfPerMonth[i2][6].value += data[i].expenseItemAmount;
            }
        }
    }
    else if (data[i].expenseItemSource === "医疗") {
        if (data[i].expenseItemPeriod === "一次性支出")
            expensesStructureOfPerMonth[month][7].value += data[i].expenseItemAmount;
        else if (data[i].expenseItemPeriod === "本月每天支出") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][7].value += data[i].expenseItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][7].value += data[i].expenseItemAmount * interval;
            }
        }
        else if (data[i].expenseItemPeriod === "每月支出") {
            //expensesStructureOfPerMonth[month][7].value += data[i].expenseItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            expensesStructureOfPerMonth[month][7].value += data[i].expenseItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                expensesStructureOfPerMonth[i2][7].value += data[i].expenseItemAmount;
            }
        }
    }
    else if (data[i].expenseItemSource === "水电费") {
        if (data[i].expenseItemPeriod === "一次性支出")
            expensesStructureOfPerMonth[month][8].value += data[i].expenseItemAmount;
        else if (data[i].expenseItemPeriod === "本月每天支出") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][8].value += data[i].expenseItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][8].value += data[i].expenseItemAmount * interval;
            }
        }
        else if (data[i].expenseItemPeriod === "每月支出") {
            //expensesStructureOfPerMonth[month][8].value += data[i].expenseItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            expensesStructureOfPerMonth[month][8].value += data[i].expenseItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                expensesStructureOfPerMonth[i2][8].value += data[i].expenseItemAmount;
            }
        }
    }
    else if (data[i].expenseItemSource === "其他") {
        if (data[i].expenseItemPeriod === "一次性支出")
            expensesStructureOfPerMonth[month][9].value += data[i].expenseItemAmount;
        else if (data[i].expenseItemPeriod === "本月每天支出") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
                var interval = 31 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][9].value += data[i].expenseItemAmount * interval;
            }
            else {
                var interval = 30 - parseInt(data[i].expenseItemTimePoint.split('-')[2]) + 1;
                expensesStructureOfPerMonth[month][9].value += data[i].expenseItemAmount * interval;
            }
        }
        else if (data[i].expenseItemPeriod === "每月支出") {
            //expensesStructureOfPerMonth[month][9].value += data[i].expenseItemAmount;
            var i1 = 0;
            var i2 = "0" + i1;
            for (; i2 !== month; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
            }
            expensesStructureOfPerMonth[month][9].value += data[i].expenseItemAmount;
            for (; i1 <= 12; ++i1) {
                i2 = i1 < 10 ? "0" + i1 : i1;
                expensesStructureOfPerMonth[i2][9].value += data[i].expenseItemAmount;
            }
        }
    }
}

function computeForOneYearIncomeTrend(data, year) {
    incomesTrendOfYear = [];
    var incomeOfPerMonth = {'01': 0, '02': 0, '03': 0, '04': 0, '05': 0, '06': 0, '07': 0, '08': 0, '09': 0, '10': 0, '11': 0, '12': 0};
    for (var i = 0; i < data.length; ++i) {
        var incomeYearMonthDay = data[i].incomeItemTimePoint.split('-');
        if ( incomeYearMonthDay[0] === year) {
            if (data[i].incomeItemPeriod === "一次性收入" || data[i].incomeItemPeriod === "每年收入")
                incomeOfPerMonth[incomeYearMonthDay[1]] += data[i].incomeItemAmount;
            else if(data[i].incomeItemPeriod === "本月每天收入") {
                if (incomeYearMonthDay[1] === "01" || incomeYearMonthDay[1] === "03" || incomeYearMonthDay[1] === "05" || incomeYearMonthDay[1] === "07" || incomeYearMonthDay[1] === "08" || incomeYearMonthDay[1] === "10" || incomeYearMonthDay[1] === "12") {
                    var interval = 31 - parseInt(incomeYearMonthDay[2]) + 1;
                    incomeOfPerMonth[incomeYearMonthDay[1]] += data[i].incomeItemAmount * interval;
                }
                else {
                    var interval = 30 - parseInt(incomeYearMonthDay[2]) + 1;
                    incomeOfPerMonth[incomeYearMonthDay[1]] += data[i].incomeItemAmount*interval;
                }
            }
            else if(data[i].incomeItemPeriod === "每月收入") {
                var interval = 12 - parseInt(incomeYearMonthDay[1]);
                //incomeOfPerMonth[incomeYearMonthDay[1]] += data[i].incomeItemAmount * interval;
                for (var i1 = parseInt(incomeYearMonthDay[1]); i1 <= 12; ++ i1) {
                    var i2 = i1 < 10 ? "0" + i1 : i1;
                    incomeOfPerMonth[i2] += data[i].incomeItemAmount;
                }
            }
            else if(data[i].incomeItemPeriod === "每季度收入") {
                var interval = (12 - parseInt(incomeYearMonthDay[1])) / 3;
                for (var i1 = parseInt(incomeYearMonthDay[1]); i1 <= 12; i1 = i1 + 3) {
                    var i2 = i1 < 10 ? "0" + i1 : i1;
                    incomeOfPerMonth[i2] += data[i].incomeItemAmount;
                }
            }
        }
    }

    for (var i = 1; i < 13; ++i) {
        i = i < 10 ? '0'+ i : i;
        incomesTrendOfYear.push(incomeOfPerMonth[i]);
    }
}

function computeForOneYearExpenseTrend(data, year) {
    expensesTrendOfYear = [];
    var expenseOfPerMonth = {'01': 0, '02': 0, '03': 0, '04': 0, '05': 0, '06': 0, '07': 0, '08': 0, '09': 0, '10': 0, '11': 0, '12': 0};
    for (var i = 0; i < data.length; ++i) {
        var expenseYearMonthDay = data[i].expenseItemTimePoint.split('-');
        if ( expenseYearMonthDay[0] === year) {
            if (data[i].expenseItemPeriod === "一次性支出" || data[i].expenseItemPeriod === "每年支出")
                expenseOfPerMonth[expenseYearMonthDay[1]] += data[i].expenseItemAmount;
            else if(data[i].expenseItemPeriod === "本月每天支出") {
                if (expenseYearMonthDay[1] === "01" || expenseYearMonthDay[1] === "03" || expenseYearMonthDay[1] === "05" || expenseYearMonthDay[1] === "07" || expenseYearMonthDay[1] === "08" || expenseYearMonthDay[1] === "10" || expenseYearMonthDay[1] === "12") {
                    var interval = 31 - parseInt(expenseYearMonthDay[2]) + 1;
                    expenseOfPerMonth[expenseYearMonthDay[1]] += data[i].expenseItemAmount * interval;
                }
                else {
                    var interval = 30 - parseInt(expenseYearMonthDay[2]) + 1;
                    expenseOfPerMonth[expenseYearMonthDay[1]] += data[i].expenseItemAmount*interval;
                }
            }
            else if(data[i].expenseItemPeriod === "每月支出") {
                var interval = 12 - parseInt(expenseYearMonthDay[1]);
                //expenseOfPerMonth[expenseYearMonthDay[1]] += data[i].expenseItemAmount * interval;
                for (var i1 = parseInt(expenseYearMonthDay[1]); i1 <= 12; ++ i1) {
                    var i2 = i1 < 10 ? "0" + i1 : i1;
                    expenseOfPerMonth[i2] += data[i].expenseItemAmount;
                }
            }
            else if(data[i].expenseItemPeriod === "每季度支出") {
                var interval = (12 - parseInt(expenseYearMonthDay[1])) / 3;
                for (var i1 = parseInt(expenseYearMonthDay[1]); i1 <= 12; i1 = i1 + 3) {
                    var i2 = i1 < 10 ? "0" + i1 : i1;
                    expenseOfPerMonth[i2] += data[i].expenseItemAmount;
                }
            }
        }
    }

    for (var i = 1; i < 13; ++i) {
        i = i < 10 ? '0'+ i : i;
        expensesTrendOfYear.push(expenseOfPerMonth[i]);
    }
}

function computeForincomesStructureOfPerMonth(data) {
    //incomesStructureOfPerMonth = incomesStructureOfPerMonthInit();
    var k;
    for (var i = 1; i < 13; ++i) {
        k = i < 10 ? "0" + i : i;
        for (var j = 0; j < 5; ++j) {
            incomesStructureOfPerMonth[k][j].value = 0;
        }
    }

    if (data.length !== 0) {
        for (var i = 0; i < data.length; ++i) {
            var month = data[i].incomeItemTimePoint.split('-')[1];
            switch (month) {
                case '01':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
                case '02':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
                case '03':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
                case '04':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
                case '05':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
                case '06':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
                case '07':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
                case '08':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
                case '09':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
                case '10':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
                case '11':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
                case '12':
                    computeForOneMonthOneIncomeSource(month, data, i);
                    break;
            }
        }
    }
}

function computeForexpensesStructureOfPerMonth(data) {
    var k;
    for (var i = 1; i < 13; ++i) {
        k = i < 10 ? "0" + i : i;
        for (var j = 0; j < 10; ++j) {
            expensesStructureOfPerMonth[k][j].value = 0;
        }
    }

    if (data.length !== 0) {
        for (var i = 0; i < data.length; ++i) {
            var month = data[i].expenseItemTimePoint.split('-')[1];
            switch (month) {
                case '01':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
                case '02':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
                case '03':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
                case '04':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
                case '05':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
                case '06':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
                case '07':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
                case '08':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
                case '09':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
                case '10':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
                case '11':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
                case '12':
                    computeForOneMonthOneExpenseSource(month, data, i);
                    break;
            }
        }
    }
}

function computeForOneRealAssetsPic_arr(data) {
    realAssetsTimePriceList = {};
    for(var x in data) {
        if(!realAssetsTimePriceList.hasOwnProperty(x)) {
            realAssetsTimePriceList[x] = {'time':[], 'price':[]};
        }
        for (var index = 0; index < data[x].length; ++index) {
            realAssetsTimePriceList[x]['time'].push(data[x][index].realAssetsItemTimePoint);
            realAssetsTimePriceList[x]['price'].push(data[x][index].realAssetsItemAmount);
        }
    }
}

function computeForOneFinancePic_arr(data) {
    financesTimePriceList = {};
    for(var x in data) {
        if(!financesTimePriceList.hasOwnProperty(x)) {
            financesTimePriceList[x] = {'time':[], 'price':[]};
        }
        for (var index = 0; index < data[x].length; ++index) {
            financesTimePriceList[x]['time'].push(data[x][index].financeItemTimePoint);
            financesTimePriceList[x]['price'].push(data[x][index].financeItemAmount);
        }
    }
}

function requestOauth2TOken(username, password) {
    var success = false;

    $.ajax({
        url: '/uaa/oauth/token',
        datatype: 'json',
        type: 'post',
        headers: {'Authorization': 'Basic YnJvd3Nlcjo='},
        async: false,
        data: {
            scope: 'ui',
            username: username,
            password: password,
            grant_type: 'password',
            client_id: 'browser',
            client_secret: '123456'
        },
        success: function (data) {
            localStorage.setItem('token', data.access_token);
            success = true;
        },
        error: function () {
            removeOauthTokenFromStorage();
        }
    });

    return success;
}

function getOauthTokenFromStorage() {
    return localStorage.getItem('token');
}

function removeOauthTokenFromStorage() {
    return localStorage.removeItem('token');
}

function getCurrentAccount(username) {

    var token = getOauthTokenFromStorage();
    var account = null;

    if (token) {
        $.ajax({
            url: '/accounts/' + username,
            datatype: 'json',
            type: 'get',
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            success: function (data) {
                account = data;
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }

    return account;
}

function initialCenter(account) {
    $('#updateTime').text(new Date(account.updateTime));
    $('#savingAmount').text(account.savingAmount);
    $('#name').text(account.name);
    $('#sex').text(account.sex);
    $('#age').text(account.age);
}

$(document).ready(function () {
    $("#loginbutton").click (function () {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var isLoginSuccess = false;
        localStorage.setItem('username', username);

        $.ajax({
            url: '/uaa/login',
            datatype: 'json',
            type: 'post',
            async: false,
            data: {
                username: username,
                password: password
            },
            success: function (data) {
                //var json_data = JSON.parse(data);
                var status = data.status;
                if (status.toString() === "success") {
                    if (requestOauth2TOken(username, password)) {
                        $('#loginstatus').text("登陆成功");
                        $('#logoutbtn').show();
                        $('#loginbtn').hide();
                        var account = getCurrentAccount(username);
                        localStorage.setItem('account', account);
                        $('#loginpagediv').hide();
                        initialCenter(account);
                        $('#mainpagediv').show();
                    }
                    else {
                        $('#loginstatus').text("登陆失败");
                    }
                }
                else if (status.toString() === 'fail')
                    $('#loginstatus').text("用户名或密码错误");
            },
            error: function () {
                $('#loginstatus').text("登陆失败");
            }
        });
    });
});

$(document).ready(function () {
    $('#sidenav li').click(function () {
        $(this).addClass("active").siblings("li").removeClass("active");

        var username = localStorage.getItem('username');
        var token = getOauthTokenFromStorage();

        if (this.id === "center") {
            $('#centerdiv').show();
            $('#incomemanagementdiv').hide();
            $('#expensemanagementdiv').hide();
            $('#financemanagementdiv').hide();
            $('#financialstatementsdiv').hide();
            $('#realassetsdiv').hide();
        }
        else if (this.id === "incomemanagement") {
            $('#centerdiv').hide();
            $('#incomemanagementdiv').show();
            $('#expensemanagementdiv').hide();
            $('#financemanagementdiv').hide();
            $('#financialstatementsdiv').hide();
            $('#realassetsdiv').hide();
            $('#setIncomeStructureOfMonth').val(currentMonth);
            $('#setIncomeTrendOfYearValue').val(currentYear);
            $.ajax({
                url: '/incomes/' + username,
                datatype: 'json',
                type: 'get',
                headers: {'Authorization': 'Bearer ' + token},
                async: false,
                success: function (data) {
                    incomesList = data;
                    computeForincomesStructureOfPerMonth(data);
                    computeForOneYearIncomeTrend(data, currentYear);
                    setDataForIncomeStructureOfMonthOption(currentMonth);
                    setDataForIncomeTrendOfYear();
                    incomesStructureOfMonth_chart.setOption(incomeStructureOfMonth_option);
                    incomeTrendOfYear_chart.setOption(incomeTrendOfYear_option);
                    loadIncomeTable(data);
                },
                error: function () {

                }
            });
        }
        else if (this.id === "expensemanagement") {
            $('#centerdiv').hide();
            $('#incomemanagementdiv').hide();
            $('#expensemanagementdiv').show();
            $('#financemanagementdiv').hide();
            $('#financialstatementsdiv').hide();
            $('#realassetsdiv').hide();
            $('#setExpenseStructureOfMonth').val(currentMonth);
            $('#setExpenseTrendOfYearValue').val(currentYear);
            $.ajax({
                url: '/expenses/' + username,
                datatype: 'json',
                type: 'get',
                headers: {'Authorization': 'Bearer ' + token},
                async: false,
                success: function (data) {
                    expensesList = data;
                    computeForexpensesStructureOfPerMonth(data);
                    computeForOneYearExpenseTrend(data, currentYear);
                    setDataForexpenseStructureOfMonthOption(currentMonth);
                    setDataForExpenseTrendOfYear();
                    expensesStructureOfMonth_chart.setOption(expenseStructureOfMonth_option);
                    expenseTrendOfYear_char.setOption(expenseTrendOfYear_option);
                    loadExpenseTable(data);
                },
                error: function () {

                }
            });
        }
        else if (this.id === "financemanagement") {
            $('#centerdiv').hide();
            $('#incomemanagementdiv').hide();
            $('#expensemanagementdiv').hide();
            $('#financemanagementdiv').show();
            $('#financialstatementsdiv').hide();
            $('#realassetsdiv').hide();

            $.ajax({
                url: '/finances/' + username,
                datatype: 'json',
                type: 'get',
                headers: {'Authorization': 'Bearer ' + token},
                async: false,
                success: function (data) {
                    financesList = [];
                    computeForOneFinancePic_arr(data);
                    var selectlabel = document.getElementById('setFinanceItemNameOfSelectLabel');
                    selectlabel.options.length = 0;

                    for(var x in data) {
                        if (data[x].length !== 0) {
                            selectlabel.options.add(new Option(x, x));
                            financesList = financesList.concat(data[x]);
                        }
                    }
                    var selectfinance = selectlabel.value;
                    if (selectfinance !== '') {
                        setDataForFinance(selectfinance);
                        oneFinancePic_chart.setOption(oneFinancePic_option);
                    }
                    loadFinanceTable(financesList);
                },
                error: function () {

                }
            });
        }
        else if (this.id === "financialstatements") {
            $('#centerdiv').hide();
            $('#incomemanagementdiv').hide();
            $('#expensemanagementdiv').hide();
            $('#financemanagementdiv').hide();
            $('#financialstatementsdiv').show();
            $('#realassetsdiv').hide();
        }
        else if (this.id === "realassets") {
            $('#centerdiv').hide();
            $('#incomemanagementdiv').hide();
            $('#expensemanagementdiv').hide();
            $('#financemanagementdiv').hide();
            $('#financialstatementsdiv').hide();
            $('#realassetsdiv').show();

            $.ajax({
                url: '/realassets/' + username,
                datatype: 'json',
                type: 'get',
                headers: {'Authorization': 'Bearer ' + token},
                async: false,
                success: function (data) {
                    realAssetsList = [];
                    computeForOneRealAssetsPic_arr(data);
                    var selectlable = document.getElementById('setRealAssetsItemNameOfSelectLabel');
                    selectlable.options.length = 0;

                    for(var x in data) {
                        if (data[x].length !== 0) {
                            selectlable.options.add(new Option(x, x));
                            realAssetsList = realAssetsList.concat(data[x]);
                        }
                    }
                    var selectRealAssets = selectlable.value;
                    if (selectRealAssets !== '') {
                        setDataForRealAssets(selectRealAssets);
                        oneRealAssetsPic_chart.setOption(oneRealAssetsPic_option);
                    }
                    loadRealAssetsTable(realAssetsList);
                },
                error: function () {

                }
            });
        }
    });
});

function setPersonalInfo() {
    var token = getOauthTokenFromStorage();
    var name = document.getElementById("setName").value;
    var sex = $("#setSex").find("option:selected").val();
    var age = document.getElementById("setAge").value;
    var savingAmount = document.getElementById("setSavingAmount").value;
    var updateTime = new Date();

    if (name === "") {
        alert("请输入姓名！");
        return false;
    }

    if (sex === "") {
        alert("请输入性别！");
        return false;
    }

    if (age === "") {
        alert("请输入年龄！")
        return false;
    }

    if (savingAmount === "") {
        alert("请输入储蓄金额！");
        return false;
    }

    if (token) {
        $.ajax({
            url: '/accounts/setPersonalInfo',
            datatype: 'json',
            type: 'post',
            contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            data: JSON.stringify({
                username: localStorage.getItem('username'),
                updateTime: updateTime,
                name: name,
                age: age,
                sex: sex,
                savingAmount: savingAmount
            }),
            success: function (data) {
                if (data === "success") {
                    $("#updateTime").text(new Date(updateTime));
                    $("#savingAmount").text(savingAmount);
                    $("#name").text(name);
                    $("#sex").text(sex);
                    $("#age").text(age);
                    $("#setPersonalInfoModal").modal('hide');
                }
                else if (data === "fail")
                    alert("修改个人信息失败!");
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function addIncomeItem() {
    var token = getOauthTokenFromStorage();
    var incomeItemName = document.getElementById("setIncomeItemName").value;
    var incomeItemAmount = document.getElementById("setIncomeItemAmount").value;
    var incomeItemTimePoint = document.getElementById("setIncomeItemTimePoint").value;
    var incomeItemSource = $("#setIncomeItemSource").find("option:selected").val();
    var incomeItemMode = $("#setIncomeItemMode").find("option:selected").val();
    var incomeItemPeriod = $("#setIncomeItemPeriod").find("option:selected").val();
    var incomeItemInfo = document.getElementById("setIncomeItemInfo").value;
    var updateTime = new Date();
    var username = localStorage.getItem('username');

    if(incomeItemName === "") {
        alert("请输入收入项目名称");
        return false;
    }

    if (incomeItemAmount === "") {
        alert("请输入收入金额");
        return false;
    }
    else if (!parseFloat(incomeItemAmount)) {
        alert("金额请输入正数");
        return false;
    }
    else if (parseFloat(incomeItemAmount) < 0) {
        alert("金额请输入正数");
        return false;
    }


    if (incomeItemTimePoint === "") {
        alert("请输入收入时间");
        return false;
    }
    //$("#addIncomeItemModal").modal('hide');
    if (token) {
        $.ajax({
            url: '/incomes/addIncomeItem/' + username,
            datatype: 'json',
            type: 'post',
            contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            data: JSON.stringify({
                incomeItemName: incomeItemName,
                incomeItemAmount: incomeItemAmount,
                incomeItemTimePoint: incomeItemTimePoint,
                incomeItemSource: incomeItemSource,
                incomeItemMode: incomeItemMode,
                incomeItemPeriod: incomeItemPeriod,
                incomeItemInfo: incomeItemInfo,
                updateTime: updateTime
            }),
            success: function (data) {
                $("#setIncomeItemName").val("");
                $("#setIncomeItemAmount").val("");
                $("#setIncomeItemTimePoint").val("");
                $("#setIncomeItemInfo").val("");
                $("#setIncomeItemMode").val("现金");
                $("#setIncomeItemSource").val("工资");
                $("#setIncomeItemPeriod").val("一次性收入");
                $("#addIncomeItemModal").modal('hide');
                incomesList = data;
                computeForincomesStructureOfPerMonth(data);
                $('#setIncomeStructureOfMonth').val(currentMonth);
                $('#setIncomeTrendOfYearValue').val(currentYear);
                computeForOneYearIncomeTrend(data, currentYear);
                setDataForIncomeStructureOfMonthOption(currentMonth);
                setDataForIncomeTrendOfYear();
                incomesStructureOfMonth_chart.setOption(incomeStructureOfMonth_option);
                incomeTrendOfYear_chart.setOption(incomeTrendOfYear_option);
                loadIncomeTable(data);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function initAddIncomeModal() {
    document.getElementById("addIncomeItemModalLabel").innerHTML = "新建收入项";
    $("#setIncomeItemName").attr("readOnly", false).val("");
    $("#setIncomeItemAmount").val("");
    $("#setIncomeItemTimePoint").val("");
    $("#setIncomeItemInfo").val("");
    $("#setIncomeItemMode").val("现金");
    $("#setIncomeItemSource").val("工资");
    $("#setIncomeItemPeriod").val("一次性收入");
}

function addIncomeItemBatch() {
    var username =  localStorage.getItem('username');
    var token = getOauthTokenFromStorage();
    var formData = new FormData();
    var fileobj = document.getElementById('addIncomeItemBatchFile').files[0];
    var filename = document.getElementById('addIncomeItemBatchFile').value;

    if (filename === "") {
        alert("请选择文件！");
        return false;
    }

    formData.append("file", fileobj);
    formData.append("filename", filename);

    $.ajax({
        url: '/zuul/incomes/uploadFile/' + username,
        type: 'POST',
        headers: {'Authorization': 'Bearer ' + token},
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function (data) {
            alert(data);
        },
        error: function () {
            
        }
    });

}

function addExpenseItem() {
    var token = getOauthTokenFromStorage();
    var expenseItemName = document.getElementById("setExpenseItemName").value;
    var expenseItemAmount = document.getElementById("setExpenseItemAmount").value;
    var expenseItemTimePoint = document.getElementById("setExpenseItemTimePoint").value;
    var expenseItemSource = $("#setExpenseItemSource").find("option:selected").val();
    var expenseItemMode = $("#setExpenseItemMode").find("option:selected").val();
    var expenseItemPeriod = $("#setExpenseItemPeriod").find("option:selected").val();
    var expenseItemInfo = document.getElementById("setExpenseItemInfo").value;
    var updateTime = new Date();
    var username = localStorage.getItem('username');

    if(expenseItemName === "") {
        alert("请输入支出项目名称");
        return false;
    }

    if (expenseItemAmount === "") {
        alert("请输入支出金额");
        return false;
    }
    else if (!parseFloat(expenseItemAmount)) {
        alert("金额请输入正数");
        return false;
    }
    else if (parseFloat(expenseItemAmount) < 0) {
        alert("金额请输入正数");
        return false;
    }


    if (expenseItemTimePoint === "") {
        alert("请输入支出时间");
        return false;
    }

    if(token) {
        $.ajax({
            url: '/expenses/addExpenseItem/' + username,
            datatype: 'json',
            type: 'post',
            contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            data: JSON.stringify({
                expenseItemName: expenseItemName,
                expenseItemAmount: expenseItemAmount,
                expenseItemTimePoint: expenseItemTimePoint,
                expenseItemSource: expenseItemSource,
                expenseItemMode: expenseItemMode,
                expenseItemPeriod: expenseItemPeriod,
                expenseItemInfo: expenseItemInfo,
                updateTime: updateTime
            }),
            success: function (data) {
                $("#setExpenseItemName").val("");
                $("#setExpenseItemAmount").val("");
                $("#setExpenseItemTimePoint").val("");
                $("#setExpenseItemInfo").val("");
                $("#setExpenseItemMode").val("现金");
                $("#setExpenseItemSource").val("交通");
                $("#setExpenseItemPeriod").val("一次性支出");
                $("#addExpenseItemModal").modal('hide');
                expensesList = data;
                computeForexpensesStructureOfPerMonth(data);
                $('#setExpenseStructureOfMonth').val(currentMonth);
                $('#setExpenseTrendOfYearValue').val(currentYear);
                computeForOneYearExpenseTrend(data, currentYear);
                setDataForexpenseStructureOfMonthOption(currentMonth);
                setDataForExpenseTrendOfYear();
                expensesStructureOfMonth_chart.setOption(expenseStructureOfMonth_option);
                expenseTrendOfYear_char.setOption(expenseTrendOfYear_option);
                loadExpenseTable(data);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function initAddExpenseModal() {
    document.getElementById("addExpenseItemModalLabel").innerHTML = "新建支出项";
    $("#setExpenseItemName").attr("readOnly", false).val("");
    $("#setExpenseItemAmount").val("");
    $("#setExpenseItemTimePoint").val("");
    $("#setExpenseItemInfo").val("");
    $("#setExpenseItemMode").val("现金");
    $("#setExpenseItemSource").val("交通");
    $("#setExpenseItemPeriod").val("一次性支出");
}

function addExpenseItemBatch() {
    var username =  localStorage.getItem('username');
    var token = getOauthTokenFromStorage();
    var formData = new FormData();
    var fileobj = document.getElementById('addExpenseItemBatchFile').files[0];
    var filename = document.getElementById('addExpenseItemBatchFile').value;

    if (filename === "") {
        alert("请选择文件！");
        return false;
    }

    formData.append("file", fileobj);
    formData.append("filename", filename);

    $.ajax({
        url: '/zuul/expenses/uploadFile/' + username,
        type: 'POST',
        headers: {'Authorization': 'Bearer ' + token},
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function (data) {
            alert(data);
        },
        error: function () {

        }
    });
}

function addRealAssetsItem() {
    var token = getOauthTokenFromStorage();
    var username = localStorage.getItem('username');
    var realAssetsItemName = document.getElementById('setRealAssetsItemName').value;
    var realAssetsItemAmount = document.getElementById('setRealAssetsItemAmount').value;
    var realAssetsItemTimePoint = document.getElementById('setRealAssetsItemTimePoint').value;
    var realAssetsItemInfo = document.getElementById('setExpenseItemInfo').value;

    if (realAssetsItemName === "") {
        alert("请输入实物资产名称");
        return false;
    }
    if (realAssetsItemAmount === "") {
        alert("请输入实物资产金额");
        return false;
    }
    if (parseFloat(realAssetsItemAmount) < 0) {
        alert("请输入正数");
        return false;
    }
    if (!parseFloat(realAssetsItemAmount)) {
        alert("请输入正数");
        return false;
    }

    if (token) {
        $.ajax({
            url: '/realassets/addRealAssetsItem/' + username,
            datatype: 'json',
            type: 'post',
            contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            data:
                JSON.stringify({
                realAssetsItemName: realAssetsItemName,
                realAssetsItemAmount: realAssetsItemAmount,
                realAssetsItemTimePoint: realAssetsItemTimePoint,
                realAssetsItemInfo:realAssetsItemInfo
                }),
            success: function (data) {
                $("#setRealAssetsItemName").val("");
                $("#setRealAssetsItemAmount").val("");
                $("#setRealAssetsItemTimePoint").val("");
                $("#setRealAssetsItemInfo").val("");
                $("#addRealAssetsItemModal").modal('hide');
                realAssetsList = [];
                computeForOneRealAssetsPic_arr(data);
                var selectlable = document.getElementById('setRealAssetsItemNameOfSelectLabel');
                selectlable.options.length = 0;

                for(var x in data) {
                    if (data[x].length !== 0) {
                        selectlable.options.add(new Option(x, x));
                        realAssetsList = realAssetsList.concat(data[x]);
                    }
                }
                var selectRealAssets = selectlable.value;
                if (selectRealAssets !== '') {
                    setDataForRealAssets(selectRealAssets);
                    oneRealAssetsPic_chart.setOption(oneRealAssetsPic_option);
                }
                loadRealAssetsTable(realAssetsList);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function initRealAssetsModal() {
    document.getElementById('addRealAssetsItemModalLabel').innerHTML = "新建实物资产项";
    $("#setRealAssetsItemName").attr("readOnly", false).val("");
    $("#setRealAssetsItemAmount").val("");
    $("#setRealAssetsItemTimePoint").val("");
    $("#setRealAssetsItemInfo").val("");
}

function addFinanceItem() {
    var token = getOauthTokenFromStorage();
    var username = localStorage.getItem('username');
    var financeItemName = document.getElementById('setFinanceItemName').value;
    var financeItemKind = $("#setFinanceItemKind").find("option:selected").val();
    var financeItemOutOrIn = $("#setFinanceItemOutOrIn").find("option:selected").val();
    var financeItemPerPrice = document.getElementById('setFinanceItemPerPrice').value;
    var financeItemAmount = document.getElementById('setFinanceItemAmount').value;
    var financeItemTimePoint = document.getElementById('setFinanceItemTimePoint').value;
    var financeItemInfo = document.getElementById('setFinanceItemInfo').value;

    if (token) {
        $.ajax({
            url: '/finances/addFinanceProductItem/' + username,
            datatype: 'json',
            type: 'post',
            contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            data:
                JSON.stringify({
                    financeItemName: financeItemName,
                    financeItemKind: financeItemKind,
                    financeItemOutOrIn: financeItemOutOrIn,
                    financeItemPerPrice: financeItemPerPrice,
                    financeItemAmount: financeItemAmount,
                    financeItemTimePoint: financeItemTimePoint,
                    financeItemInfo: financeItemInfo
                }),
            success: function (data) {
                $("#setFinanceItemName").val("");
                $("#setFinanceItemKind").val("股票");
                $("#setFinanceItemOutOrIn").val("买入");
                $("#setFinanceItemPerPrice").val("");
                $("#setFinanceItemAmount").val("");
                $("#setFinanceItemTimePoint").val("");
                $("#setFinanceItemInfo").val("");
                $("#addFinanceItemModal").modal('hide');

                financesList = [];
                computeForOneFinancePic_arr(data);
                var selectlabel = document.getElementById('setFinanceItemNameOfSelectLabel');
                selectlabel.options.length = 0;

                for(var x in data) {
                    if (data[x].length !== 0) {
                        selectlabel.options.add(new Option(x, x));
                        financesList = financesList.concat(data[x]);
                    }
                }
                var selectfinance = selectlabel.value;
                if (selectfinance !== '') {
                    setDataForFinance(selectfinance);
                    oneFinancePic_chart.setOption(oneFinancePic_option);
                }
                loadFinanceTable(financesList);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function initFinanceModal() {
    document.getElementById('addFinanceItemModalLabel').innerHTML = "新建理财项目";
    $("#setFinanceItemName").attr("readOnly", false).val("");
    $("#setFinanceItemKind").val("股票");
    $("#setFinanceItemOutOrIn").val("买入");
    $("#setFinanceItemPerPrice").val("");
    $("#setFinanceItemAmount").val("");
    $("#setFinanceItemTimePoint").val("");
    $("#setFinanceItemInfo").val("");
}

$(document).ready(function () {
    $(function () {
        $('#setIncomeItemTimePoint').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true,
            forceParse: true,
            language: 'cn',
            endDate : new Date()
        });
    });
});

$(document).ready(function () {
    $(function () {
        $('#setExpenseItemTimePoint').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true,
            forceParse: true,
            language: 'cn',
            endDate : new Date()
        });
    });
});

$(document).ready(function () {
    $(function () {
        $('#setIncomeTrendOfYearValue').datepicker({
            format: 'yyyy',
            autoclose: true,
            forceParse: true,
            language: 'cn',
            startView: 2,
            maxViewMode: 2,
            minViewMode:2
        });
    });
});

$(document).ready(function () {
    $(function () {
        $('#setExpenseTrendOfYearValue').datepicker({
            format: 'yyyy',
            autoclose: true,
            forceParse: true,
            language: 'cn',
            startView: 2,
            maxViewMode: 2,
            minViewMode:2
        });
    });
});

$(document).ready(function () {
    $(function () {
        $('#setRealAssetsItemTimePoint').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true,
            forceParse: true,
            language: 'cn',
            endDate : new Date()
        });
    });
});

$(document).ready(function () {
    $(function () {
        $('#setFinanceItemTimePoint').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true,
            forceParse: true,
            language: 'cn',
            endDate : new Date()
        });
    });
});

function loadIncomeTable(data) {
    $('#incomeTable').bootstrapTable('destroy').bootstrapTable({
        method: 'get',
        cache: false,
        height: 400,
        striped: true,
        pagination: true,
        pageSize: 20,
        pageNumber:1,
        pageList: [10, 20, 50, 100, 200, 500],
        sidePagination:'client',
        search: false,
        showColumns: true,
        showRefresh: false,
        showExport: false,
        columns: [{
            field: 'incomeItemName',
            title: '收入项名称'
        }, {
            field: 'incomeItemAmount',
            title: '金额'
        }, {
            field: 'incomeItemTimePoint',
            title: '时间'
        }, {
            field: 'incomeItemSource',
            title: '来源'
        }, {
            field: 'incomeItemMode',
            title: '方式'
        }, {
            field: 'incomeItemPeriod',
            title: '频率'
        }/*, {
            field: 'updateTime',
            title: '更新时间'
        }*/, {
            field: 'incomeItemInfo',
            title: '备注'
        }, {
            field: 'operate',
            title: '操作',
            formatter: operateFormatterForIncome
        }],
        data: data
    });
}

function loadExpenseTable(data) {
    $('#expenseTable').bootstrapTable('destroy').bootstrapTable({
        method: 'get',
        cache: false,
        height: 400,
        striped: true,
        pagination: true,
        pageSize: 20,
        pageNumber:1,
        pageList: [10, 20, 50, 100, 200, 500],
        sidePagination:'client',
        search: false,
        showColumns: true,
        showRefresh: false,
        showExport: false,
        columns: [{
            field: 'expenseItemName',
            title: '支出项名称'
        }, {
            field: 'expenseItemAmount',
            title: '金额'
        }, {
            field: 'expenseItemTimePoint',
            title: '时间'
        }, {
            field: 'expenseItemSource',
            title: '来源'
        }, {
            field: 'expenseItemMode',
            title: '方式'
        }, {
            field: 'expenseItemPeriod',
            title: '频率'
        }/*, {
            field: 'updateTime',
            title: '更新时间'
        }*/, {
            field: 'expenseItemInfo',
            title: '备注'
        }, {
            field: 'operate',
            title: '操作',
            formatter: operateFormatterForExpense
        }],
        data: data
    });
}

function loadRealAssetsTable(data) {
    $('#realassetsTable').bootstrapTable('destroy').bootstrapTable({
        method: 'get',
        cache: false,
        height: 400,
        striped: true,
        pagination: true,
        pageSize: 20,
        pageNumber:1,
        pageList: [10, 20, 50, 100, 200, 500],
        sidePagination:'client',
        search: false,
        showColumns: true,
        showRefresh: false,
        showExport: false,
        columns: [{
            field: 'realAssetsItemName',
            title: '实物资产项名称'
        }, {
            field: 'realAssetsItemAmount',
            title: '金额'
        }, {
            field: 'realAssetsItemTimePoint',
            title: '时间'
        }, {
            field: 'realAssetsItemInfo',
            title: '备注'
        }, {
            field: 'operate',
            title: '操作',
            formatter: operateFormatterForRealAssets
        }],
        data: data
    });
}

function loadFinanceTable(data) {
    $('#financeTable').bootstrapTable('destroy').bootstrapTable({
        method: 'get',
        cache: false,
        height: 400,
        striped: true,
        pagination: true,
        pageSize: 20,
        pageNumber:1,
        pageList: [10, 20, 50, 100, 200, 500],
        sidePagination:'client',
        search: false,
        showColumns: true,
        showRefresh: false,
        showExport: false,
        columns: [{
            field: 'financeItemName',
            title: '理财项目名称'
        }, {
            field: 'financeItemKind',
            title: '理财项目类别'
        }, {
            field: 'financeItemOutOrIn',
            title: '买入或卖出'
        }, {
            field: 'financeItemPerPrice',
            title: '单价'
        }, {
            field: 'financeItemAmount',
            title: '数量'
        }, {
            field: 'financeItemTimePoint',
            title: '时间'
        }, {
            field: 'financeItemInfo',
            title: '备注'
        }, {
            field: 'operate',
            title: '操作',
            formatter: operateFormatterForFinance
        }],
        data: data
    });
}

var operateFormatterForIncome = function(value, row, index) {
    return [
        '<button class="btn btn-info btn-sm rightSize detailBtn" type="button" onclick="editForIncome(\'' + row.incomeItemName+ '\', \''+row.incomeItemAmount+'\', \''+ row.incomeItemTimePoint+ '\', \'' + row.incomeItemSource + '\', \'' + row.incomeItemMode + '\', \'' + row.incomeItemInfo + '\', \'' + row.updateTime + '\', \'' + row.incomeItemPeriod + '\', \'' + index + '\')"><i class="Edit fa fa-paste"></i> 修改</button>',
        '<button class="btn btn-danger btn-sm rightSize packageBtn" type="button" onclick="delIncomeItem(\'' + row.incomeItemName + '\', \''+ index + '\')"><i class="Delete fa fa-envelope"></i> 删除</button>'
    ].join('');
};

var operateFormatterForExpense = function (value, row, index) {
    return [
        '<button class="btn btn-info btn-sm rightSize detailBtn" type="button" onclick="editForExpense(\'' + row.expenseItemName+ '\', \''+row.expenseItemAmount+'\', \''+ row.expenseItemTimePoint+ '\', \'' + row.expenseItemSource + '\', \'' + row.expenseItemMode + '\', \'' + row.expenseItemInfo + '\', \'' + row.updateTime + '\', \'' + row.expenseItemPeriod + '\', \'' + index + '\')"><i class="Edit fa fa-paste"></i> 修改</button>',
        '<button class="btn btn-danger btn-sm rightSize packageBtn" type="button" onclick="delExpenseItem(\'' + row.expenseItemName + '\', \''+ index + '\')"><i class="Delete fa fa-envelope"></i> 删除</button>'
    ].join('');
};

var operateFormatterForRealAssets = function (value, row, index) {
    return [
        '<button class="btn btn-info btn-sm rightSize detailBtn" type="button" onclick="editForRealAssets(\'' + row.realAssetsItemName + '\', \'' + row.realAssetsItemAmount + '\', \'' + row.realAssetsItemTimePoint + '\', \'' + row.realAssetsItemInfo + '\', \'' + index + '\')"><i class="Edit fa fa-paste"></i> 修改</button>',
        '<button class="btn btn-danger btn-sm rightSize packageBtn" type="button" onclick="delRealAssetItem(\'' + row.realAssetsItemName + '\', \'' + row.realAssetsItemAmount + '\', \'' + row.realAssetsItemTimePoint + '\', \'' + row.realAssetsItemInfo + '\', \'' + index + '\')"><i class="Delete fa fa-envelope"></i> 删除</button>'
    ].join('');
};

var operateFormatterForFinance = function (value, row, index) {
    return [
        '<button class="btn btn-info btn-sm rightSize detailBtn" type="button" onclick="editForFinance(\'' + row.financeItemName + '\', \'' + row.financeItemKind + '\', \'' + row.financeItemOutOrIn + '\', \'' +  row.financeItemPerPrice + '\', \'' + row.financeItemAmount + '\', \'' + row.financeItemTimePoint + '\', \'' + row.financeItemInfo + '\', \'' + index + '\')"><i class="Edit fa fa-paste"></i> 修改</button>',
        '<button class="btn btn-danger btn-sm rightSize packageBtn" type="button" onclick="delFinanceItem(\'' + row.financeItemName + '\', \'' + row.financeItemAmount + '\', \'' + row.financeItemTimePoint + '\', \'' + row.financeItemInfo + '\', \'' + index + '\')"><i class="Delete fa fa-envelope"></i> 删除</button>'
    ].join('');
};

function editForIncome(incomeItemName, incomeItemAmount, incomeItemTimePoint, incomeItemSource, incomeItemMode, incomeItemInfo, updateTime, incomeItemPeriod, index) {
    if (incomeItemName[0] === "股" && incomeItemName[1] === "票" && incomeItemName[2] === "-") {
        alert("理财项目只能在理财管理修改！");
        return false;
    }
    else if (incomeItemName[0] === "基" && incomeItemName[1] === "金" && incomeItemName[2] === "-") {
        alert("理财项目只能在理财管理修改！");
        return false;
    }
    else {
        $("#addIncomeItemModal").modal('show');
        document.getElementById("addIncomeItemModalLabel").innerHTML = "修改收入项";
        $("#addIncomesItemBtn").hide();
        $("#editIncomesItemBtn").show();
        $("#setIncomeItemName").val(incomeItemName).attr("readOnly", "true");
        $("#setIncomeItemAmount").val(incomeItemAmount);
        $("#setIncomeItemTimePoint").val(incomeItemTimePoint);
        $("#setIncomeItemInfo").val(incomeItemInfo);
        $("#setIncomeItemMode").val(incomeItemMode);
        $("#setIncomeItemSource").val(incomeItemSource);
        $("#setIncomeItemPeriod").val(incomeItemPeriod);
        incomesEditIndex = index;
    }
}

function editForExpense(expenseItemName, expenseItemAmount, expenseItemTimePoint, expenseItemSource, expenseItemMode, expenseItemInfo, updateTime, expenseItemPeriod, index) {
    if (expenseItemName[0] === "股" && expenseItemName[1] === "票" && expenseItemName[2] === "-") {
        alert("理财项目只能在理财管理修改！");
        return false;
    }
    else if (expenseItemName[0] === "基" && expenseItemName[1] === "金" && expenseItemName[2] === "-") {
        alert("理财项目只能在理财管理修改！");
        return false;
    }
    else {
        $("#addExpenseItemModal").modal('show');
        document.getElementById("addExpenseItemModalLabel").innerHTML = "修改支出项";
        $("#addExpensesItemBtn").hide();
        $("#editExpensesItemBtn").show();
        $("#setExpenseItemName").val(expenseItemName).attr("readOnly", "true");
        $("#setExpenseItemAmount").val(expenseItemAmount);
        $("#setExpenseItemTimePoint").val(expenseItemTimePoint);
        $("#setExpenseItemInfo").val(expenseItemInfo);
        $("#setExpenseItemMode").val(expenseItemMode);
        $("#setExpenseItemSource").val(expenseItemSource);
        $("#setExpenseItemPeriod").val(expenseItemPeriod);
        expensesEditIndex = index;
    }
}

function editForRealAssets(realAssetsItemName, realAssetsItemAmount, realAssetsItemTimePoint, realAssetsItemInfo, index) {
    $("#addRealAssetsItemModal").modal('show');
    document.getElementById('addRealAssetsItemModalLabel').innerHTML = "修改实物资产项";
    $("#addRealAssetsItemBtn").hide();
    $("#editRealAssetsItemBtn").show();
    $("#setRealAssetsItemName").val(realAssetsItemName).attr("readOnly", "true");
    $("#setRealAssetsItemAmount").val(realAssetsItemAmount);
    $("#setRealAssetsItemTimePoint").val(realAssetsItemTimePoint);
    $("#setRealAssetsItemInfo").val(realAssetsItemInfo);
    realAssetsEditIndex = index;
}

function editForFinance(financeItemName, financeItemKind, financeItemOutOrIn, financeItemPerPrice, financeItemAmount, financeItemTimePoint, financeItemInfo, index) {
    $("#addFinanceItemModal").modal('show');
    document.getElementById('addFinanceItemModalLabel').innerHTML = "修改理财项目";
    $("#addFinanceItemBtn").hide();
    $("#editFinanceItemBtn").show();
    $("#setFinanceItemName").val(financeItemName).attr("readOnly", "true");
    $("#setFinanceItemKind").val(financeItemKind);
    $("#setFinanceItemOutOrIn").val(financeItemOutOrIn);
    $("#setFinanceItemPerPrice").val(financeItemPerPrice);
    $("#setFinanceItemAmount").val(financeItemAmount);
    $("#setFinanceItemTimePoint").val(financeItemTimePoint);
    $("#setFinanceItemInfo").val(financeItemInfo);
    financesEditIndex = index;
}

function editIncomeItem() {
    var incomeItemName = document.getElementById("setIncomeItemName").value;
    var incomeItemAmount = document.getElementById("setIncomeItemAmount").value;
    var incomeItemTimePoint = document.getElementById("setIncomeItemTimePoint").value;
    var incomeItemSource = $("#setIncomeItemSource").find("option:selected").val();
    var incomeItemMode = $("#setIncomeItemMode").find("option:selected").val();
    var incomeItemPeriod = $("#setIncomeItemPeriod").find("option:selected").val();
    var incomeItemInfo = document.getElementById("setIncomeItemInfo").value;
    var token = getOauthTokenFromStorage();
    var username=localStorage.getItem('username');
    var updateTime = new Date();

    if(token) {
        $.ajax({
            url: '/incomes/editIncomeItem/' + username + '/' + incomesEditIndex,
            datatype: 'json',
            type: 'post',
            contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            data: JSON.stringify({
                incomeItemName: incomeItemName,
                incomeItemAmount: incomeItemAmount,
                incomeItemTimePoint: incomeItemTimePoint,
                incomeItemSource: incomeItemSource,
                incomeItemMode: incomeItemMode,
                incomeItemPeriod: incomeItemPeriod,
                incomeItemInfo: incomeItemInfo,
                updateTime: updateTime
            }),
            success: function (data) {
                document.getElementById("addIncomeItemModalLabel").innerHTML = "新建收入项";
                $("#editIncomesItemBtn").hide();
                $("#addIncomesItemBtn").show();
                $("#setIncomeItemName").attr("readOnly", false).val("");
                $("#setIncomeItemAmount").val("");
                $("#setIncomeItemTimePoint").val("");
                $("#setIncomeItemInfo").val("");
                $("#setIncomeItemMode").val("现金");
                $("#setIncomeItemSource").val("工资");
                $("#setIncomeItemPeriod").val("一次性收入");
                $("#addIncomeItemModal").modal('hide');
                incomesList = data;
                computeForincomesStructureOfPerMonth(data);
                $('#setIncomeStructureOfMonth').val(currentMonth);
                $('#setIncomeTrendOfYearValue').val(currentYear);
                computeForOneYearIncomeTrend(data, currentYear);
                setDataForIncomeStructureOfMonthOption(currentMonth);
                setDataForIncomeTrendOfYear();
                incomesStructureOfMonth_chart.setOption(incomeStructureOfMonth_option);
                incomeTrendOfYear_chart.setOption(incomeTrendOfYear_option);
                loadIncomeTable(data);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function editExpenseItem() {
    var expenseItemName = document.getElementById("setExpenseItemName").value;
    var expenseItemAmount = document.getElementById("setExpenseItemAmount").value;
    var expenseItemTimePoint = document.getElementById("setExpenseItemTimePoint").value;
    var expenseItemSource = $("#setExpenseItemSource").find("option:selected").val();
    var expenseItemMode = $("#setExpenseItemMode").find("option:selected").val();
    var expenseItemPeriod = $("#setExpenseItemPeriod").find("option:selected").val();
    var expenseItemInfo = document.getElementById("setExpenseItemInfo").value;
    var token = getOauthTokenFromStorage();
    var username=localStorage.getItem('username');
    var updateTime = new Date();

    if(token) {
        $.ajax({
            url: '/expenses/editExpenseItem/' + username + '/' + expensesEditIndex,
            datatype: 'json',
            type: 'post',
            contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            data: JSON.stringify({
                expenseItemName: expenseItemName,
                expenseItemAmount: expenseItemAmount,
                expenseItemTimePoint: expenseItemTimePoint,
                expenseItemSource: expenseItemSource,
                expenseItemMode: expenseItemMode,
                expenseItemPeriod: expenseItemPeriod,
                expenseItemInfo: expenseItemInfo,
                updateTime: updateTime
            }),
            success: function (data) {
                document.getElementById("addExpenseItemModalLabel").innerHTML = "新建支出项";
                $("#editExpensesItemBtn").hide();
                $("#addExpensesItemBtn").show();
                $("#setExpenseItemName").attr("readOnly", false).val("");
                $("#setExpenseItemAmount").val("");
                $("#setExpenseItemTimePoint").val("");
                $("#setExpenseItemInfo").val("");
                $("#setExpenseItemMode").val("现金");
                $("#setExpenseItemSource").val("交通");
                $("#setExpenseItemPeriod").val("一次性支出");
                $("#addExpenseItemModal").modal('hide');
                expensesList = data;
                computeForexpensesStructureOfPerMonth(data);
                $('#setExpenseStructureOfMonth').val(currentMonth);
                $('#setExpenseTrendOfYearValue').val(currentYear);
                computeForOneYearExpenseTrend(data, currentYear);
                setDataForexpenseStructureOfMonthOption(currentMonth);
                setDataForExpenseTrendOfYear();
                expensesStructureOfMonth_chart.setOption(expenseStructureOfMonth_option);
                expenseTrendOfYear_char.setOption(expenseTrendOfYear_option);
                loadExpenseTable(data);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function editRealAssetsItem() {
    var token = getOauthTokenFromStorage();
    var username=localStorage.getItem('username');
    var realAssetsItemName = document.getElementById('setRealAssetsItemName').value;
    var realAssetsItemAmount = document.getElementById('setRealAssetsItemAmount').value;
    var realAssetsItemTiemPoint = document.getElementById('setRealAssetsItemTimePoint').value;
    var realAssetsItemInfo = document.getElementById('setRealAssetsItemInfo').value;

    if (token) {
        $.ajax({
            url: '/realassets/editRealAssetsItem/' + username + '/' + realAssetsEditIndex,
            datatype: 'json',
            type: 'post',
            contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            data: JSON.stringify({
                realAssetsItemName: realAssetsItemName,
                realAssetsItemAmount: realAssetsItemAmount,
                realAssetsItemTimePoint: realAssetsItemTiemPoint,
                realAssetsItemInfo: realAssetsItemInfo
            }),
            success: function (data) {
                document.getElementById("addRealAssetsItemModalLabel").innerHTML = "新建实物资产";
                $("#editRealAssetsItemBtn").hide();
                $("#addRealAssetsItemBtn").show();
                $("#setRealAssetsItemName").attr("readOnly", false).val("");
                $("#setRealAssetsItemAmount").val("");
                $("#setRealAssetsItemTimePoint").val("");
                $("#setRealAssetsItemInfo").val("");
                $("#addRealAssetsItemModal").modal('hide');
                realAssetsList = [];
                computeForOneRealAssetsPic_arr(data);
                var selectlable = document.getElementById('setRealAssetsItemNameOfSelectLabel');
                selectlable.options.length = 0;

                for(var x in data) {
                    if (data[x].length !== 0) {
                        selectlable.options.add(new Option(x, x));
                        realAssetsList = realAssetsList.concat(data[x]);
                    }
                }
                var selectRealAssets = selectlable.value;
                if (selectRealAssets !== '') {
                    setDataForRealAssets(selectRealAssets);
                    oneRealAssetsPic_chart.setOption(oneRealAssetsPic_option);
                }
                loadRealAssetsTable(realAssetsList);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function editFinanceItem() {
    var token = getOauthTokenFromStorage();
    var username = localStorage.getItem('username');
    var financeItemName = document.getElementById('setFinanceItemName').value;
    var financeItemKind = $("#setFinanceItemKind").find("option:selected").val();
    var financeItemOutOrIn = $("#setFinanceItemOutOrIn").find("option:selected").val();
    var financeItemPerPrice = document.getElementById('setFinanceItemPerPrice').value;
    var financeItemAmount = document.getElementById('setFinanceItemAmount').value;
    var financeItemTimePoint = document.getElementById('setFinanceItemTimePoint').value;
    var financeItemInfo = document.getElementById('setFinanceItemInfo').value;

    if (token) {
        $.ajax({
            url: '/finances/editFinanceProductItem/' + username + '/' + financesEditIndex,
            datatype: 'json',
            type: 'post',
            contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            data:
                JSON.stringify({
                    financeItemName: financeItemName,
                    financeItemKind: financeItemKind,
                    financeItemOutOrIn: financeItemOutOrIn,
                    financeItemPerPrice: financeItemPerPrice,
                    financeItemAmount: financeItemAmount,
                    financeItemTimePoint: financeItemTimePoint,
                    financeItemInfo: financeItemInfo
                }),
            success: function (data) {
                document.getElementById('addFinanceItemModalLabel').innerHTML = "新建理财项目";
                $("#setFinanceItemName").attr("readOnly", false).val("");
                $("#setFinanceItemKind").val("股票");
                $("#setFinanceItemOutOrIn").val("买入");
                $("#setFinanceItemPerPrice").val("");
                $("#setFinanceItemAmount").val("");
                $("#setFinanceItemTimePoint").val("");
                $("#setFinanceItemInfo").val("");
                $("#addFinanceItemModal").modal('hide');

                financesList = [];
                computeForOneFinancePic_arr(data);
                var selectlabel = document.getElementById('setFinanceItemNameOfSelectLabel');
                selectlabel.options.length = 0;

                for(var x in data) {
                    if (data[x].length !== 0) {
                        selectlabel.options.add(new Option(x, x));
                        financesList = financesList.concat(data[x]);
                    }
                }
                var selectfinance = selectlabel.value;
                if (selectfinance !== '') {
                    setDataForFinance(selectfinance);
                    oneFinancePic_chart.setOption(oneFinancePic_option);
                }
                loadFinanceTable(financesList);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function delIncomeItem(incomeItemName, index) {
    if (incomeItemName[0] === "股" && incomeItemName[1] === "票" && incomeItemName[2] === "-") {
        alert("理财项目只能在理财管理删除！");
        return false;
    }
    else if (incomeItemName[0] === "基" && incomeItemName[1] === "金" && incomeItemName[2] === "-") {
        alert("理财项目只能在理财管理修改！");
        return false;
    }

    var token = getOauthTokenFromStorage();
    var username=localStorage.getItem('username');

    if(token) {
        $.ajax({
            url: '/incomes/deleteIncomeItem/' + username,
            datatype: 'json',
            type: 'post',
            //contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            data: {
                index: index
            },
            success: function (data) {
                incomesList = data;
                computeForincomesStructureOfPerMonth(data);
                $('#setIncomeStructureOfMonth').val(currentMonth);
                $('#setIncomeTrendOfYearValue').val(currentYear);
                computeForOneYearIncomeTrend(data, currentYear);
                setDataForIncomeStructureOfMonthOption(currentMonth);
                setDataForIncomeTrendOfYear();
                incomesStructureOfMonth_chart.setOption(incomeStructureOfMonth_option);
                incomeTrendOfYear_chart.setOption(incomeTrendOfYear_option);
                loadIncomeTable(data);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function delExpenseItem(expenseItemName, index) {
    if (expenseItemName[0] === "股" && expenseItemName[1] === "票" && expenseItemName[2] === "-") {
        alert("理财项目只能在理财管理删除！");
        return false;
    }
    else if (expenseItemName[0] === "基" && expenseItemName[1] === "金" && expenseItemName[2] === "-") {
        alert("理财项目只能在理财管理修改！");
        return false;
    }

    var token = getOauthTokenFromStorage();
    var username=localStorage.getItem('username');

    if(token) {
        $.ajax({
            url: '/expenses/deleteExpenseItem/' + username,
            datatype: 'json',
            type: 'post',
            //contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            data: {
                index: index
            },
            success: function (data) {
                expensesList = data;
                computeForexpensesStructureOfPerMonth(data);
                $('#setExpenseStructureOfMonth').val(currentMonth);
                $('#setExpenseTrendOfYearValue').val(currentYear);
                computeForOneYearExpenseTrend(data, currentYear);
                setDataForexpenseStructureOfMonthOption(currentMonth);
                setDataForExpenseTrendOfYear();
                expensesStructureOfMonth_chart.setOption(expenseStructureOfMonth_option);
                expenseTrendOfYear_char.setOption(expenseTrendOfYear_option);
                loadExpenseTable(data);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function delRealAssetItem(realAssetsItemName, realAssetsItemAmount, realAssetsItemTimePoint, realAssetsItemInfo,index) {
    var token = getOauthTokenFromStorage();
    var username=localStorage.getItem('username');

    if (token) {
        $.ajax({
            url: '/realassets/deleteRealAssetsItem/' + username + '/' + realAssetsItemName + '/' + realAssetsItemTimePoint,
            datatype: 'json',
            type: 'post',
            //contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            success: function (data) {
                realAssetsList = [];
                computeForOneRealAssetsPic_arr(data);
                var selectlable = document.getElementById('setRealAssetsItemNameOfSelectLabel');
                selectlable.options.length = 0;
                //$("#setRealAssetsItemNameOfSelectLabel").empty();

                for(var x in data) {
                    if (data[x].length !== 0) {
                        selectlable.options.add(new Option(x, x));
                        realAssetsList = realAssetsList.concat(data[x]);
                    }
                }
                var selectRealAssets = selectlable.value;
                if (selectRealAssets !== '') {
                    setDataForRealAssets(selectRealAssets);
                    oneRealAssetsPic_chart.setOption(oneRealAssetsPic_option);
                }
                else {
                    document.getElementById('oneRealAssetsPic').innerHTML = "";
                }
                loadRealAssetsTable(realAssetsList);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function delFinanceItem(financeItemName, financeItemAmount, financeItemTimePoint, financeItemInfo, index) {
    var token = getOauthTokenFromStorage();
    var username=localStorage.getItem('username');

    if (token) {
        $.ajax({
            url: '/finances/deleteFinanceProductItem/' + username + '/' + financeItemName + '/' + financeItemTimePoint,
            datatype: 'json',
            type: 'post',
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            success: function (data) {
                financesList = [];
                computeForOneFinancePic_arr(data);
                var selectlabel = document.getElementById('setFinanceItemNameOfSelectLabel');
                selectlabel.options.length = 0;

                for(var x in data) {
                    if (data[x].length !== 0) {
                        selectlabel.options.add(new Option(x, x));
                        financesList = financesList.concat(data[x]);
                    }
                }
                var selectfinance = selectlabel.value;
                if (selectfinance !== '') {
                    setDataForFinance(selectfinance);
                    oneFinancePic_chart.setOption(oneFinancePic_option);
                }
                else {
                    document.getElementById('oneFinancePic').innerHTML = "";
                }
                loadFinanceTable(financesList);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        })
    }
}

function showList() {
    ;
}

$(document).ready(function () {
    $("#setIncomeStructureOfMonth").change(function () {
        var month = $("#setIncomeStructureOfMonth").val();
        setDataForIncomeStructureOfMonthOption(month);
        incomesStructureOfMonth_chart.setOption(incomeStructureOfMonth_option);
    })
});

$(document).ready(function () {
    $("#setExpenseStructureOfMonth").change(function () {
        var month = $("#setExpenseStructureOfMonth").val();
        setDataForexpenseStructureOfMonthOption(month);
        expensesStructureOfMonth_chart.setOption(expenseStructureOfMonth_option);
    })
});

$(document).ready(function () {
    $("#setIncomeTrendOfYear").change(function () {
        var year = document.getElementById("setIncomeTrendOfYearValue").value;
        computeForOneYearIncomeTrend(incomesList, year);
        setDataForIncomeTrendOfYear();
        incomeTrendOfYear_chart.setOption(incomeTrendOfYear_option);
    })
});

$(document).ready(function () {
    $("#setExpenseTrendOfYear").change(function () {
        var year = document.getElementById("setExpenseTrendOfYearValue").value;
        computeForOneYearExpenseTrend(expensesList, year);
        setDataForExpenseTrendOfYear();
        expenseTrendOfYear_char.setOption(expenseTrendOfYear_option);
    })
});

$(document).ready(function () {
    $("#setRealAssetsItemNameOfSelectLabel").change(function () {
        var selectRealAssets = $("#setRealAssetsItemNameOfSelectLabel").val();
        //var selectRealAssets = selectlable.value;
        if (selectRealAssets !== '') {
            setDataForRealAssets(selectRealAssets);
            oneRealAssetsPic_chart.setOption(oneRealAssetsPic_option);
        }
    })
});

$(document).ready(function () {
    $("#setFinanceItemNameOfSelectLabel").change(function () {
        var selectFinance = $("#setFinanceItemNameOfSelectLabel").val();

        if (selectFinance !== '') {
            setDataForFinance(selectFinance);
            oneFinancePic_chart.setOption(oneFinancePic_option);
        }
    })
});

function setDataForIncomeStructureOfMonthOption(month) {
    incomeStructureOfMonth_option = {
        backgroundColor: '#2c343c',
        title: {
            text: '月收入结构',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            bottom: 10,
            left: 'center',
            data: [{
                name: '工资',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '租赁',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '财产转让',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '礼金',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '其他',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }]
        },
        series : [
            {
                name:'收入来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data:incomesStructureOfPerMonth[month],
                //roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
}

function setDataForexpenseStructureOfMonthOption(month) {
    expenseStructureOfMonth_option = {
        backgroundColor: '#2c343c',
        title: {
            text: '月支出结构',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            bottom: 10,
            left: 'center',
            data: [{
                name: '交通',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '租赁',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '教育',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '衣服',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '饮食',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '旅游',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '运动',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '医疗',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '水电费',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }, {
                name: '其他',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }]
        },
        series : [
            {
                name:'支出去向',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data:expensesStructureOfPerMonth[month],
                //roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
}

function setDataForIncomeTrendOfYear() {
    incomeTrendOfYear_option = {
        title: {
            text: '年内每月收入趋势图',
            x: 'center'
        },
        tooltip:{
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [{
            name: '月总收入金额',
            type:'line',
            data: incomesTrendOfYear,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }]
    };
}

function setDataForExpenseTrendOfYear() {
    expenseTrendOfYear_option = {
        title: {
            text: '年内每月支出趋势图',
            x: 'center'
        },
        tooltip:{
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [{
            name: '月总收入金额',
            type:'line',
            data: expensesTrendOfYear,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }]
    };
}

function setDataForRealAssets(realAssetsItemName) {
    oneRealAssetsPic_option = {
        title: {
            text: '实物资产价格趋势图',
            x: 'center'
        },
        tooltip:{
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: realAssetsTimePriceList[realAssetsItemName]['time']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [{
            name: '价格',
            type:'line',
            data: realAssetsTimePriceList[realAssetsItemName]['price'],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }]
    };
}

function setDataForFinance(financeItemName) {
    oneFinancePic_option = {
        title: {
            text: '理财项目价格趋势图',
            x: 'center'
        },
        tooltip:{
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: financesTimePriceList[financeItemName]['time']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [{
            name: '价格',
            type:'line',
            data: financesTimePriceList[financeItemName]['price'],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }]
    };
}

var incomeStructureOfMonthContainer = document.getElementById('incomeStructureOfMonth');
var expenseStructureOfMonthContainer = document.getElementById('expenseStructureOfMonth');
var incomeTrendOfYearContainer = document.getElementById('incomeTrendOfYear');
var expenseTrendOfYearContainer = document.getElementById('expenseTrendOfYear');
var oneRealAssetsPicContainer = document.getElementById('oneRealAssetsPic');
var oneFinancePicContainer = document.getElementById('oneFinancePic');
var incomeStructureOfMonth_option;
var expenseStructureOfMonth_option;
var incomeTrendOfYear_option;
var expenseTrendOfYear_option;
var oneRealAssetsPic_option;
var oneFinancePic_option;

var resizeIncomeStructureOfMonthContainer = function () {
    incomeStructureOfMonthContainer.style.width = window.innerWidth*0.8+'px';
    incomeStructureOfMonthContainer.style.height = window.innerHeight*0.8+'px';
};

var resizeExpenseStructureOfMonthContainer = function () {
    expenseStructureOfMonthContainer.style.width = window.innerWidth*0.8+'px';
    expenseStructureOfMonthContainer.style.height = window.innerHeight*0.8+'px';
};

var resizeIncomeTrendOfYearContainer = function () {
    incomeTrendOfYearContainer.style.width = window.innerWidth*0.8 + 'px';
    incomeTrendOfYearContainer.style.height = window.innerHeight*0.8 + 'px';
};

var resizeExpenseTrendOfYearContainer = function () {
    expenseTrendOfYearContainer.style.width = window.innerWidth*0.8 + 'px';
    expenseTrendOfYearContainer.style.height = window.innerHeight*0.8 + 'px';
};

var resizeOneRealAssetsPicContainer = function () {
    oneRealAssetsPicContainer.style.width = window.innerWidth*0.8 + 'px';
    oneRealAssetsPicContainer.style.height = window.innerHeight*0.8 + 'px';
}

var resizeOneFinancePicContainer = function () {
    oneFinancePicContainer.style.width = window.innerWidth * 0.8 + 'px';
    oneFinancePicContainer.style.height = window.innerHeight * 0.8 + 'px';
}

resizeIncomeStructureOfMonthContainer();
resizeExpenseStructureOfMonthContainer();
resizeIncomeTrendOfYearContainer();
resizeExpenseTrendOfYearContainer();
resizeOneRealAssetsPicContainer();
resizeOneFinancePicContainer();

var incomesStructureOfMonth_chart = echarts.init(incomeStructureOfMonthContainer);
var expensesStructureOfMonth_chart = echarts.init(expenseStructureOfMonthContainer);
var incomeTrendOfYear_chart = echarts.init(incomeTrendOfYearContainer);
var expenseTrendOfYear_char = echarts.init(expenseTrendOfYearContainer);
var oneRealAssetsPic_chart = echarts.init(oneRealAssetsPicContainer);
var oneFinancePic_chart = echarts.init(oneFinancePicContainer);

window.onresize = function() {
    resizeIncomeStructureOfMonthContainer();
    resizeExpenseStructureOfMonthContainer();
    resizeIncomeTrendOfYearContainer();
    resizeExpenseTrendOfYearContainer();
    resizeOneRealAssetsPicContainer();
    resizeOneFinancePicContainer();
    incomesStructureOfMonth_chart.resize();
    expensesStructureOfMonth_chart.resize();
    incomeTrendOfYear_chart.resize();
    expenseTrendOfYear_char.resize();
    oneRealAssetsPic_chart.resize();
    oneFinancePic_chart.resize();
};

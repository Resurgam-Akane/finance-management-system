var incomesList;
var incomesEditIndex;
var incomesStructureOfPerMonth = { '01' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '02' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '03' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '04' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '05' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '06' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '07' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '08' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '09' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '10' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '11' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}], '12' : [{value: 0, name:'工资'}, {value: 0, name:'租赁'}, {value: 0, name:'财产转让'}, {value: 0, name:'礼金'}, {value: 0, name:'其他'}] };
var currentDate = new Date();
var currentMonth=currentDate.getMonth()+1;
currentMonth =(currentMonth < 10 ? "0" + currentMonth : currentMonth);


function modifyTypeOfUpdatetime() {
    for (var i = 0; i < incomesList.length; ++i) {
        incomesList[i].updateTime = Date(incomesList[i].updateTime);
    }
}

function computeForOneMonthOneSource(month, data, i) {
    if (data[i].incomeItemSource === "工资") {
        if (data[i].incomeItemPeriod === "一次性收入")
            incomesStructureOfPerMonth[month][0].value += data[i].incomeItemAmount;
        else if (data[i].incomeItemPeriod === "每天收入") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12")
                incomesStructureOfPerMonth[month][0].value += data[i].incomeItemAmount * 31;
            else incomesStructureOfPerMonth[month][0].value += data[i].incomeItemAmount * 30;
        }
        else if (data[i].incomeItemPeriod === "每月收入") {
            incomesStructureOfPerMonth[month][0].value += data[i].incomeItemAmount;
        }
    }
    else if (data[i].incomeItemSource === "租赁") {
        if (data[i].incomeItemPeriod === "一次性收入")
            incomesStructureOfPerMonth[month][1].value += data[i].incomeItemAmount;
        else if (data[i].incomeItemPeriod === "每天收入") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12")
                incomesStructureOfPerMonth[month][1].value += data[i].incomeItemAmount * 31;
            else incomesStructureOfPerMonth[month][1].value += data[i].incomeItemAmount * 30;
        }
        else if (data[i].incomeItemPeriod === "每月收入") {
            incomesStructureOfPerMonth[month][1].value += data[i].incomeItemAmount;
        }
    }
    else if (data[i].incomeItemSource === "财产转让") {
        if (data[i].incomeItemPeriod === "一次性收入")
            incomesStructureOfPerMonth[month][2].value += data[i].incomeItemAmount;
        else if (data[i].incomeItemPeriod === "每天收入") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12")
                incomesStructureOfPerMonth[month][2].value += data[i].incomeItemAmount * 31;
            else incomesStructureOfPerMonth[month][2].value += data[i].incomeItemAmount * 30;
        }
        else if (data[i].incomeItemPeriod === "每月收入") {
            incomesStructureOfPerMonth[month][2].value += data[i].incomeItemAmount;
        }
    }
    else if (data[i].incomeItemSource === "礼金") {
        if (data[i].incomeItemPeriod === "一次性收入")
            incomesStructureOfPerMonth[month][3].value += data[i].incomeItemAmount;
        else if (data[i].incomeItemPeriod === "每天收入") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12")
                incomesStructureOfPerMonth[month][3].value += data[i].incomeItemAmount * 31;
            else incomesStructureOfPerMonth[month][3].value += data[i].incomeItemAmount * 30;
        }
        else if (data[i].incomeItemPeriod === "每月收入") {
            incomesStructureOfPerMonth[month][3].value += data[i].incomeItemAmount;
        }
    }
    else if (data[i].incomeItemSource === "其他") {
        if (data[i].incomeItemPeriod === "一次性收入")
            incomesStructureOfPerMonth[month][4].value += data[i].incomeItemAmount;
        else if (data[i].incomeItemPeriod === "每天收入") {
            if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12")
                incomesStructureOfPerMonth[month][4].value += data[i].incomeItemAmount * 31;
            else incomesStructureOfPerMonth[month][4].value += data[i].incomeItemAmount * 30;
        }
        else if (data[i].incomeItemPeriod === "每月收入") {
            incomesStructureOfPerMonth[month][4].value += data[i].incomeItemAmount;
        }
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
    //alert(JSON.stringify(incomesStructureOfPerMonth));
    if (data.length !== 0) {
        for (var i = 0; i < data.length; ++i) {
            var month = data[i].incomeItemTimePoint.split('-')[1];
            switch (month) {
                case '01':
                    computeForOneMonthOneSource(month, data, i);
                    break;
                case '02':
                    computeForOneMonthOneSource(month, data, i);
                    break;
                case '03':
                    computeForOneMonthOneSource(month, data, i);
                    break;
                case '04':
                    computeForOneMonthOneSource(month, data, i);
                    break;
                case '05':
                    computeForOneMonthOneSource(month, data, i);
                    break;
                case '06':
                    computeForOneMonthOneSource(month, data, i);
                    break;
                case '07':
                    computeForOneMonthOneSource(month, data, i);
                    break;
                case '08':
                    computeForOneMonthOneSource(month, data, i);
                    break;
                case '09':
                    computeForOneMonthOneSource(month, data, i);
                    break;
                case '10':
                    computeForOneMonthOneSource(month, data, i);
                    break;
                case '11':
                    computeForOneMonthOneSource(month, data, i);
                    break;
                case '12':
                    computeForOneMonthOneSource(month, data, i);
                    break;
            }
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
        /*localStorage.setItem('password', password);
        if(requestOauth2TOken(username, password)) {
            window.location.href="/index";
        }
        else alert("Something went wrong. Please, check your credentials");*/
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
            $.ajax({
                url: '/incomes/' + username,
                datatype: 'json',
                type: 'get',
                headers: {'Authorization': 'Bearer ' + token},
                async: false,
                success: function (data) {
                    incomesList = data;
                    computeForincomesStructureOfPerMonth(data);
                    setDataForIncomeStructureOfMonthOption(currentMonth);
                    incomesStructureOfMonth_chart.setOption(incomeStructureOfMonth_option);
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

            $.ajax({
                url: '/expenses/' + username,
                datatype: 'json',
                type: 'get',
                headers: {'Authorization': 'Bearer ' + token},
                async: false,
                success: function (data) {
                    if (data === "") {
                        $('#noexpenseitemdiv').show();
                        $('#expensetablediv').hide();
                    }
                    else {
                        $('#noexpenseitemdiv').hide();
                        $('#expensetablediv').show();
                    }
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
                setDataForIncomeStructureOfMonthOption(currentMonth);
                incomesStructureOfMonth_chart.setOption(incomeStructureOfMonth_option);
                loadIncomeTable(data);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function addExpenseItem() {
    var token = getOauthTokenFromStorage();
    var username=localStorage.getItem('username');

    if(token) {
        $.ajax({
            url: '/expenses/addExpenseItem/' + username,
            datatype: 'json',
            type: 'get',
            //contentType: "application/json",
            headers: {'Authorization': 'Bearer ' + token},
            async: false,
            success: function (data) {
                if (data === username) {

                    $("#addExpenseItemModal").modal('hide');
                }
                else if (data === "fail")
                    alert("添加收入项目失败!");
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

$(document).ready(function () {
    $(function () {
        $('#setIncomeItemDateTime').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
    });
});

$(document).ready(function () {
    $(function () {
        $('#setExpenseItemDateTime').datetimepicker();
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
        search: true,
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
            formatter: operateFormatter
        }],
        data: data
    });
}

var operateFormatter = function(value, row, index) {
    return [
        '<button class="btn btn-info btn-sm rightSize detailBtn" type="button" onclick="edit(\'' + row.incomeItemName+ '\', \''+row.incomeItemAmount+'\', \''+ row.incomeItemTimePoint+ '\', \'' + row.incomeItemSource + '\', \'' + row.incomeItemMode + '\', \'' + row.incomeItemInfo + '\', \'' + row.updateTime + '\', \'' + row.incomeItemPeriod + '\', \'' + index + '\')"><i class="Edit fa fa-paste"></i> 修改</button>',
        '<button class="btn btn-danger btn-sm rightSize packageBtn" type="button" onclick="delIncomeItem(\''+ index + '\')"><i class="Delete fa fa-envelope"></i> 删除</button>'
    ].join('');
}

function edit(incomeItemName, incomeItemAmount, incomeItemTimePoint, incomeItemSource, incomeItemMode, incomeItemInfo, updateTime, incomeItemPeriod, index) {
    $("#addIncomeItemModal").modal('show');
    document.getElementById("addIncomeItemModalLabel").innerHTML = "修改收入项";
    $("#addIncomesItemBtn").hide();
    $("#editIncomesItemBtn").show();
    $("#setIncomeItemName").val(incomeItemName);
    $("#setIncomeItemAmount").val(incomeItemAmount);
    $("#setIncomeItemTimePoint").val(incomeItemTimePoint);
    $("#setIncomeItemInfo").val(incomeItemInfo);
    $("#setIncomeItemMode").val(incomeItemMode);
    $("#setIncomeItemSource").val(incomeItemSource);
    $("#setIncomeItemPeriod").val(incomeItemPeriod);
    incomesEditIndex = index;

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
                setDataForIncomeStructureOfMonthOption(currentMonth);
                incomesStructureOfMonth_chart.setOption(incomeStructureOfMonth_option);
                loadIncomeTable(data);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function delIncomeItem(index) {
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
                setDataForIncomeStructureOfMonthOption(currentMonth);
                incomesStructureOfMonth_chart.setOption(incomeStructureOfMonth_option);
                loadIncomeTable(data);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function showList() {
    incomesStructureOfPerMonthInit();
}

$(document).ready(function () {
    $("#setIncomeStructureOfMonth").change(function () {
        var month = $("#setIncomeStructureOfMonth").val();
        setDataForIncomeStructureOfMonthOption(month);
        incomesStructureOfMonth_chart.setOption(incomeStructureOfMonth_option);
    })
})

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
                data:incomesStructureOfPerMonth[month].sort(function (a, b) { return a.value - b.value; }),
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

var incomeStructureOfMonthContainer = document.getElementById('incomeStructureOfMonth');
var incomeStructureOfMonth_option;

var resizeIncomeStructureOfMonthContainer = function () {
    incomeStructureOfMonthContainer.style.width = window.innerWidth*0.8+'px';
    incomeStructureOfMonthContainer.style.height = window.innerHeight*0.8+'px';
};

resizeIncomeStructureOfMonthContainer();

var incomesStructureOfMonth_chart = echarts.init(incomeStructureOfMonthContainer);

window.onresize = function() {
    resizeIncomeStructureOfMonthContainer();
    incomesStructureOfMonth_chart.resize();
};

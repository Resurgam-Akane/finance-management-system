var incomesList;

function modifyTypeOfUpdatetime() {
    for (var i = 0; i < incomesList.length; ++i) {
        incomesList[i].updateTime = Date(incomesList[i].updateTime);
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

            $.ajax({
                url: '/incomes/' + username,
                datatype: 'json',
                type: 'get',
                headers: {'Authorization': 'Bearer ' + token},
                async: false,
                success: function (data) {
                    incomesList = data;
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

/*$("#addIncomeItemModal").on("hidden.bs.modal", function(){
    $(this).removeData("bs.modal");
});*/

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
    //todo:小于0


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
                $("#addIncomeItemModal").modal('hide');
                incomesList = data;
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
        '<button class="btn btn-info btn-sm rightSize detailBtn" type="button" onclick="edit(\'' + row.incomeItemName+ '\', \''+row.incomeItemAmount+'\', \''+ row.incomeItemTimePoint+ '\', \'' + row.incomeItemSource + '\', \'' + row.incomeItemMode + '\', \'' + row.incomeItemInfo + '\', \'' + row.updateTime + '\', \'' + row.incomeItemPeriod + '\')"><i class="Edit fa fa-paste"></i> 修改</button>',
        '<button class="btn btn-danger btn-sm rightSize packageBtn" type="button" onclick="del(\''+ index + '\')"><i class="Delete fa fa-envelope"></i> 删除</button>'
    ].join('');
}

function edit(incomeItemName, incomeItemAmount, incomeItemTimePoint, incomeItemSource, incomeItemMode, incomeItemInfo, updateTime, incomeItemPeriod) {
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
    //document.getElementById("addIncomeItemModalLabel").innerHTML = "新建收入项";
    //$("#addIncomesItemBtn").show();
    //$("#editIncomesItemBtn").hide();
}

function del(index) {
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
                loadIncomeTable(data);
            },
            error: function () {
                removeOauthTokenFromStorage();
            }
        });
    }
}

function editIncomeItem() {
    alert("hh!");
}

function showList() {
    alert(typeof incomesList[0].incomeItemAmount);
}

var incomeStructureOfMonthContainer = document.getElementById('incomeStructureOfMonth');

var resizeIncomeStructureOfMonthContainer = function () {
    incomeStructureOfMonthContainer.style.width = window.innerWidth*0.8+'px';
    incomeStructureOfMonthContainer.style.height = window.innerHeight*0.8+'px';
};

resizeIncomeStructureOfMonthContainer();

var myChart = echarts.init(incomeStructureOfMonthContainer);
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

window.onresize = function() {
    resizeIncomeStructureOfMonthContainer();
    myChart.resize();
};

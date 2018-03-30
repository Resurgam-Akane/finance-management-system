function requestOauth2TOken(username, password) {
    var success = false;

    $.ajax({
        url: '/oauth/token',
        datatype: 'json',
        type: 'post',
        headers: {'Authorization': 'Basic YnJvd3Nlcjo='},
        async: false,
        data: {
            scope: 'ui',
            username: username,
            password: password,
            grant_type: 'password'
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

function getCurrentAccount() {

    var token = getOauthTokenFromStorage();
    var account = null;

    if (token) {
        $.ajax({
            url: 'account/xuzhu',
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

$(document).ready(function () {
    $("#AccountCenter").click (function () {
        alert("into the function");
        if(requestOauth2TOken('xuzhu', '123456')) {
            alert("into the function true");

            //var account = getCurrentAccount();
        }
        else alert("Something went wrong. Please, check your credentials");
    });
});

$(document).ready(function () {
    $("#AccountCenter").mouseenter(function () {
        alert("888888888");
    });
});
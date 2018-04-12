package com.xuzhu.fmsaccountservice.service;

import com.xuzhu.fmsaccountservice.domain.Account;

public interface AccountService {
    Account loadAccountByUsername(String username);
    String setPersonalInfo(Account update);
}

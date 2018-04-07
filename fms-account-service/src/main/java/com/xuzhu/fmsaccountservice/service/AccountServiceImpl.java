package com.xuzhu.fmsaccountservice.service;

import com.xuzhu.fmsaccountservice.DAO.AccountDAO;
import com.xuzhu.fmsaccountservice.domain.Account;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Date;

@Service
public class AccountServiceImpl implements AccountService{
    private final Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    private AccountDAO accountDAO;

    @Override
    public Account loadAccountByUsername(String username) {
        Account account = accountDAO.findOne(username);

        if (account == null) {
            ;//todo: create and save
            account = new Account();
            account.setUsername(username);
            account.setName("未设置");
            account.setSex("未设置");
            account.setAge("未设置");
            account.setSavingAmount(new BigDecimal(0));
            account.setUpdateTime(new Date());
            accountDAO.save(account);
        }
        else {
            account.setUpdateTime(new Date());
            accountDAO.save(account);
        }

        return account;
    }

}

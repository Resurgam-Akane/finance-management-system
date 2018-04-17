package com.xuzhu.fmsincomemanagementservice.service;

import com.xuzhu.fmsincomemanagementservice.DAO.AccountDAO;
import com.xuzhu.fmsincomemanagementservice.domain.Account;
import com.xuzhu.fmsincomemanagementservice.domain.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class IncomesServiceImpl implements IncomesService{

    @Autowired
    private AccountDAO accountDAO;

    @Override
    public String addIncomesItem(String username, Item item) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            account.addIncomItem(item);
            accountDAO.save(account);
        }
        else return "fail";

        return "success";
    }

    @Override
    public String deleteIncomesItem(String username, Item item) {
        return "success";
    }

    @Override
    public String updateIncomesItem(String username, Item item) {
        return  "success";
    }

    @Override public List<Item> loadIncomes(String username) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            return account.getIncomes();
        }
        else {
            account = new Account();
            account.setUsername(username);
            account.setCreateTime(new Date());
            account.setUpdateTime(new Date());
            accountDAO.save(account);
            return account.getIncomes();
        }
    }
}

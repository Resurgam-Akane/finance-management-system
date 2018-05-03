package com.xuzhu.fmsincomemanagementservice.service;

import com.xuzhu.fmsincomemanagementservice.DAO.AccountDAO;
import com.xuzhu.fmsincomemanagementservice.domain.Account;
import com.xuzhu.fmsincomemanagementservice.domain.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class IncomesServiceImpl implements IncomesService{

    @Autowired
    private AccountDAO accountDAO;

    @Override
    public List<Item> addIncomesItem(String username, Item item) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            account.addIncomItem(item);
            account.setUpdateTime(new Date());
            accountDAO.save(account);
        }
        else return null;

        return account.getIncomes();
    }

    @Override
    public List<Item> deleteIncomesItem(String username, int index) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            List<Item> items = account.getIncomes();
            items.remove(index);
            account.setIncomes(items);
            account.setUpdateTime(new Date());
            accountDAO.save(account);
        }
        else return null;

        return account.getIncomes();
    }

    @Override
    public List<Item> editIncomesItem(String username, int index, Item item) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            List<Item> items = account.getIncomes();
            items.set(index, item);
            account.setIncomes(items);
            account.setUpdateTime(new Date());
            accountDAO.save(account);
        }
        else return null;

        return account.getIncomes();
    }

    @Override
    public List<Item> loadIncomes(String username) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            return account.getIncomes();
        }
        else {
            account = new Account();
            account.setUsername(username);
            account.setCreateTime(new Date());
            account.setUpdateTime(new Date());
            account.setIncomes(new ArrayList<>());
            accountDAO.save(account);
            return account.getIncomes();
        }
    }

    @Override
    public boolean deleteIncomeItemFromFinanceManagement(String username, String itemName, String timePoint) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            int index = 0;
            List<Item> items = account.getIncomes();
            for (index = 0; index != items.size(); ++index) {
                Item item = items.get(index);
                if (item.getIncomeItemName().equals(itemName) && item.getIncomeItemTimePoint().equals(timePoint))
                    break;
            }

            items.remove(index);
            account.setIncomes(items);
            account.setUpdateTime(new Date());
            accountDAO.save(account);
            return true;
        }
        else return false;
    }
}

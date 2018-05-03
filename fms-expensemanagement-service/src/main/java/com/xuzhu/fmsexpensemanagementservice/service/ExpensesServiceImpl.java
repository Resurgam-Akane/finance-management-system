package com.xuzhu.fmsexpensemanagementservice.service;

import com.xuzhu.fmsexpensemanagementservice.DAO.AccountDAO;
import com.xuzhu.fmsexpensemanagementservice.domain.Account;
import com.xuzhu.fmsexpensemanagementservice.domain.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ExpensesServiceImpl implements ExpensesService {
    @Autowired
    private AccountDAO accountDAO;

    @Override
    public List<Item> addExpensesItem(String username, Item item) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            account.addExpenseItem(item);
            accountDAO.save(account);
        }
        else return null;

        return account.getExpenses();
    }

    @Override
    public List<Item> deleteExpensesItem(String username, int index) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            List<Item> items = account.getExpenses();
            items.remove(index);
            account.setExpenses(items);
            account.setUpdateTime(new Date());
            accountDAO.save(account);
        }
        else return null;

        return account.getExpenses();
    }

    @Override
    public List<Item> editExpensesItem(String username, int index, Item item) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            List<Item> items = account.getExpenses();
            items.set(index, item);
            account.setExpenses(items);
            account.setUpdateTime(new Date());
            accountDAO.save(account);
        }
        else return null;

        return account.getExpenses();
    }

    @Override
    public List<Item> loadExpenses(String username) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            return account.getExpenses();
        }
        else {
            account = new Account();
            account.setUsername(username);
            account.setCreateTime(new Date());
            account.setUpdateTime(new Date());
            account.setExpenses(new ArrayList<>());
            accountDAO.save(account);
            return account.getExpenses();
        }
    }

    @Override
    public boolean deleteExpenseItemFromFinanceManagement(String username, String itemName, String timePoint) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            List<Item> items = account.getExpenses();
            int index = 0;
            for (index = 0; index != items.size(); ++index) {
                Item item = items.get(index);
                if (item.getExpenseItemName().equals(itemName) && item.getExpenseItemTimePoint().equals(timePoint))
                    break;
            }
            items.remove(index);
            account.setExpenses(items);
            account.setUpdateTime(new Date());
            accountDAO.save(account);
            return true;
        }
        else return false;
    }

}

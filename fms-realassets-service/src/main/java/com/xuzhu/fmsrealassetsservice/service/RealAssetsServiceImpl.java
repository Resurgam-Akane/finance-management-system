package com.xuzhu.fmsrealassetsservice.service;

import com.xuzhu.fmsrealassetsservice.DAO.AccountDAO;
import com.xuzhu.fmsrealassetsservice.domain.Account;
import com.xuzhu.fmsrealassetsservice.domain.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RealAssetsServiceImpl implements RealAssetsService{

    @Autowired
    AccountDAO accountDAO;

    @Override
    public Map<String, List<Item>> addRealAssetsItem(String username, Item item) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            account.addRealAssetsItem(item);
            account.setUpdateTime(new Date());
            accountDAO.save(account);
        }
        else return null;

        return account.getItems();
    }

    @Override
    public Map<String, List<Item>> deleteRealAssetsItem(String username, String realAssetsItemName, String realAssetsItemTimePoint) {
        Account account = accountDAO.findOne(username);
        int index = 0;
        if (account != null) {
            Map<String, List<Item>> items = account.getItems();
            List<Item> oneList = items.get(realAssetsItemName);
            for (; index != oneList.size() && !oneList.get(index).getRealAssetsItemTimePoint().equals(realAssetsItemTimePoint); ++index);
            oneList.remove(index);
            if (oneList.size() == 0) {
                items.remove(realAssetsItemName);
            }
            else {
                items.put(realAssetsItemName, oneList);
            }
            account.setItems(items);
            account.setUpdateTime(new Date());

            accountDAO.save(account);
        }
        else return null;

        return account.getItems();
    }

    @Override
    public Map<String, List<Item>> editRealAssetsItem(String username, Item item, int i) {
        Account account = accountDAO.findOne(username);
        int index = 0;

        if (account != null) {
            Map<String, List<Item>> items = account.getItems();
            List<Item> oneList = items.get(item.getRealAssetsItemName());
            for (; index != oneList.size() && !oneList.get(index).getRealAssetsItemTimePoint().equals(item.getRealAssetsItemTimePoint()); ++index);
            oneList.set(index, item);
            items.put(item.getRealAssetsItemName(), oneList);
            account.setItems(items);
            account.setUpdateTime(new Date());
            accountDAO.save(account);
        }
        else return null;

        return account.getItems();
    }

    @Override
    public Map<String, List<Item>> loadRealAssets(String username) {
        Account account = accountDAO.findOne(username);

        if (account != null) {
            return account.getItems();
        }
        else {
            account = new Account();
            account.setUsername(username);
            account.setCreateTime(new Date());
            account.setUpdateTime(new Date());
            account.setItems(new HashMap<String, List<Item>>());
            accountDAO.save(account);
            return account.getItems();
        }
    }
}

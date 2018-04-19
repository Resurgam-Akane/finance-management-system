package com.xuzhu.fmsincomemanagementservice.service;

import com.xuzhu.fmsincomemanagementservice.domain.Account;
import com.xuzhu.fmsincomemanagementservice.domain.Item;

import java.util.List;

public interface IncomesService {
    List<Item> loadIncomes(String username);
    List<Item> addIncomesItem(String username, Item item);
    List<Item> deleteIncomesItem(String username, int index);
    List<Item> editIncomesItem(String username, int index, Item item);
}

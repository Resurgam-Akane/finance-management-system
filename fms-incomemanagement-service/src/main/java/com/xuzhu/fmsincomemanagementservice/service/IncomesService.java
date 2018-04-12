package com.xuzhu.fmsincomemanagementservice.service;

import com.xuzhu.fmsincomemanagementservice.domain.Account;
import com.xuzhu.fmsincomemanagementservice.domain.Item;

import java.util.List;

public interface IncomesService {
    List<Item> loadIncomes(String username);
    String addIncomesItem(String username, Item item);
    String deleteIncomesItem(String username, Item item);
    String updateIncomesItem(String username, Item item);
}

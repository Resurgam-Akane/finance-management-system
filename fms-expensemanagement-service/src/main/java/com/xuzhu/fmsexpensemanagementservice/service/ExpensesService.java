package com.xuzhu.fmsexpensemanagementservice.service;

import com.xuzhu.fmsexpensemanagementservice.domain.Item;

import java.util.List;

public interface ExpensesService {
    List<Item> loadExpenses(String username);
    List<Item> addExpensesItem(String username, Item item);
    List<Item> deleteExpensesItem(String username, int index);
    List<Item> editExpensesItem(String username, int index, Item item);
    boolean deleteExpenseItemFromFinanceManagement(String username, String itemName, String timePoint);
}

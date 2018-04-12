package com.xuzhu.fmsincomemanagementservice.domain;

import java.util.List;

public class Account {
    private String usernaem;
    List<Item> incomes;

    public void setUsernaem(String usernaem) { this.usernaem = usernaem; }

    public String getUsernaem() { return usernaem; }

    public void setIncome(List<Item> income) { this.incomes = income; }

    public List<Item> getIncome() { return incomes; }

    public void addIncomItem(Item item) { incomes.add(item); }
}

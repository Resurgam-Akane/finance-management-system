package com.xuzhu.fmsapigetway.domain;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/*
    user:Account对应的用户
    lastUpdateTime:最后一次更新时间
    income:各项收入
    expense:各项支出
    savingAmount:储蓄
 */
public class Account {
    // todo: set max and min
    private String username;
    private Date lastUpdateTime;
    private List<Item> income;
    private List<Item> expense;
    private BigDecimal savingAmount;

    public void setUsername(String username) { this.username = username; }

    public String getUsername() { return username; }

    public void setLastUpdateTime(Date lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
    }

    public Date getLastUpdateTime() {
        return lastUpdateTime;
    }

    public void setIncome(List<Item> income) {
        this.income = income;
    }

    public List<Item> getIncome() {
        return income;
    }

    public void setExpense(List<Item> expense) {
        this.expense = expense;
    }

    public List<Item> getExpense() { return expense; }

    public void setSavingAmount(BigDecimal savingAmount) {
        this.savingAmount = savingAmount;
    }

    public BigDecimal getSavingAmount() {
        return savingAmount;
    }
}

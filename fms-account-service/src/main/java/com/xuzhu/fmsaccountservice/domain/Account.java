package com.xuzhu.fmsaccountservice.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/*
    user:Account对应的用户
    UpdateTime:本次更新时间
    savingAmount:储蓄
 */
@Document(collection = "Account")
public class Account {
    // todo: set max and min
    @Id
    private String username;
    private Date updateTime;
    //private List<Item> income;
    //private List<Item> expense;
    private String name;
    private String age;
    private String sex;
    private BigDecimal savingAmount;

    public void setUsername(String username) { this.username = username; }

    public String getUsername() { return username; }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setName(String name) { this.name = name;}

    public String getName() { return name;}

    public void setAge(String age) { this.age = age; }

    public String getAge() { return age; }

    public void setSex(String sex) { this.sex = sex; }

    public String getSex() { return sex; }

    /*public void setIncome(List<Item> income) {
        this.income = income;
    }

    public List<Item> getIncome() {
        return income;
    }

    public void setExpense(List<Item> expense) {
        this.expense = expense;
    }

    public List<Item> getExpense() { return expense; }*/

    public void setSavingAmount(BigDecimal savingAmount) {
        this.savingAmount = savingAmount;
    }

    public BigDecimal getSavingAmount() {
        return savingAmount;
    }
}

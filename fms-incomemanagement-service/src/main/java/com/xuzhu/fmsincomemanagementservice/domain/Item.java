package com.xuzhu.fmsincomemanagementservice.domain;

import java.math.BigDecimal;
import java.util.Date;

public class Item {
    //todo: max and min
    private String itemName;
    private BigDecimal amount;
    private Date incomeTimePoint;
    private Date updateTime;
    private TimePeriod period;

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemName() {
        return itemName;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setPeriod(TimePeriod period) {
        this.period = period;
    }

    public TimePeriod getPeriod() {
        return period;
    }

    public Date getIncomeTimePoint() { return incomeTimePoint; }

    public void setIncomeTimePoint(Date date) { this.incomeTimePoint = date; }

    public Date getUpdateTime(){ return updateTime; }

    public void setUpdateTime(Date updateTime) { this.updateTime = updateTime; }
}

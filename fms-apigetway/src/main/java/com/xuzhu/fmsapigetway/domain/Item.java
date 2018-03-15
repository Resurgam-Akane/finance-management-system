package com.xuzhu.fmsapigetway.domain;

import java.math.BigDecimal;

public class Item {
    //todo: max and min
    private String itemName;
    private BigDecimal amount;
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
}


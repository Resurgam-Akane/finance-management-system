package com.xuzhu.fmsrealassetsservice.domain;

import java.math.BigDecimal;

import static java.lang.Integer.parseInt;

public class Item implements Comparable<Item>{
    private String realAssetsItemName;
    private String realAssetsItemTimePoint;
    private BigDecimal realAssetsItemAmount;
    private String realAssetsItemInfo;

    public void setRealAssetsItemAmount(BigDecimal realAssetsItemAmount) {
        this.realAssetsItemAmount = realAssetsItemAmount;
    }

    public void setRealAssetsItemInfo(String realAssetsItemInfo) {
        this.realAssetsItemInfo = realAssetsItemInfo;
    }

    public void setRealAssetsItemName(String realAssetsItemName) {
        this.realAssetsItemName = realAssetsItemName;
    }

    public void setRealAssetsItemTimePoint(String realAssetsItemTimePoint) {
        this.realAssetsItemTimePoint = realAssetsItemTimePoint;
    }

    public BigDecimal getRealAssetsItemAmount() {
        return realAssetsItemAmount;
    }

    public String getRealAssetsItemInfo() {
        return realAssetsItemInfo;
    }

    public String getRealAssetsItemName() {
        return realAssetsItemName;
    }

    public String getRealAssetsItemTimePoint() {
        return realAssetsItemTimePoint;
    }

    @Override
    public int compareTo(Item o) {
        String[] timePointOfThis = this.realAssetsItemTimePoint.split("-");
        String[] timePointOfO = o.getRealAssetsItemTimePoint().split("-");
        if(parseInt(timePointOfThis[0]) < parseInt(timePointOfO[0])){
            return -1;
        }
        else if (parseInt(timePointOfThis[0]) == parseInt(timePointOfO[0])) {
            if (parseInt(timePointOfThis[1]) < parseInt(timePointOfO[1])) return -1;
            else if (parseInt(timePointOfThis[1]) == parseInt(timePointOfO[1])) {
                if (parseInt(timePointOfThis[2]) < parseInt(timePointOfO[2])) return -1;
                else if (parseInt(timePointOfThis[2]) == parseInt(timePointOfO[2])) return 0;
                else return 1;
            }
            else return 1;
        }
        else return 1;
    }
}

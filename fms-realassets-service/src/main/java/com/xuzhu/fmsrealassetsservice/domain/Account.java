package com.xuzhu.fmsrealassetsservice.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.*;

@Document(collection = "RealAssetAccount")
public class Account {
    @Id
    private String username;
    private Map<String, List<Item>> items;
    private Date createTime;
    private Date updateTime;

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setItems(Map<String, List<Item>> items) {
        this.items = items;
    }

    public Map<String, List<Item>> getItems() {
        return items;
    }

    public void addRealAssetsItem(Item item) {
        if (items != null) {
            if (items.containsKey(item.getRealAssetsItemName())) {
                List<Item> oneList = items.get(item.getRealAssetsItemName());
                oneList.add(item);
                Collections.sort(oneList);
                items.put(item.getRealAssetsItemName(), oneList);
            }
            else {
                List<Item> oneList = new ArrayList<>();
                oneList.add(item);
                items.put(item.getRealAssetsItemName(), oneList);
            }
        }
        else {
            items = new HashMap<String, List<Item>>();
            List<Item> oneList = new ArrayList<>();
            oneList.add(item);
            items.put(item.getRealAssetsItemName(), oneList);
        }
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }
}

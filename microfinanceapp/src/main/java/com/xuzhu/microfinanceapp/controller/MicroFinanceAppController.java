package com.xuzhu.microfinanceapp.controller;

import com.xuzhu.microfinanceapp.domain.Account;
import com.xuzhu.microfinanceapp.domain.Item;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.*;

@RestController
public class MicroFinanceAppController {
    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    Account Data(@PathVariable String username) {
        Account account = new Account();
        List<Item> items = new ArrayList<>();
        Map<String, List<Item>> data = new HashMap<String, List<Item>>();

        account.setUsername(username);
        account.setCreateTime(new Date());
        account.setUpdateTime(new Date());

        Item item;
        Random rand = new Random();
        for (int i = 0; i != 5; ++i) {
            item = new Item();
            item.setFinanceItemName("微理财余额宝");
            item.setFinanceItemKind("微理财余额宝");
            item.setFinanceItemOutOrIn("收入");
            item.setFinanceItemPerPrice(new BigDecimal(rand.nextInt(10) + 1));
            item.setFinanceItemAmount(new BigDecimal(100));
            item.setFinanceItemTimePoint("2018-05-0" + String.valueOf(i+1));
            item.setFinanceItemInfo("");
            items.add(item);
        }
        data.put("微理财余额宝", items);
        account.setItems(data);
        return account;
    }
}

package com.xuzhu.fmsfinanceproductservice.controller;

import com.netflix.discovery.converters.Auto;
import com.xuzhu.fmsfinanceproductservice.client.ExpenseClient;
import com.xuzhu.fmsfinanceproductservice.client.IncomeClient;
import com.xuzhu.fmsfinanceproductservice.domain.ExpenseItem;
import com.xuzhu.fmsfinanceproductservice.domain.IncomeItem;
import com.xuzhu.fmsfinanceproductservice.domain.Item;
import com.xuzhu.fmsfinanceproductservice.service.FinanceProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
public class FinanceProductController {

    @Autowired
    FinanceProductService financeProductService;

    @Autowired
    IncomeClient incomeClient;

    @Autowired
    ExpenseClient expenseClient;

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    Map<String, List<Item>> loadFinanceProductItem(@PathVariable String username) {
        return financeProductService.loadFinanceProduct(username);
    }

    @RequestMapping(value = "/addFinanceProductItem/{username}", method = RequestMethod.POST)
    Map<String, List<Item>> addFinanceProductItem(@PathVariable String username, @RequestBody Item item) {
        if (item.getFinanceItemOutOrIn().equals("卖出")) {
            IncomeItem incomeItem = new IncomeItem();
            if (item.getFinanceItemKind().equals("股票")) {
                incomeItem.setIncomeItemName("股票-" + item.getFinanceItemName());
            }
            else {
                incomeItem.setIncomeItemName("基金-" + item.getFinanceItemName());
            }
            incomeItem.setIncomeItemAmount(item.getFinanceItemAmount().multiply(item.getFinanceItemPerPrice()));
            incomeItem.setIncomeItemTimePoint(item.getFinanceItemTimePoint());
            incomeItem.setIncomeItemSource("其他");
            incomeItem.setIncomeItemMode("银行");
            incomeItem.setIncomeItemPeriod("一次性收入");
            incomeItem.setUpdateTime(new Date());
            incomeItem.setIncomeItemInfo("通过理财管理添加" + item.getFinanceItemInfo());
            incomeClient.addFinanceProductIntoIncomeManagement(username, incomeItem);
        }
        else {
            ExpenseItem expenseItem = new ExpenseItem();
            if (item.getFinanceItemKind().equals("股票")) {
                expenseItem.setExpenseItemName("股票-" + item.getFinanceItemName());
            }
            else {
                expenseItem.setExpenseItemName("基金-" + item.getFinanceItemName());
            }
            expenseItem.setExpenseItemAmount(item.getFinanceItemAmount().multiply(item.getFinanceItemPerPrice()));
            expenseItem.setExpenseItemTimePoint(item.getFinanceItemTimePoint());
            expenseItem.setExpenseItemSource("其他");
            expenseItem.setExpenseItemMode("银行");
            expenseItem.setExpenseItemPeriod("一次性支出");
            expenseItem.setUpdateTime(new Date());
            expenseItem.setExpenseItemName("通过理财管理添加" + item.getFinanceItemInfo());
            expenseClient.addFinanceProductIntoExpenseManagement(username, expenseItem);
        }
        return financeProductService.addFinanceProductItem(username, item);
    }

    @RequestMapping(value = "/editFinanceProductItem/{username}/{index}", method = RequestMethod.POST)
    Map<String, List<Item>> editFinanceProductItem(@PathVariable String username, @PathVariable String index, @RequestBody Item item) {
        return financeProductService.editFinanceProductItem(username, item, Integer.parseInt(index));
    }

    @RequestMapping(value = "/deleteFinanceProductItem/{username}/{financeItemName}/{financeItemTimePoint}", method = RequestMethod.POST)
    Map<String, List<Item>> deleteFinanceProductItem(@PathVariable String username, @PathVariable String financeItemName, @PathVariable String financeItemTimePoint) {
        return financeProductService.deleteFinanceProductItem(username, financeItemName, financeItemTimePoint);
    }

}

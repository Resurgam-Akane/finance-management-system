package com.xuzhu.fmsfinanceproductservice.controller;

import com.xuzhu.fmsfinanceproductservice.client.IncomeClient;
import com.xuzhu.fmsfinanceproductservice.domain.IncomeItem;
import com.xuzhu.fmsfinanceproductservice.domain.Item;
import com.xuzhu.fmsfinanceproductservice.service.FinanceProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
public class FinanceProductController {

    @Autowired
    FinanceProductService financeProductService;

    @Autowired
    IncomeClient incomeClient;

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    Map<String, List<Item>> loadFinanceProductItem(@PathVariable String username) {
        return financeProductService.loadFinanceProduct(username);
    }

    @RequestMapping(value = "/addFinanceProductItem/{username}", method = RequestMethod.POST)
    Map<String, List<Item>> addFinanceProductItem(@PathVariable String username, @RequestBody Item item) {
        IncomeItem incomeItem = new IncomeItem();
        incomeItem.setIncomeItemName("haha");
        incomeItem.setIncomeItemAmount(new BigDecimal(0));
        //todo: Feign is working, there is some properties of incomeItem need to be setted.
        incomeClient.addFinanceProductIntoIncomeManagement(username, incomeItem);
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

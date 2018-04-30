package com.xuzhu.fmsfinanceproductservice.controller;

import com.xuzhu.fmsfinanceproductservice.domain.Item;
import com.xuzhu.fmsfinanceproductservice.service.FinanceProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class FinanceProductController {

    @Autowired
    FinanceProductService financeProductService;

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    Map<String, List<Item>> loadFinanceProductItem(@PathVariable String username) {
        return financeProductService.loadFinanceProduct(username);
    }

    @RequestMapping(value = "/addFinanceProductItem/{username}", method = RequestMethod.POST)
    Map<String, List<Item>> addFinanceProductItem(@PathVariable String username, @RequestBody Item item) {
        return financeProductService.addFinanceProductItem(username, item);
    }

    @RequestMapping(value = "/editFinanceProductItem/{username}/{index}", method = RequestMethod.POST)
    Map<String, List<Item>> editFinanceProductItem(@PathVariable String username, @PathVariable String index, @RequestBody Item item) {
        return financeProductService.editFinanceProductItem(username, item, Integer.parseInt(index));
    }

    @RequestMapping(value = "/deleteFinanceProductItem/{username}/{financeProductItemName}/{financeProductItemTimePoint}", method = RequestMethod.POST)
    Map<String, List<Item>> deleteFinanceProductItem(@PathVariable String username, @PathVariable String financeProductItemName, @PathVariable String financeProductItemTimePoint) {
        return financeProductService.deleteFinanceProductItem(username, financeProductItemName, financeProductItemTimePoint);
    }

}

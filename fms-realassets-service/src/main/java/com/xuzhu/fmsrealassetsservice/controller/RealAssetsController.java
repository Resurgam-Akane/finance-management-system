package com.xuzhu.fmsrealassetsservice.controller;

import com.fasterxml.jackson.databind.annotation.JsonAppend;
import com.xuzhu.fmsrealassetsservice.domain.Item;
import com.xuzhu.fmsrealassetsservice.service.RealAssetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class RealAssetsController {

    @Autowired
    RealAssetsService realAssetsService;

    /*@RequestMapping(value = "/haha", method = RequestMethod.GET)
    public Map<String, List<Item>> hehe() {
        Map<String, List<Item>> testMap = new HashMap<String, List<Item>>();
        List<Item> testList = new ArrayList<>();
        BigDecimal num1 = new BigDecimal(1000), num2 = new BigDecimal(2000);
        Item item1 = new Item(), item2 = new Item();
        item1.setRealAssetsItemName("china");
        item1.setRealAssetsItemAmount(num1);
        item1.setRealAssetsItemInfo("item1");
        item1.setRealAssetsItemTimePoint("item1");
        item2.setRealAssetsItemName("japan");
        item2.setRealAssetsItemAmount(num2);
        item2.setRealAssetsItemInfo("item2");
        item2.setRealAssetsItemTimePoint("item2");
        testList.add(item1);
        testList.add(item2);
        testMap.put("test", testList);

        return testMap;
    }*/

    @RequestMapping(value = "/addRealAssetsItem/{username}", method = RequestMethod.POST)
    public Map<String, List<Item>> addRealAssetsItem(@PathVariable String username, @Valid @RequestBody Item item) {
        return realAssetsService.addRealAssetsItem(username, item);
    }

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public Map<String, List<Item>> loadRealAssetsItem(@PathVariable String username) {
        return realAssetsService.loadRealAssets(username);
    }

    @RequestMapping(value = "/editRealAssetsItem/{username}/{index}", method = RequestMethod.POST)
    public Map<String, List<Item>> editRealAssetsItem(@PathVariable String username, @PathVariable String index, @Valid @RequestBody Item item) {
        return realAssetsService.editRealAssetsItem(username, item, Integer.parseInt(index));
    }

    @RequestMapping(value = "/deleteRealAssetsItem/{username}/{realAssetsItemName}/{realAssetsItemTimePoint}", method = RequestMethod.POST)
    public Map<String, List<Item>> deleteRealAssetsItem(@PathVariable String username, @PathVariable String realAssetsItemName, @PathVariable String realAssetsItemTimePoint) {
        return realAssetsService.deleteRealAssetsItem(username, realAssetsItemName, realAssetsItemTimePoint);
    }
}

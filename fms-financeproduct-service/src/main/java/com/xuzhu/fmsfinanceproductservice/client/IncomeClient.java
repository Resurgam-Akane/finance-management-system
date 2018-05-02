package com.xuzhu.fmsfinanceproductservice.client;

import com.xuzhu.fmsfinanceproductservice.domain.IncomeItem;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(value = "fms-incomemanagement-service")
public interface IncomeClient {
    @RequestMapping(value = "/addIncomeItem/{username}", method = RequestMethod.POST)
    void addFinanceProductIntoIncomeManagement(@PathVariable("username") String username, @RequestBody IncomeItem incomeItem);
}

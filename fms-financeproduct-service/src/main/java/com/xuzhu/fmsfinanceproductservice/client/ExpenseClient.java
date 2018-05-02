package com.xuzhu.fmsfinanceproductservice.client;

import com.xuzhu.fmsfinanceproductservice.domain.ExpenseItem;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(value = "fms-expensemanagement-service")
public interface ExpenseClient {
    @RequestMapping(value = "/addExpenseItem/{username}", method = RequestMethod.POST)
    void addFinanceProductIntoExpenseManagement(@PathVariable("username") String username, @RequestBody ExpenseItem expenseItem);
}

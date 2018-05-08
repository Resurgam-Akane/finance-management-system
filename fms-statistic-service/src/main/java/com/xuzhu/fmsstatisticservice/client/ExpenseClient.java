package com.xuzhu.fmsstatisticservice.client;

import com.xuzhu.fmsstatisticservice.domain.ExpenseItem;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(value = "fms-expensemanagement-service", fallback = expenseClientFallback.class)
public interface ExpenseClient {
    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    List<ExpenseItem> loadExpenseItem(@PathVariable("username") String username);
}

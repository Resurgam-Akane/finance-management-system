package com.xuzhu.fmsfinanceproductservice.client;

import org.springframework.cloud.netflix.feign.FeignClient;

@FeignClient(value = "fms-expensemanagement-service")
public interface ExpenseClient {
}

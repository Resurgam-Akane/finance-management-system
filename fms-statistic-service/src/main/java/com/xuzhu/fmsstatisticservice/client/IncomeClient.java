package com.xuzhu.fmsstatisticservice.client;

import com.xuzhu.fmsstatisticservice.domain.IncomeItem;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(value = "fms-incomemanagement-service", fallback = incomeClientFallback.class)
public interface IncomeClient {
    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    List<IncomeItem> loadIncomeItem(@PathVariable("username") String username);
}

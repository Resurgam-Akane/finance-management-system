package com.xuzhu.fmsapigetway.client;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient("fms-account-service")
public interface AccountServiceClient {
    @RequestMapping(value = "/account/{username}", method = RequestMethod.GET)
    String getAccountsByUsername(@PathVariable("username") String username);
}

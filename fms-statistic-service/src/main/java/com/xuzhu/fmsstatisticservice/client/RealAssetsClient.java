package com.xuzhu.fmsstatisticservice.client;

import com.xuzhu.fmsstatisticservice.domain.RealAssetsItem;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.Map;

//@FeignClient(value = "fms-realassets-service", fallback = realAssetsClientFallback.class)
@FeignClient(value = "fms-realassets-service")
public interface RealAssetsClient {
    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    Map<String, List<RealAssetsItem>> loadRealAssetsItem(@PathVariable("username") String username);
}

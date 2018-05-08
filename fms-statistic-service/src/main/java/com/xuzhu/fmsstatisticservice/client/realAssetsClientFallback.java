package com.xuzhu.fmsstatisticservice.client;

import com.xuzhu.fmsstatisticservice.domain.RealAssetsItem;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class realAssetsClientFallback implements RealAssetsClient{
    @Override
    public Map<String, List<RealAssetsItem>> loadRealAssetsItem(String username) {
        return null;
    }
}

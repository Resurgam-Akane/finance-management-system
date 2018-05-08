package com.xuzhu.fmsstatisticservice.client;

import com.xuzhu.fmsstatisticservice.domain.FinanceProductItem;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class financeProductClientFallback implements FinanceProductClient{
    @Override
    public Map<String, List<FinanceProductItem>> loadFinanceProductItem(String username) {
        return null;
    }
}

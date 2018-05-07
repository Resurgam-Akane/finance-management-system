package com.xuzhu.fmsstatisticservice.client;

import com.xuzhu.fmsstatisticservice.domain.IncomeItem;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class incomeClientFallback implements IncomeClient{
    @Override
    public List<IncomeItem> loadIncomeItem(String username) {
        return null;
    }
}

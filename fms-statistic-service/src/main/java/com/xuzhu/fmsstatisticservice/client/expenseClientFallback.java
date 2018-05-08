package com.xuzhu.fmsstatisticservice.client;

import com.xuzhu.fmsstatisticservice.domain.ExpenseItem;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class expenseClientFallback implements ExpenseClient{
    @Override
    public List<ExpenseItem> loadExpenseItem(String username) {
        return null;
    }
}

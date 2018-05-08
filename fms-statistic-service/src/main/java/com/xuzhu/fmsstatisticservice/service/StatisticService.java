package com.xuzhu.fmsstatisticservice.service;

import com.xuzhu.fmsstatisticservice.domain.ExpenseItem;
import com.xuzhu.fmsstatisticservice.domain.IncomeItem;
import com.xuzhu.fmsstatisticservice.domain.RealAssetsItem;

import java.util.Date;
import java.util.List;
import java.util.Map;

public interface StatisticService {
    boolean generateExcelFile(String username, Date date, List<IncomeItem> incomeItems, List<ExpenseItem> expenseItems, Map<String, List<RealAssetsItem>> realAssetsItems);
}

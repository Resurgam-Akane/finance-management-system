package com.xuzhu.fmsstatisticservice.service;

import java.util.Date;

public interface StatisticService {
    boolean generateExcelFile(String username, Date date);
}

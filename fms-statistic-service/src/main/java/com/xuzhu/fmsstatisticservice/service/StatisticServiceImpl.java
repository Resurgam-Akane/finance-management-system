package com.xuzhu.fmsstatisticservice.service;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Service;

import java.io.FileOutputStream;
import java.util.Date;

@Service
public class StatisticServiceImpl implements StatisticService {
    @Override
    public boolean generateExcelFile(String username, Date date){
        try {
            Workbook wb = new HSSFWorkbook();
            Sheet sheet = (Sheet) wb.createSheet("0");
            Row row = sheet.createRow(0);
            Cell cell = row.createCell(0);
            cell.setCellValue("测试");
            wb.write(new FileOutputStream(".\\StatisticFile\\" + username + ".xls"));
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}

package com.xuzhu.fmsstatisticservice.service;

import com.xuzhu.fmsstatisticservice.domain.ExpenseItem;
import com.xuzhu.fmsstatisticservice.domain.IncomeItem;
import com.xuzhu.fmsstatisticservice.domain.RealAssetsItem;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Service;

import java.io.FileOutputStream;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class StatisticServiceImpl implements StatisticService {
    @Override
    public boolean generateExcelFile(String username, Date date, List<IncomeItem> incomeItems, List<ExpenseItem> expenseItems, Map<String, List<RealAssetsItem>> realAssetsItems){
        try {
            int row = 0, col = 0;
            Workbook wb = new HSSFWorkbook();
            Sheet sheet = (Sheet) wb.createSheet("0");
            //Row row = sheet.createRow(0);
            //Cell cell = row.createCell(0);
            if (incomeItems != null){
                String incomeTitileRow[] = {"收入项目名称", "收入金额", "方式", "来源", "时间", "频率", "备注"};
                Row incomeRow = sheet.createRow(row);
                for (int i = 0; i != incomeTitileRow.length; ++i) {
                    Cell cell = incomeRow.createCell(i);
                    cell.setCellValue(incomeTitileRow[i]);
                }
            }
            ++row;
            if (expenseItems != null) {
                String expenseTitleRow[] = {"支出项目名称", "支出金额", "方式", "去向", "时间", "频率", "备注"};
                Row expenseRow = sheet.createRow(row);
                for(int i = 0; i != expenseTitleRow.length; ++i) {
                    Cell cell = expenseRow.createCell(i);
                    cell.setCellValue(expenseTitleRow[i]);
                }
            }
            ++row;
            if (realAssetsItems != null) {
                String realAssetsTitleRow[] = {"实物资产名称", "价值", "日期", "备注"};
                Row realAssetsRow = sheet.createRow(row);
                for (int i = 0; i != realAssetsTitleRow.length; ++i) {
                    Cell cell = realAssetsRow.createCell(i);
                    cell.setCellValue(realAssetsTitleRow[i]);
                }
            }
            wb.write(new FileOutputStream(".\\StatisticFile\\" + username + ".xls"));
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}

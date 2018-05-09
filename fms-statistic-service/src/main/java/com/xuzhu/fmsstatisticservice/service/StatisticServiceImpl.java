package com.xuzhu.fmsstatisticservice.service;

import com.xuzhu.fmsstatisticservice.domain.ExpenseItem;
import com.xuzhu.fmsstatisticservice.domain.IncomeItem;
import com.xuzhu.fmsstatisticservice.domain.RealAssetsItem;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Service;

import java.io.File;
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
            HSSFWorkbook wb = new HSSFWorkbook();
            HSSFSheet sheet = wb.createSheet("0");
            if (incomeItems != null){
                if (incomeItems.size() != 0) {
                    String incomeTitileRow[] = {"收入项目名称", "收入金额", "方式", "来源", "时间", "频率", "备注"};
                    HSSFRow incomeRow = sheet.createRow(row);
                    for (int i = 0; i != incomeTitileRow.length; ++i) {
                        HSSFCell cell = incomeRow.createCell(i);
                        cell.setCellValue(incomeTitileRow[i]);
                    }
                    ++row;
                    for (int i = 0; i != incomeItems.size(); ++i) {
                        int rownum = i + row;
                        HSSFRow incomeRowForithItem = sheet.createRow(rownum);
                        for (int j = 0; j != 7; ++j) {
                            HSSFCell cell = incomeRowForithItem.createCell(j);
                            switch (j) {
                                case 0:
                                    cell.setCellValue(incomeItems.get(i).getIncomeItemName());
                                    break;
                                case 1:
                                    cell.setCellValue(incomeItems.get(i).getIncomeItemAmount().toString());
                                    break;
                                case 2:
                                    cell.setCellValue(incomeItems.get(i).getIncomeItemMode());
                                    break;
                                case 3:
                                    cell.setCellValue(incomeItems.get(i).getIncomeItemSource());
                                    break;
                                case 4:
                                    cell.setCellValue(incomeItems.get(i).getIncomeItemPeriod());
                                    break;
                                case 5:
                                    cell.setCellValue(incomeItems.get(i).getIncomeItemTimePoint());
                                    break;
                                case 6:
                                    cell.setCellValue(incomeItems.get(i).getIncomeItemInfo());
                                    break;
                                    default:
                                        break;
                            }
                        }
                    }
                    row = 2 + incomeItems.size();
                }
                else {
                    HSSFRow incomeRow = sheet.createRow(row);
                    HSSFCell cell = incomeRow.createCell(0);
                    cell.setCellValue("尚未添加收入项目");
                }
            }
            else {
                Row incomeRow = sheet.createRow(row);
                Cell cell = incomeRow.createCell(0);
                cell.setCellValue("收入管理服务不可用或调用接口失败，稍后重试！");
            }

            ++row;
            if (expenseItems != null) {
                if (expenseItems.size() != 0) {
                    String expenseTitleRow[] = {"支出项目名称", "支出金额", "方式", "去向", "时间", "频率", "备注"};
                    HSSFRow expenseRow = sheet.createRow(row);
                    for (int i = 0; i != expenseTitleRow.length; ++i) {
                        HSSFCell cell = expenseRow.createCell(i);
                        cell.setCellValue(expenseTitleRow[i]);
                    }
                    ++row;
                    for (int i = 0; i != expenseItems.size(); ++i) {
                        int rownum = i + row;
                        HSSFRow expenseRowForithItem = sheet.createRow(rownum);
                        for (int j = 0; j != 7; ++j) {
                            HSSFCell cell = expenseRowForithItem.createCell(j);
                            switch (j) {
                                case 0:
                                    cell.setCellValue(expenseItems.get(i).getExpenseItemName());
                                    break;
                                case 1:
                                    cell.setCellValue(expenseItems.get(i).getExpenseItemAmount().toString());
                                    break;
                                case 2:
                                    cell.setCellValue(expenseItems.get(i).getExpenseItemMode());
                                    break;
                                case 3:
                                    cell.setCellValue(expenseItems.get(i).getExpenseItemSource());
                                    break;
                                case 4:
                                    cell.setCellValue(expenseItems.get(i).getExpenseItemPeriod());
                                    break;
                                case 5:
                                    cell.setCellValue(expenseItems.get(i).getExpenseItemTimePoint());
                                    break;
                                case 6:
                                    cell.setCellValue(expenseItems.get(i).getExpenseItemInfo());
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    row += 1 + expenseItems.size();
                }
                else {
                    HSSFRow expenseRow = sheet.createRow(row);
                    HSSFCell cell = expenseRow.createCell(0);
                    cell.setCellValue("尚未添加支出项");
                }
            }
            else {
                HSSFRow expenseRow = sheet.createRow(row);
                HSSFCell cell = expenseRow.createCell(0);
                cell.setCellValue("支出管理服务不可用或调用接口失败，稍后重试！");
            }

            ++row;
            if (realAssetsItems != null) {
                if (realAssetsItems.size() != 0) {
                    String realAssetsTitleRow[] = {"实物资产名称", "价值", "日期", "备注"};
                    HSSFRow realAssetsRow = sheet.createRow(row);
                    for (int i = 0; i != realAssetsTitleRow.length; ++i) {
                        HSSFCell cell = realAssetsRow.createCell(i);
                        cell.setCellValue(realAssetsTitleRow[i]);
                    }
                    ++row;
                    for (String key : realAssetsItems.keySet()) {
                        for (int i = 0; i != realAssetsItems.get(key).size(); ++i) {
                            int rownum = i + row;
                            HSSFRow realAssetsRowForithItem = sheet.createRow(rownum);
                            for (int j = 0; j != 4; ++j) {
                                HSSFCell cell = realAssetsRowForithItem.createCell(j);
                                switch (j) {
                                    case 0:
                                        cell.setCellValue(realAssetsItems.get(key).get(i).getRealAssetsItemName());
                                        break;
                                    case 1:
                                        cell.setCellValue(realAssetsItems.get(key).get(i).getRealAssetsItemAmount().toString());
                                        break;
                                    case 2:
                                        cell.setCellValue(realAssetsItems.get(key).get(i).getRealAssetsItemTimePoint());
                                        break;
                                    case 3:
                                        cell.setCellValue(realAssetsItems.get(key).get(i).getRealAssetsItemInfo());
                                        break;
                                        default:
                                            break;
                                }
                            }
                        }
                        row += realAssetsItems.get(key).size() + 1;
                    }
                }
                else {
                    HSSFRow realAssetsRow = sheet.createRow(row);
                    HSSFCell cell = realAssetsRow.createCell(0);
                    cell.setCellValue("尚未添加实物资产项");
                }
            }
            else {
                HSSFRow realAssetsRow = sheet.createRow(row);
                HSSFCell cell = realAssetsRow.createCell(0);
                cell.setCellValue("实物资产服务不可用或接口调用失败，稍后重试！");
            }
            File file = new File(".\\StatisticFile\\" + username + ".xls");
            if (file.exists())
                if (file.isFile())
                    file.delete();
            wb.write(new FileOutputStream(".\\StatisticFile\\" + username + ".xls"));
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}

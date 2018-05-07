package com.xuzhu.fmsstatisticservice.controller;

import com.xuzhu.fmsstatisticservice.client.IncomeClient;
import com.xuzhu.fmsstatisticservice.domain.IncomeItem;
import com.xuzhu.fmsstatisticservice.service.StatisticService;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletOutputStream;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.Date;
import java.util.List;

@RestController
public class StatisticController {

    @Autowired
    StatisticService statisticService;

    @Autowired
    IncomeClient incomeClient;

    @RequestMapping(value = "/DownloadFile/{username}", method = RequestMethod.GET)
    public void downloadFile(@PathVariable String username, HttpServletRequest request, HttpServletResponse response) throws Exception {
        statisticService.generateExcelFile(username, new Date());
        response.setContentType("application/octet-stream");
        response.setHeader("Content-disposition", "attachment;filename=" + username + ".xls");//默认Excel名称
        response.flushBuffer();
        String filePath = ".\\StatisticFile\\" + username + ".xls";
        File excel = new File(filePath);
        FileInputStream fis = new FileInputStream(excel);
        Workbook wb = new HSSFWorkbook(fis);
        wb.write(response.getOutputStream());
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test() {
        List<IncomeItem> incomeItem = incomeClient.loadIncomeItem("xuzhu");
        if (incomeItem == null) return "hh";
        else return "111";
    }
}

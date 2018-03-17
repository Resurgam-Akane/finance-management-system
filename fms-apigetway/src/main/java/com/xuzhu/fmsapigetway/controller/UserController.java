package com.xuzhu.fmsapigetway.controller;

import com.xuzhu.fmsapigetway.domain.*;
import com.xuzhu.fmsapigetway.service.UserService;
import com.xuzhu.fmsapigetway.client.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private AccountServiceClient accountServiceClient;

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String Register() { return "register"; }

    @PostMapping("/register")
    public String doRegister(User user){
        // 此处省略校验逻辑
        if (userService.create(user))
            return "redirect:register?success";
        return "redirect:register?error";
    }

    @GetMapping("/account/{username}")
    public String getAccountByUsername(@PathVariable String username, Model model) {
        //return accountServiceClient.getAccountsByUsername(username);
        Account account = accountServiceClient.getAccountsByUsername(username);
        model.addAttribute("account", account);
        return "user";
        //todo:添加一个模板  使用的是@Controller方式  可以接受account对象 Feign调用正常
    }
}

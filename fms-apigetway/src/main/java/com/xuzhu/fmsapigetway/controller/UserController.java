package com.xuzhu.fmsapigetway.controller;

import com.xuzhu.fmsapigetway.domain.User;
import com.xuzhu.fmsapigetway.service.UserService;
import com.xuzhu.fmsapigetway.client.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
    public String getAccountByUsername(@PathVariable String username) {
        return accountServiceClient.getAccountsByUsername(username);
    }
}

package com.xuzhu.fmsapigetway.controller;

import com.xuzhu.fmsapigetway.domain.*;
import com.xuzhu.fmsapigetway.service.UserService;
import com.xuzhu.fmsapigetway.client.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private AccountServiceClient accountServiceClient;

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String Register() { return "register"; }

    @RequestMapping("/login")
    public String login() {
        return "login";
    }

    @PostMapping("/register")
    @ResponseBody
    public String doRegister(User user){
        // 此处省略校验逻辑
        if (userService.create(user))
            return "success";
        return "error";
    }

    @RequestMapping(value = "/user/current", method = RequestMethod.GET)
    public String getUser(Principal principal) {
        return "user";
    }

/*    @GetMapping("/account/{username}")
    public String getAccountByUsername(@PathVariable String username, Model model) {
        //return accountServiceClient.getAccountsByUsername(username);
        Account account = accountServiceClient.getAccountsByUsername(username);
        model.addAttribute("account", account);
        return "user";
    }*/
}

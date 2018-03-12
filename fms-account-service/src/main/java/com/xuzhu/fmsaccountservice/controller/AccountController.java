package com.xuzhu.fmsaccountservice.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {
    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public String getAccountByUsername(@PathVariable String username) {
        return username + " hello.";
    }
}

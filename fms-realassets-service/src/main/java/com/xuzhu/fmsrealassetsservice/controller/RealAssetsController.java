package com.xuzhu.fmsrealassetsservice.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RealAssetsController {

    @RequestMapping(value = "/haha", method = RequestMethod.GET)
    public String hehe() {
        return "hh";
    }
}

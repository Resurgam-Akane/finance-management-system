package com.xuzhu.fmsauthservice.controller;

import com.xuzhu.fmsauthservice.domain.User;
import com.xuzhu.fmsauthservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import javax.validation.Valid;
import java.security.Principal;

@Controller
public class UserController {

    /*@Autowired
    private UserService userService;*/

    /*@RequestMapping(value = "/user", method = RequestMethod.GET)
    public Principal getUser(Principal principal) {
        return principal;
    }*/

    @GetMapping("/user")
    public String user(@AuthenticationPrincipal Principal principal, Model model){
        model.addAttribute("username", principal.getName());
        return "user/user";
    }

//    @PreAuthorize("#oauth2.hasScope('server')")
    /*@RequestMapping(value = "/registry", method = RequestMethod.POST)
    public void createUser(@Valid @RequestBody User user) {
        userService.create(user);
    }*/
}

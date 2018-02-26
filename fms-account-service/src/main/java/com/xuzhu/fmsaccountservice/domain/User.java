package com.xuzhu.fmsaccountservice.domain;

public class User {

    //todo: set max min length of username and password
    private String username;
    private String password;

    public void setUsername(String name) { this.username = name; }

    public String getUsername() { return username; }

    public void setPassword(String password) { this.password = password; }

    public String getPassword() { return password; }

}

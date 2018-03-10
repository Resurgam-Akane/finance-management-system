package com.xuzhu.fmsauthservice.service;

import com.thoughtworks.xstream.mapper.Mapper;
import com.xuzhu.fmsauthservice.domain.User;
import com.xuzhu.fmsauthservice.DAO.UserDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import static org.springframework.util.ObjectUtils.isEmpty;

@Service
public class UserServiceImpl implements UserService{

    private final Logger log = LoggerFactory.getLogger(getClass());

    //private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    private UserDAO userDAO;

    @Override
    public boolean create(User user) {
        User existing = userDAO.findOne(user.getUsername());
        if(!isEmpty(existing)) return false;

        //String hash = encoder.encode(user.getPassword());
        //user.setPassword(hash);
        user.setPassword(user.getPassword());
        user.setRoles("ROLE_USER");

        userDAO.save(user);

        log.info("new user has been created: {}", user.getUsername());
        return true;
    }
}

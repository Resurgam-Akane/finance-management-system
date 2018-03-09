package com.xuzhu.fmsauthservice.DAO;

import com.xuzhu.fmsauthservice.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDAO extends CrudRepository<User, String>{

}

package com.xuzhu.fmsapigetway.DAO;

import com.xuzhu.fmsapigetway.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDAO extends CrudRepository<User, String> {

}

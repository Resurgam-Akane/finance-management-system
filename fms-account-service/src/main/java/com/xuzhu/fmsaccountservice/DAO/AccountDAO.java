package com.xuzhu.fmsaccountservice.DAO;

import com.xuzhu.fmsaccountservice.domain.*;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface AccountDAO extends CrudRepository<Account, String>{

}

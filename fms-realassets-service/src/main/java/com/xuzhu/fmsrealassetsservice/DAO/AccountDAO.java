package com.xuzhu.fmsrealassetsservice.DAO;

import com.xuzhu.fmsrealassetsservice.domain.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountDAO extends CrudRepository<Account, String> {

}

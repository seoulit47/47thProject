package com.seoulit.erp47.acc.resol.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.resol.to.AccountBean;

public interface AccountDAO {

    List<AccountBean> selectAccount(Map<String, String> argsMap);

}

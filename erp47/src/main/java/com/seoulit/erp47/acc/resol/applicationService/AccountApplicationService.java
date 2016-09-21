package com.seoulit.erp47.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.resol.to.AccountBean;

public interface AccountApplicationService {

    List<AccountBean> findAccount(Map<String, String> argsMap);



}

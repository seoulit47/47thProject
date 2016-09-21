package com.seoulit.erp47.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.resol.dao.AccountDAO;
import com.seoulit.erp47.acc.resol.to.AccountBean;

@Service
public class AccountApplicationServiceImpl implements AccountApplicationService{
    @Autowired
    AccountDAO accountDAO;

    @Override
    public List<AccountBean> findAccount(Map<String, String> argsMap) {
        return accountDAO.selectAccount(argsMap);
    }

}

package com.seoulit.erp47.com.base.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.com.base.exception.IdNotFoundException;
import com.seoulit.erp47.com.base.exception.PwMissMatchException;
import com.seoulit.erp47.hrs.emp.dao.EmpDAO;
import com.seoulit.erp47.hrs.emp.to.EmpBean;

@Component
public class LoginApplicationServiceImpl implements LoginApplicationService {

    @Autowired
    private EmpDAO empDAO;
    //@Autowired
    //private MenuDAO menuDAO;

    @Autowired
    private ResourceBundleMessageSource messageSource;

    @Override
    public Map<String, Object> login(Map<String, String> argsMap) throws IdNotFoundException, PwMissMatchException {
        Map<String, Object> login = new HashMap<>();
        EmpBean empBean = empDAO.selectEmp(argsMap);
        System.out.println(":::::"+empBean.getEmpNm()+":::::");
        
        if (empBean == null) { 
            throw new IdNotFoundException(messageSource.getMessage("idNotFound", null, Locale.KOREAN));
        } else if (empBean.getPassword().equals(argsMap.get("empPw"))) {
            login.put("empInfo", empBean);
        } else {
            throw new PwMissMatchException(messageSource.getMessage("pwMissMatch", null, Locale.KOREAN));
        }
        return login;
    }
}

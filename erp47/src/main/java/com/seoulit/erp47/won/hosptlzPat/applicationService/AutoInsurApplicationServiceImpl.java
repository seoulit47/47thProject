package com.seoulit.erp47.won.hosptlzPat.applicationService;

import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.hosptlzPat.dao.AutoInsurDAO;
import com.seoulit.erp47.won.hosptlzPat.exception.HosptlzInsurPatException;
import com.seoulit.erp47.won.hosptlzPat.to.AutoInsurBean;

/**
 * @Package com.seoul.his.won.hosptlzPat.applicationService
 * @Class AutoInsurApplicationServiceImpl.java
 * @Create 2016.10.14
 * @Author 박 영 희
 * @Description
 *
 * @LastUpdated
 */
@Service
public class AutoInsurApplicationServiceImpl implements AutoInsurApplicationService {
    @Autowired
    private AutoInsurDAO autoInsurDAO;
    
    @Autowired
    ResourceBundleMessageSource messageSource;
    
    @Override
    public List<AutoInsurBean> findAutoInsurList(String patNo) {
  
        List<AutoInsurBean> autoInsurBeans = autoInsurDAO.selectAutoInsurList(patNo);
        return autoInsurBeans;
    }

    @Override
    public void batchAutoInsurList(List<AutoInsurBean> autoInsurBeans) throws HosptlzInsurPatException{
        System.out.println("batchAutoInsurList");
        for (AutoInsurBean autoInsurBean : autoInsurBeans) {
            switch (autoInsurBean.getStatus()) {
            case "inserted":
                try{
                        autoInsurDAO.insertAutoInsur(autoInsurBean);
                    }catch(DataAccessException e){
                        
                        throw new HosptlzInsurPatException(messageSource.
                                getMessage("WON003", null, Locale.KOREAN));
                }
                break;
            case "updated":
                autoInsurDAO.updateAutoInsur(autoInsurBean);
                break;
            case "deleted":
                autoInsurDAO.deleteAutoInsur(autoInsurBean);
                break;
            }
        }
    }
}

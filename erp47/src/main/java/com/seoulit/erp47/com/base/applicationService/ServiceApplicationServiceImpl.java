package com.seoulit.erp47.com.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.com.base.dao.ServiceDAO;
import com.seoulit.erp47.com.base.to.ServiceBean;

@Component
public class ServiceApplicationServiceImpl implements ServiceApplicationService {
    
    @Autowired
    private ServiceDAO serviceDAO;
    
    @Override
    public List<ServiceBean> findService(Map<String, String> argsMap) {
        return serviceDAO.selectService(argsMap);
    }

    @Override
    public void batchErrorProcess(List<ServiceBean> serviceList) {
        System.out.println("AS findCode -------- 저장잘됩니까");
        for (ServiceBean service : serviceList) {
            System.out.println("AS findCode -------- 저장잘됩니까");
            if (service.getStatus().equals("inserted")) {
                System.out.println("AS findCode -------- 저장잘됩니까");
                serviceDAO.insertError(service);
            }
        }
    }
}

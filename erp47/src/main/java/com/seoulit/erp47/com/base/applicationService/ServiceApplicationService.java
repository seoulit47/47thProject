package com.seoulit.erp47.com.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.base.to.ServiceBean;

public interface ServiceApplicationService {
    public List<ServiceBean> findService(Map<String, String> argsMap);

    public void batchErrorProcess(List<ServiceBean> service);
}

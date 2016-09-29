package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;

public interface EmrApplicationService {  
 
    List<PrscBean> findPrscList(Map<String, String> argsMap);
    
    List<PrscDtlBean> findPrscDtlList(Map<String, String> argsMap);
    
}

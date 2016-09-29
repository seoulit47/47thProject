package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;

public interface PrscDAO {
    
    List<PrscDtlBean> selectPrscDtlList(Map<String, String> argsMap);

    List<PrscBean> selectPrscList(Map<String, String> argsMap);
    
}

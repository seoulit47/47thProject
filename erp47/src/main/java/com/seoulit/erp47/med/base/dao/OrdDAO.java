package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.OrdBean;

public interface OrdDAO {
    
    List<OrdBean> selectOrdList(Map<String, String> argsMap);

}

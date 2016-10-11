package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.AntimicrobialBean;

public interface AntimicrobialDAO {
    
    List<AntimicrobialBean> selectAntimicrobialList(Map<String, String> argsMap);

}

package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.SpeciesVirusBean;

public interface SpeciesVirusDAO {
    
    List<SpeciesVirusBean> selectSpeciesVirusList(Map<String, String> argsMap);

}

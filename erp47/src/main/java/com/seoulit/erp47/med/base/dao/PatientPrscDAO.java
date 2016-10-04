package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.seoulit.erp47.med.base.to.PatientPrscBean;


public interface PatientPrscDAO {
    
    List<PatientPrscBean> selectPatientPrscList(Map<String, String> argsMap);

    List<PatientPrscBean> selectDrugPrscList(Map<String, String> argsMap);
    
}

package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.PatientPrscBean;


public interface PatientPrscDAO {
    
    List<PatientPrscBean> selectPatientPrscList(Map<String, String> argsMap);

    List<PatientPrscBean> selectDrugPrscList(Map<String, String> argsMap);
    
    void insertInpatientPrsc(PatientPrscBean patientPrscBean);

    void updateInpatientPrsc(PatientPrscBean patientPrscBean);

    void insertOutpatientPrsc(PatientPrscBean patientPrscBean);

    void updateOutpatientPrsc(PatientPrscBean patientPrscBean);
}

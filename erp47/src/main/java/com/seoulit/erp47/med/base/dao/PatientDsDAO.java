package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.PatientDsBean;
import com.seoulit.erp47.med.base.to.PatientPrscBean;

public interface PatientDsDAO {
	List<PatientDsBean>findPatientDsPrscList(Map<String, String>argsMap);
	public void insertPatientDsList(PatientDsBean patientDsBean);
	public void updatePatientDsList(PatientDsBean patientDsBean);
	
	List<PatientDsBean> selectPatientDsList(Map<String, String> argsMap);

    
    void insertPatientDs(PatientDsBean patientDsBean);
    
    void updatePatientDs(PatientDsBean patientDsBean);
}

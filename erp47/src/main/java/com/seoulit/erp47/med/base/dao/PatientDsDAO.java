package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.seoulit.erp47.med.base.to.PatientDsBean;


public interface PatientDsDAO {

	
		List<PatientDsBean>findPatientDsPrscList(Map<String, String>argsMap);
}

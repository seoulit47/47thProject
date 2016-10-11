package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.DiseaseBean;

public interface DiseaseDAO {

		List<DiseaseBean>findDiseaseList(Map<String,String>argsMap);
		
		List<DiseaseBean>findDiseaseCdList();
		
	    void insertDisease(DiseaseBean diseaseBean);

	    void updateDisease(DiseaseBean diseaseBean);

	    void deleteDisease(DiseaseBean diseaseBean);
}

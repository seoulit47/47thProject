package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.PatCutnBean;

public interface PatCutnDAO {

	
		List<PatCutnBean>findPatCutnList(Map<String,String>argsMap);
}

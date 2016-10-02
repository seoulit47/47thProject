package com.seoulit.erp47.med.adr.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.seoulit.erp47.med.adr.to.AdrBean;

@Repository
public interface AdrDAO {

		List<AdrBean>findAdrList(Map<String, String>argsMap);
	
}

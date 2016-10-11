package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.VirusBean;

public interface VirusDAO {

	List<VirusBean> findVirusList(Map<String, String> argsMap);
}

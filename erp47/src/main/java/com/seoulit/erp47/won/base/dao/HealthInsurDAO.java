package com.seoulit.erp47.won.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.base.to.HealthInsurBean;

/**
 * @Package com.seoulit.erp47.won.base.dao
 * @Class HealthInsurDAO.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface HealthInsurDAO {
	
	public List<HealthInsurBean> selectHealthInsurList(Map<String, String> argsMap);

	public void insertHealthInsur(HealthInsurBean healthInsurBean);

	public void deleteHealthInsur(HealthInsurBean healthInsurBean);

	public void updateHealthInsur(HealthInsurBean healthInsurBean);
	
}
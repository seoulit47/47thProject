package com.seoulit.erp47.hrs.emp.dao;

import java.util.List;

import com.seoulit.erp47.common.to.BaseBean;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.dao
 * @Class    MilitaryDAO.java
 * @Create   2016. 9. 20.
 * @Author   김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface MilitaryDAO {
	List<BaseBean> findMilitaryList(String empNo);

	void insertMilitary(BaseBean militaryBean);

	void updateMilitary(BaseBean militaryBean);

	void deleteMilitary(BaseBean militaryBean);

	void destroyMilitary(String empNo);
}

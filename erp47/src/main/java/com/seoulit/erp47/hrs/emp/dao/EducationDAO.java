package com.seoulit.erp47.hrs.emp.dao;

import java.util.List;

import com.seoulit.erp47.common.to.BaseBean;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.dao
 * @Class    EducationDAO.java
 * @Create   2016. 9. 20.
 * @Author   김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface EducationDAO {
	List<BaseBean> findEducationList(String empNo);

	void insertEducation(BaseBean educationBean);

	void updateEducation(BaseBean educationBean);

	void deleteEducation(BaseBean educationBean);

	void destroyEducation(String empNo);
}

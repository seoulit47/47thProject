package com.seoulit.erp47.hrs.emp.dao;

import java.util.List;

import com.seoulit.erp47.common.to.BaseBean;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.dao
 * @Class    FamilyDAO.java
 * @Create   2016. 9. 20.
 * @Author   김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface FamilyDAO {

	List<BaseBean> findFamilyList(String empNo);

	void insertFamily(BaseBean familyBean);

	void updateFamily(BaseBean familyBean);

	void deleteFamily(BaseBean familyBean);

	void destroyFamily(String empNo);
}

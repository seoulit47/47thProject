package com.seoulit.erp47.hrs.emp.dao;

import java.util.List;

import com.seoulit.erp47.common.to.BaseBean;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.dao
 * @Class    PerconaldateDAO.java
 * @Create   2016. 9. 20.
 * @Author   김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface PerconaldateDAO {
	List<BaseBean> findPerconaldateList(String empNo);

	void insertPerconaldate(BaseBean perconaldateBean);

	void updatePerconaldate(BaseBean perconaldateBean);

	void deletePerconaldate(BaseBean perconaldateBean);

	void destroyPerconaldate(String empNo);
}

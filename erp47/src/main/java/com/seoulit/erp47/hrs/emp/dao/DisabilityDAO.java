package com.seoulit.erp47.hrs.emp.dao;

import java.util.List;

import com.seoulit.erp47.common.to.BaseBean;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.dao
 * @Class    DisabilityDAO.java
 * @Create   2016. 9. 20.
 * @Author   김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface DisabilityDAO {
	List<BaseBean> findDisabilityList(String empNo);

	void insertDisability(BaseBean disabilityBean);

	void updateDisability(BaseBean disabilityBean);

	void deleteDisability(BaseBean disabilityBean);

	void destroyDisability(String empNo);

}

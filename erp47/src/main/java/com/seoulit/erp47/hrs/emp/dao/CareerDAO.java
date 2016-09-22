package com.seoulit.erp47.hrs.emp.dao;

import java.util.List;

import com.seoulit.erp47.common.to.BaseBean;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.dao
 * @Class    CareerDAO.java
 * @Create   2016. 9. 20.
 * @Author   김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface CareerDAO {

	List<BaseBean> findCareerList(String empNo);

	void insertCareer(BaseBean careerBean);

	void updateCareer(BaseBean careerBean);

	void deleteCareer(BaseBean careerBean);

	void destroyCareer(String empNo);
}

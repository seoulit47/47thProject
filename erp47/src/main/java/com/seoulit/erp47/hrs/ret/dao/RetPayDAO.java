package com.seoulit.erp47.hrs.ret.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.ret.to.RetPayBean;

/**
 * 
 * @Package com.seoulit.erp47.hrs.ret.dao
 * @Class RetPayDAO.java
 * @Create 2016. 10. 3.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */
public interface RetPayDAO {

	void calcRetPay(Map<String, String> argsMap);

	void insertRetPay(RetPayBean retPayBean);

	void updateRetPay(RetPayBean retPayBean);

	void deleteRetPay(RetPayBean retPayBean);

	List<RetPayBean> selectRetPayList(Map<String, String> argsMap);

}

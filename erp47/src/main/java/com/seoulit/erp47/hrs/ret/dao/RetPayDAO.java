package com.seoulit.erp47.hrs.ret.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.ret.to.RetPayBean;

/**
 * 
 * @Package  com.seoul.his.hrs.ret.dao
 * @Class    RetPayDAO.java
 * @Create   2016. 6. 5.
 * @Author   Ckeun
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

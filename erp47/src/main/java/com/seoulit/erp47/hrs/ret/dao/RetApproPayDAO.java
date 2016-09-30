package com.seoulit.erp47.hrs.ret.dao;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.seoulit.erp47.hrs.ret.to.RetApproPayBean;

/** 
 * 
 * @Package  com.seoul.his.hrs.ret.dao
 * @Class    RetApproPayDAO.java
 * @Create   2016. 6. 3.
 * @Author   Ckeun
 * @Description
 *
 * @LastUpdated
 */

public interface RetApproPayDAO {

	List<RetApproPayBean> selectRetApproPayList(Map<String, String> argsMap) throws DataAccessException;

	void insertRetApproPay(RetApproPayBean retApproPayBean);

	void updateRetApproPay(RetApproPayBean retApproPayBean);

	void deleteRetApproPay(RetApproPayBean retApproPayBean);

}

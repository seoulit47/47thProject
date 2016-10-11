package com.seoulit.erp47.won.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.base.to.FeeBean;

/**
 * @Package com.seoulit.erp47.won.base.dao
 * @Class FeeDAO.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface FeeDAO {

	public List<FeeBean> selectFeeList(Map<String, String> argsMap);

	public List<FeeBean> selectFeeListEMR(Map<String, String> argsMap);

	public void insertFee(FeeBean feeBean);

	public void deleteFee(FeeBean feeBean);

	public void updateFee(FeeBean feeBean);

}

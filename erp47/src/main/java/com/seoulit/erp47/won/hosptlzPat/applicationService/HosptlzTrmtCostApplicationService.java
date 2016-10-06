package com.seoulit.erp47.won.hosptlzPat.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.hosptlzPat.exception.HosptlzPatException;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatReceBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzTrmtCostReceReceiptBean;

/**
 * @Package  com.seoul.his.won.hosptlzPat.applicationService
 * @Class    HosptlzTrmtCostAS.java
 * @Create   2016.6.29
 * @Author   hwang
 * @Description
 *
 * @LastUpdated 
 */
public interface HosptlzTrmtCostApplicationService {

	void calcuHosptlzTrmtCost(Map<String, String> argsMap);

	List<HosptlzPatBean> findHosptlzTrmtCost(Map<String, String> argsMap) throws HosptlzPatException;

	HosptlzPatReceBean findHosptlzPatRece(Map<String, String> argsMap);

	void callHosptlzPatRece(HosptlzPatReceBean hosptlzPatReceBean);

	List<HosptlzTrmtCostReceReceiptBean> callHosptlzCostReceReceipt(
			String outpaReceiptNo);

}

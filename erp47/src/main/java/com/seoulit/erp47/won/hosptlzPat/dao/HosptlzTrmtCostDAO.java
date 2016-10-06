package com.seoulit.erp47.won.hosptlzPat.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzTrmtCostReceReceiptBean;

public interface HosptlzTrmtCostDAO {

	void calcuHosptlzTrmtCost(Map<String, String> argsMap);

	List<HosptlzPatBean> selectHosptlzTrmtCost(Map<String, String> argsMap);

	List<HosptlzTrmtCostReceReceiptBean> callHosptlzCostReceReceipt(
			String outpaReceiptNo);

}

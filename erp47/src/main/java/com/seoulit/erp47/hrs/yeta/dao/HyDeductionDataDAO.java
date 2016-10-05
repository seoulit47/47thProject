package com.seoulit.erp47.hrs.yeta.dao;

import java.util.Map;

import com.seoulit.erp47.hrs.yeta.to.HyDeductionBean;
import com.seoulit.erp47.hrs.yeta.to.HyDeductionDataBean;

public interface HyDeductionDataDAO {
	HyDeductionBean selectHyDeduction(Map<String, String> argsMap);

	void insertHyDeductionData(HyDeductionDataBean hyDeductionDataBean);

	void updateHyDeductionData(HyDeductionDataBean hyDeductionDataBean);

	void deleteHyDeductionData(HyDeductionDataBean hyDeductionDataBean);

}

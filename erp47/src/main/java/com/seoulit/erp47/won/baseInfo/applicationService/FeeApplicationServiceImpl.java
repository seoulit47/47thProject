package com.seoulit.erp47.won.baseInfo.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.won.baseInfo.dao.FeeDAO;
import com.seoulit.erp47.won.baseInfo.to.FeeBean;

/**
 * @Package com.seoulit.erp47.won.baseInfo.applicationService
 * @Class FeeApplicationServiceImpl.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description 
 *
 * @LastUpdated 
 */

@Component
public class FeeApplicationServiceImpl implements FeeApplicationService {

	@Autowired
	public FeeDAO feeDAO;

	@Override
	public List<FeeBean> findFeeList(Map<String, String> argsMap) {
		return feeDAO.selectFeeList(argsMap);
	}

	@Override
	public List<FeeBean> findFeeListEMR(Map<String, String> argsMap) {
		return feeDAO.selectFeeListEMR(argsMap);
	}

	@Override
	public void batchFeeProcess(List<FeeBean> feeBeanList) {
		for (FeeBean feeBean : feeBeanList) {
			switch (feeBean.getStatus()) {
				case "inserted": {
					feeDAO.insertFee(feeBean);
					break;
				}
				case "deleted": {
					feeDAO.deleteFee(feeBean);
					break;
				}
				case "updated": {
					feeDAO.updateFee(feeBean);
					break;
				}
			}
		}
	}

}

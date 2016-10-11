package com.seoulit.erp47.won.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.won.base.dao.HealthInsurDAO;
import com.seoulit.erp47.won.base.to.HealthInsurBean;

/**
 * @Package com.seoulit.erp47.won.baseInfo.applicationService
 * @Class HealthInsurApplicationServiceImpl.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description 환자건강보험을 조회하고 환자건강보험 정보를 수정한다.
 *
 * @LastUpdated 
 */

@Component
public class HealthInsurApplicationServiceImpl implements HealthInsurApplicationService {

	@Autowired
	public HealthInsurDAO healthInsurDAO;

	@Override
	public List<HealthInsurBean> findHealthInsurList(Map<String, String> argsMap) {
		return healthInsurDAO.selectHealthInsurList(argsMap);
	}

	@Override
	public void batchHealthInsurProcess(List<HealthInsurBean> healthInsurList) {
		for (HealthInsurBean healthInsurBean : healthInsurList) {
			switch (healthInsurBean.getStatus()) {
				case "inserted": {
					healthInsurDAO.insertHealthInsur(healthInsurBean);
					break;
				}
				case "deleted": {
					healthInsurDAO.deleteHealthInsur(healthInsurBean);
					break;
				}
				case "updated": {
					healthInsurDAO.updateHealthInsur(healthInsurBean);
					break;
				}
			}
		}
	}

}

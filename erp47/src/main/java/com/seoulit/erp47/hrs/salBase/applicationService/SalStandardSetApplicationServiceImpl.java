package com.seoulit.erp47.hrs.salBase.applicationService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.hrs.salBase.dao.SalStandardSetDAO;
import com.seoulit.erp47.hrs.salBase.to.SalStandardSetBean;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.applicationService
 * @Class    SalStandardSetApplicationServiceImpl.java
 * @Create   2016. 10. 02.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 2016. 6. 30.
 */

@Component
public class SalStandardSetApplicationServiceImpl implements SalStandardSetApplicationService{

	@Autowired
	public SalStandardSetDAO salStandardSetDAO;

	/* 급여근태기준일설정 */
	@Override
	public List<SalStandardSetBean> findSalStandardList() {
		return salStandardSetDAO.findSalStandardList();
	}

	@Override
	public void batchSalStanSetProcess(List<SalStandardSetBean> salStanList) {
		for (SalStandardSetBean salStanBean : salStanList) {
			if (salStanBean.getStatus().equals("inserted")) {
				salStandardSetDAO.insertSalStanSet(salStanBean);
			} else if (salStanBean.getStatus().equals("updated")) {
				salStandardSetDAO.updateSalStanSet(salStanBean);
			}
		}
	}

}

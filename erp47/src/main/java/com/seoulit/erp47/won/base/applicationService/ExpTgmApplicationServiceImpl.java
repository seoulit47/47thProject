package com.seoulit.erp47.won.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.won.base.dao.ExpTgmDAO;
import com.seoulit.erp47.won.base.to.ExpTgmBean;

/**
 * @Package com.seoulit.erp47.won.baseInfo.applicationService
 * @Class ExpTgmApplicationServiceImpl.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description 감면대상자를 조회하고 감면대상자 정보를 수정한다.
 *
 * @LastUpdated 
 */

@Component
public class ExpTgmApplicationServiceImpl implements ExpTgmApplicationService {

	@Autowired
	public ExpTgmDAO expTgmDAO;

	@Override
	public List<ExpTgmBean> findExpTgmList(Map<String, String> argsMap) {
		return expTgmDAO.selectExpTgmList(argsMap);
	}

	@Override
	public void batchExpTgmProcess(List<ExpTgmBean> expTgmBeanList) {
		for (ExpTgmBean expTgmBean : expTgmBeanList) {
			switch (expTgmBean.getStatus()) {
				case "inserted": {
					expTgmDAO.insertExpTgm(expTgmBean);
					break;
				}
				case "deleted": {
					expTgmDAO.deleteExpTgm(expTgmBean);
					break;
				}
				case "updated": {
					expTgmDAO.updateExpTgm(expTgmBean);
					break;
				}
			}
		}
	}
}

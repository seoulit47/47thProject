package com.seoulit.erp47.hrs.salBase.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.hrs.salBase.dao.SocialInsureDAO;
import com.seoulit.erp47.hrs.salBase.to.SocialInsureBean;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.applicationService
 * @Class    SalBaseApplicationServiceImpl.java
 * @Create   2016. 10. 02.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Component
public class SocialInsuranceApplicationServiceImpl implements SocialInsuranceApplicationService{

	@Autowired
	public SocialInsureDAO socialInsureDAO;

	/* 사회보험설정 */
	@Override
	public List<SocialInsureBean> findsocialInsureList(Map<String, String> argsMap) {
		return socialInsureDAO.findsocialInsureList(argsMap);
	}

	@Override
	public void batchSocialInsureProcess(Map<String, String> argsMap) {
		socialInsureDAO.insertSocialInsure(argsMap);
	}

}

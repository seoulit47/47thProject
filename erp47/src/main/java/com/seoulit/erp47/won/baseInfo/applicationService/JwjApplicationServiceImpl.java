package com.seoulit.erp47.won.baseInfo.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.won.baseInfo.dao.JwjDAO;
import com.seoulit.erp47.won.baseInfo.to.JwjBean;

/**
 * @Package com.seoulit.erp47.won.baseInfo.applicationService
 * @Class JwjApplicationServiceImpl.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description 재원환자를 조회한다.
 *
 * @LastUpdated 
 */

@Component
public class JwjApplicationServiceImpl implements JwjApplicationService {

	@Autowired
	public JwjDAO jwjDAO;

	@Override
	public List<JwjBean> findJwjList(Map<String, String> argsMap) {
		return jwjDAO.selectJwjList(argsMap);
	}
	
}

package com.seoulit.erp47.com.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.com.base.dao.AuthDAO;
import com.seoulit.erp47.com.base.to.AuthBean;

@Component
public class AuthApplicationServiceImpl implements AuthApplicationService {

	@Autowired
	AuthDAO authDAO;

	@Override
	public List<AuthBean> findAuthList(Map<String, String> authName) {
		return authDAO.findAuthList(authName);
	}

	@Override
	public void batchAuth(List<AuthBean> authList) {
		for (AuthBean authBean : authList) {
			if (authBean.getStatus().equals("inserted")) {
				authDAO.insertAuth(authBean);
			} else if (authBean.getStatus().equals("updated")) {
				authDAO.updateAuth(authBean);
			} else if (authBean.getStatus().equals("deleted")) {
				authDAO.deleteAuth(authBean);
			}
		}
	}
}

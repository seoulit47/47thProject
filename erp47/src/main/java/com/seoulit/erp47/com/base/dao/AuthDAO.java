package com.seoulit.erp47.com.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.base.to.AuthBean;

public interface AuthDAO {
	public List<AuthBean> findAuthList(Map<String, String> authName);

	public void insertAuth(AuthBean authBean);

	public void deleteAuth(AuthBean authBean);

	public void updateAuth(AuthBean authBean);
}

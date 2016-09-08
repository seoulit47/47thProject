package com.seoulit.erp47.com.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.base.to.AuthBean;

public interface AuthApplicationService {
	public List<AuthBean> findAuthList(Map<String, String> authName);
	public void batchAuth(List<AuthBean> authList);
}

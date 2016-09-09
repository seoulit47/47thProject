package com.seoulit.erp47.com.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.base.to.MenuBean;

public interface MenuApplicationService {
	public List<MenuBean> findAllMenu();
	public List<MenuBean> findAuthMenuList(Map<String, String> codeName);
	public void batchMenu(List<MenuBean> menuBeans);
}
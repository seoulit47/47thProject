package com.seoulit.erp47.com.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.base.to.MenuBean;

public interface MenuDAO {

	//public MenuBean selectMenu(Map<String, String> argsMap);

	public List<MenuBean> selectAuthMenuList(Map<String, String> codeName);

	public List<MenuBean> selectAllMenu();

	// public List<MenuBean> selectMenuList();

	public void insertMenu(MenuBean menuBean);

	public void deleteMenu(MenuBean menuBean);
	
	public List<MenuBean> selectMenuList();

}

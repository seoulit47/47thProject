package com.seoulit.erp47.com.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.com.base.dao.MenuDAO;
import com.seoulit.erp47.com.base.to.MenuBean;

@Component
public class MenuApplicationServiceImpl implements MenuApplicationService {

	@Autowired
	MenuDAO menuDAO;

	@Override
	public List<MenuBean> findAuthMenuList(Map<String, String> codeName) {
		return menuDAO.selectAuthMenuList(codeName);
	}

	@Override
	public List<MenuBean> findAllMenu() {
		return menuDAO.selectAllMenu();
	}

	@Override
	public void batchMenu(List<MenuBean> menuList) {
		for (MenuBean menuBean : menuList) {
			if (menuBean.getStatus().equals("inserted")) {
				menuDAO.insertMenu(menuBean);
			} else if (menuBean.getStatus().equals("deleted")) {
				menuDAO.deleteMenu(menuBean);
			}
		}
	}

}

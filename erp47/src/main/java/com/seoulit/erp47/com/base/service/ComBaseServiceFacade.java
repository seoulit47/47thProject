package com.seoulit.erp47.com.base.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.com.base.exception.IdNotFoundException;
import com.seoulit.erp47.com.base.exception.PwMissMatchException;
import com.seoulit.erp47.com.base.to.AuthBean;
import com.seoulit.erp47.com.base.to.CodeBean;
import com.seoulit.erp47.com.base.to.CodeNmBean;
import com.seoulit.erp47.com.base.to.MenuBean;

public interface ComBaseServiceFacade {

	// 코드조회
	public List<CodeBean> findCodeList(Map<String, String> argsMap);

	// subCode선택시 Code조회
	public List<CodeNmBean> findCode(Map<String, String> argsMap);

	// 로그인
	public Map<String, Object> login(Map<String, String> argsMap) throws IdNotFoundException, PwMissMatchException;

	public Map<String, Object> checkAuth(Map<String, String> authMap) throws IdNotFoundException, PwMissMatchException;

	// code 수젇,삭제,등록
	public void batchCode(List<CodeBean> batchCodeList);


	
	
	
	
	// 권한
	public List<AuthBean> findAuthList(Map<String, String> argsMap);
	//public void batchAuthProcess(List<AuthBean> auth);

	// 메뉴
	//public void findMenu(Map<String, String> argsMap) throws AuthMenuNotFoundException;
	public List<MenuBean> findAuthMenuList(Map<String, String> argsMap);
	public List<MenuBean> findAllMenu();
	// public List<MenuBean> findMenuList();
	//메뉴&권한 일괄처리
	public void BatchAuthAndMenu(Map<String, List> map);
}

package com.seoulit.erp47.com.base.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.com.base.applicationService.AuthApplicationService;
import com.seoulit.erp47.com.base.applicationService.CodeApplicationService;
import com.seoulit.erp47.com.base.applicationService.LoginApplicationService;
import com.seoulit.erp47.com.base.applicationService.MenuApplicationService;
import com.seoulit.erp47.com.base.exception.IdNotFoundException;
import com.seoulit.erp47.com.base.exception.PwMissMatchException;
import com.seoulit.erp47.com.base.to.AuthBean;
import com.seoulit.erp47.com.base.to.CodeBean;
import com.seoulit.erp47.com.base.to.CodeNmBean;
import com.seoulit.erp47.com.base.to.MenuBean;

/**
 * @Package  	com.seoulit.erp47.com.base.service
 * @Class    	ComBaseServiceFacadeImpl.java
 * @Create   	2016. 08. 26.
 * @Author   
 * @Description 시스템공통 서비스퍼사드
 *
 * @LastUpdated 
 */
@Service
public class ComBaseServiceFacadeImpl implements ComBaseServiceFacade {

    @Autowired
    private LoginApplicationService loginApplicationService;
    @Autowired
    private CodeApplicationService codeApplicationService;
    @Autowired
    private AuthApplicationService authApplicationService;
    @Autowired
    private MenuApplicationService menuApplicationService;
    
    // 로그인
    @Override
    public Map<String, Object> login(Map<String, String> argsMap)
            throws IdNotFoundException, PwMissMatchException {
        return loginApplicationService.login(argsMap);
    }

	@Override

	public List<CodeBean> findCodeList(Map<String, String> argsMap) {
		
		return codeApplicationService.findCodeList(argsMap);
	}

	@Override
	public List<CodeNmBean> findCode(Map<String, String> argsMap) {
		
		return codeApplicationService.findCode(argsMap);
	}
	public Map<String, Object> checkAuth(Map<String, String> authMap) throws IdNotFoundException, PwMissMatchException {
		System.out.println("test ~ serviceFacade~");
		return null;

	}

	@Override
	public void  batchCode(List<CodeBean> batchCodeList) {
		codeApplicationService.batchCode(batchCodeList);
	}

	
/*-----------------------------------------------------------
	------------------------------------------------------------*/
	//권한 관련
	@Override
	public List<AuthBean> findAuthList(Map<String, String> authName) {
		return authApplicationService.findAuthList(authName);
	}

	@Override
	public List<MenuBean> findAuthMenuList(Map<String, String> codeName) {
		return menuApplicationService.findAuthMenuList(codeName);
	}

	@Override
	public List<MenuBean> findAllMenu() {
		return menuApplicationService.findAllMenu();
	}

	//권한 & 메뉴 일괄처리
	@Override
	public void BatchAuthAndMenu(Map<String, List> map) {
		List<AuthBean> authList = map.get("authList");
		List<MenuBean> menuList = map.get("menuList");
		
	    authApplicationService.batchAuth(authList);
	    menuApplicationService.batchMenu(menuList);
	}

	@Override
	public List<CodeNmBean> findCodePopupList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return codeApplicationService.findCodePopupList(argsMap);
	}
}

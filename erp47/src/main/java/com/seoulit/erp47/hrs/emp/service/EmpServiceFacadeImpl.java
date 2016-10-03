package com.seoulit.erp47.hrs.emp.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.hrs.emp.applicationService.EmpApplicationService;
import com.seoulit.erp47.hrs.emp.to.EmpBean;
import com.seoulit.erp47.hrs.emp.to.EmployInfoBean;
import com.seoulit.erp47.hrs.emp.to.FinSufcandiBean;
import com.seoulit.erp47.hrs.emp.to.ItverBean;
import com.seoulit.erp47.hrs.emp.to.JoinCandiBean;
import com.seoulit.erp47.hrs.emp.to.JoinCandiScoreBean;
import com.seoulit.erp47.hrs.emp.to.TestSubjectBean;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.service
 * @Class    EmpServiceFacadeImpl.java
 * @Create   2016. 08. 28.
 * @Author   Hwanee
 * @Description
 *
 * @LastUpdated
 */

@Service
public class EmpServiceFacadeImpl implements EmpServiceFacade {

	@Autowired
	EmpApplicationService empApplicationService;
	
	//사원목록검색
	@Override
	public List<EmpBean> findEmpList(Map<String, String> argsMap) {
		return empApplicationService.findEmpList(argsMap);
	}

	@Override
	public List<EmpBean> selectEmpList(Map<String, String> argsMap) { //pdf ���ϰ����´�
		return empApplicationService.selectEmpList(argsMap);
	}

	@Override
	public void batchEmpProcess(Map<String, Object> map) {
		 empApplicationService.batchEmpProcess(map);

	}

	@Override
	public List<EmployInfoBean> findEmployInfoList(
			Map<String, String> argsMap) {
		return empApplicationService.findEmployInfoList(argsMap);

	}

	@Override
	public List<TestSubjectBean> findTestSubject(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return empApplicationService.findTestSubjectList(argsMap);
	}

	@Override
	public List<ItverBean> findItverList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return empApplicationService.findItverList(argsMap);
	}

	@Override
	public void batchEmployProcess(Map<String, Object> map){
		empApplicationService.batchEmployProcess(map);

	}

	@Override
	public List<JoinCandiBean> findJoinCandiList() {
		return empApplicationService.findJoinCandiList();
	}

	@Override
	public List<JoinCandiScoreBean> findJoinCandiScore(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return empApplicationService.findJoinCandiScore(argsMap);
	}

	@Override
	public void batchJoinCandiProcess(Map<String, Object> map) {
		empApplicationService.batchJoinCandiProcess(map);
	}

	@Override
	public List<FinSufcandiBean> findFinSufcandiList() {
		// TODO Auto-generated method stub
		return empApplicationService.findFinSufcandiList();
	}

	@Override
	public void batchFinSufcandiProcess(List<FinSufcandiBean> finSufcandiList) {

		empApplicationService.batchFinSufcandiProcess(finSufcandiList);
	}

	@Override
	public List<EmpBean> findRetireeList(Map<String, String> argsMap) {
		return empApplicationService.findRetireeList(argsMap);
	}

}



package com.seoulit.erp47.hrs.emp.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.emp.to.EmpBean;
import com.seoulit.erp47.hrs.emp.to.EmployInfoBean;
import com.seoulit.erp47.hrs.emp.to.FinSufcandiBean;
import com.seoulit.erp47.hrs.emp.to.ItverBean;
import com.seoulit.erp47.hrs.emp.to.JoinCandiBean;
import com.seoulit.erp47.hrs.emp.to.JoinCandiScoreBean;
import com.seoulit.erp47.hrs.emp.to.TestSubjectBean;

/**
 * 
 * @Package com.seoul.his.hrs.emp.applicationService
 * @Class EmpApplicationService.java
 * @Create 2016. 08. 28.
 * @Author Hwanee
 * @Description 사원 AS
 * @LastUpdated
 */

public interface EmpApplicationService {
	List<EmpBean> findEmpList(Map<String, String> argsMap);

	List<EmpBean> selectEmpList(Map<String, String> argsMap);// pdf����

	void batchEmpProcess(Map<String, Object> map);

	List<EmpBean> findRetireeList(Map<String, String> argsMap);

	//void appointEmp(List<AppointDetailBean> appointDetailList);

	List<EmployInfoBean> findEmployInfoList(Map<String, String> argsMap);

	List<TestSubjectBean> findTestSubjectList(Map<String, String> argsMap);

	List<ItverBean> findItverList(Map<String, String> argsMap);

	void batchEmployProcess(Map<String, Object> map);

	List<JoinCandiBean> findJoinCandiList();

	List<JoinCandiScoreBean> findJoinCandiScore(Map<String, String> argsMap);

	void batchJoinCandiProcess(Map<String, Object> map);

	List<FinSufcandiBean> findFinSufcandiList();

	void batchFinSufcandiProcess(List<FinSufcandiBean> finSufcandiList);
}

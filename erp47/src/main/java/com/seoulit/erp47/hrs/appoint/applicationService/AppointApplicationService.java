package com.seoulit.erp47.hrs.appoint.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.appoint.to.AppointBean;
import com.seoulit.erp47.hrs.appoint.to.AppointCheckBean;
import com.seoulit.erp47.hrs.appoint.to.AppointDetailBean;
import com.seoulit.erp47.hrs.appoint.to.AppointInfoBean;
import com.seoulit.erp47.hrs.emp.to.DeptBean;
import com.seoulit.erp47.hrs.emp.to.EmpBean;

/**
 * 
 * @Package com.seoulit.erp47.hrs.appoint.applicationService
 * @Class AppointApplicationService.java
 * @Create 2016. 10. 4.
 * @Author 김봉진
 * @Description 발령 AS
 * @LastUpdated
 */

public interface AppointApplicationService {

	List<DeptBean> findDeptList(Map<String, String> serchDeptList);

	List<EmpBean> findEmpList(Map<String, String> map);

	public void batchAppoint(List<AppointBean> appointInfoList);

	List<AppointBean> findAppmtList(Map<String, String> argsMap);

	List<AppointDetailBean> findAppmtDetailList(Map<String, String> argsMap);

	void batchAppointDetail(List<AppointDetailBean> appointDetailInfoList);

	void modifyrAppointDetail(List<AppointDetailBean> appointDetailInfoList);

	List<AppointInfoBean> findAppointInfoList(Map<String, String> map);

	void modifyAppointEmp(List<AppointDetailBean> appointInfoList, Map<String, String> argsMap);

	List<AppointCheckBean> findCheckAppointList(Map<String, String> map);

	void retEmp(Map<String, String> argsMap);

}

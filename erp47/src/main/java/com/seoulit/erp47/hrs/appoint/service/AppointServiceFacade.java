package com.seoulit.erp47.hrs.appoint.service;

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
 * @Package com.seoulit.erp47.hrs.appoint.service
 * @Class AppointServiceFacade.java
 * @Create 2016. 10. 4.
 * @Author 김봉진
 * @Description 발령 SF
 * @LastUpdated
 */

public interface AppointServiceFacade {

	public List<DeptBean> findDeptList(Map<String, String> serchDeptList);

	public List<EmpBean> findEmpList(Map<String, String> map);

	public void batchAppoint(List<AppointBean> appointInfoList);

	public List<AppointBean> findAppmtList(Map<String, String> argsMap);

	public void batchAppointDetail(List<AppointDetailBean> appointDetailInfoList);

	public List<AppointDetailBean> findAppmtDetailList(Map<String, String> argsMap);

	public void modifyAppointDetail(List<AppointDetailBean> appointDetailInfoList);

	public List<AppointInfoBean> findAppointInfoList(Map<String, String> map);

	public void modifyAppointEmp(List<AppointDetailBean> appointInfoList, Map<String, String> argsMap);

	public List<AppointCheckBean> findCheckAppointList(Map<String, String> map);

	public void retEmp(Map<String, String> argsMap);
}

package com.seoulit.erp47.hrs.appoint.dao;

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
 * @Package com.seoulit.erp47.hrs.appoint.dao
 * @Class AppointDAO.java
 * @Create 2016. 10. 4.
 * @Author 김봉진
 * @Description 발령 DAO
 * @LastUpdated
 */

public interface AppointDAO {

	List<DeptBean> selectDeptList(Map<String, String> serchDeptList);

	List<EmpBean> selectEmpList(Map<String, String> map);

	void insertAppointInfo(AppointBean appointBean);

	void updateAppointInfo(AppointBean appointBean);

	void deleteAppointInfo(AppointBean appointBean);

	List<AppointBean> selectAppmtList(Map<String, String> argsMap);

	void insertAppointDetailInfo(AppointDetailBean appointDetailBean);

	void updateAppointDetailInfo(AppointDetailBean appointDetailBean);

	void deleteAppointDetailInfo(AppointDetailBean appointDetailBean);

	void updateEmp(AppointDetailBean appointDetailBean);

	List<AppointInfoBean> selectAppointInfoList(Map<String, String> map);

	void updateAppointEmp(AppointDetailBean appointDetailBean);

	List<AppointCheckBean> selectCheckAppointList(Map<String, String> argsMap);

	List<AppointDetailBean> selectAppmtDetailList(Map<String, String> argsMap);

	void retEmp(Map<String, String> argsMap);
}

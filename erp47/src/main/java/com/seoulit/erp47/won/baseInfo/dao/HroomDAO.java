package com.seoulit.erp47.won.baseInfo.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.baseInfo.to.HroomBean;
import com.seoulit.erp47.won.baseInfo.to.HroomListBean;

/**
 * @Package com.seoulit.erp47.won.base.dao
 * @Class HroomDAO.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface HroomDAO {
	
	public List<HroomBean> selectHroomList(Map<String, String> argsMap);

	public List<HroomListBean> getHroomList(Map<String, String> argsMap);

	public void insertHroom(HroomBean hroomBean);

	public void deleteHroom(HroomBean hroomBean);

	public void updateHroom(HroomBean hroomBean);
	
}
package com.seoulit.erp47.won.baseInfo.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.baseInfo.to.HroomBean;
import com.seoulit.erp47.won.baseInfo.to.HroomListBean;

public interface HroomApplicationService {
	
	public List<HroomBean> findHroomList(Map<String, String> argsMap);

	public List<HroomListBean> getHroomList(Map<String, String> argsMap);

	public void batchHroomProcess(List<HroomBean> hroomBeanList);
	
}
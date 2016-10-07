package com.seoulit.erp47.won.baseInfo.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.won.baseInfo.dao.HroomDAO;
import com.seoulit.erp47.won.baseInfo.to.HroomBean;
import com.seoulit.erp47.won.baseInfo.to.HroomListBean;

/**
 * @Package com.seoulit.erp47.won.baseInfo.applicationService
 * @Class HroomApplicationServiceImpl.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description 병실을 조회하고 병실정보를 수정한다.
 *
 * @LastUpdated
 */

@Component
public class HroomApplicationServiceImpl implements HroomApplicationService {

	@Autowired
	public HroomDAO hroomDAO;

	@Override
	public List<HroomBean> findHroomList(Map<String, String> argsMap) {
		return hroomDAO.selectHroomList(argsMap);
	}

	@Override
	public List<HroomListBean> getHroomList(Map<String, String> argsMap) {
		return hroomDAO.getHroomList(argsMap);
	}

	@Override
	public void batchHroomProcess(List<HroomBean> hroomBeanList) {
		for (HroomBean hroomBean : hroomBeanList) {
			switch (hroomBean.getStatus()) {
				case "inserted": {
					hroomDAO.insertHroom(hroomBean);
					break;
				}
				case "deleted": {
					hroomDAO.deleteHroom(hroomBean);
					break;
				}
				case "updated": {
					hroomDAO.updateHroom(hroomBean);
					break;
				}
			}
		}
	}

}

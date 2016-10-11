package com.seoulit.erp47.won.base.applicationService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.won.base.dao.GijunDAO;
import com.seoulit.erp47.won.base.to.GijunInfoBean;
import com.seoulit.erp47.won.base.to.GijunInfoDetailBean;

/**
 * @Package com.seoulit.erp47.won.baseInfo.applicationService
 * @Class GijunApplicationServiceImpl.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description 기준정보코드를 조회하고 기준정보코드를 수정한다.
 *
 * @LastUpdated
 */

@Component
public class GijunApplicationServiceImpl implements GijunApplicationService {

	@Autowired
	public GijunDAO gijunDAO;

	@Override
	public List<GijunInfoBean> findGijunInfoCodeList() {
		return gijunDAO.selectGijunInfoList();
	}

	@Override
	public List<GijunInfoDetailBean> findGijunInfoCode(String gijunCd) {
		return gijunDAO.selectGijunInfoCode(gijunCd);
	}

	@Override
	public void batchGijunInfoProcess(List<GijunInfoBean> gijunCodeBeanList) {
		for (GijunInfoBean gijunInfoBean : gijunCodeBeanList) {
			if (gijunInfoBean.getStatus() == "deleted") {
				gijunDAO.deleteGijunInfo(gijunInfoBean);
				gijunDAO.deleteAllGijunInfoDetailFromGijunInfo(gijunInfoBean.getGijunCd());
			} else if (gijunInfoBean.getStatus() == "inserted") {
				gijunDAO.insertGijunInfo(gijunInfoBean);
			} else if (gijunInfoBean.getStatus() == "updated") {
				gijunDAO.updateGijunInfo(gijunInfoBean);
			}
		}
	}

	@Override
	public void batchGijunInfoSetProcess(List<GijunInfoDetailBean> gijunCodeDetailBeanList) {
		for (GijunInfoDetailBean gijunInfoDetailBean : gijunCodeDetailBeanList) {
			switch (gijunInfoDetailBean.getStatus()) {
				case "inserted": {
					gijunDAO.insertGijunInfoDetail(gijunInfoDetailBean);
					break;
				}
				case "updated": {
					gijunDAO.updateGijunInfoDetail(gijunInfoDetailBean);
					break;
				}
				case "deleted": {
					gijunDAO.deleteGijunInfoDetail(gijunInfoDetailBean);
					break;
				}
			}
		}
	}

}

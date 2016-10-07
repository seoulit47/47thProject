package com.seoulit.erp47.won.hosptlzPat.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.hosptlzPat.dao.GooutStayoutDAO;
import com.seoulit.erp47.won.hosptlzPat.to.GooutStayoutBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatInfoBean;

/**
 *    GooutStayoutASImpl
 *
 * @Description	  외출,외박 관리 (신청서 접수, 환자 외출/외박 관리)
 * @Author            황태경
 * Created on          2016. 6. 14.
 */

@Service
public class GooutStayoutApplicationServiceImpl implements GooutStayoutApplicationService{
	@Autowired
	private GooutStayoutDAO gooutStayoutDAO;


	//입원환자정보 조회
	@Override
	public List<HosptlzPatInfoBean> findHosptlzPat(Map<String, String> argsMap) {
		return gooutStayoutDAO.selectHosptlzPat(argsMap);
	}

	//외출&외박 신청등록 , 승인하기.
	@Override
	public void batchProcessGooutStayout(List<GooutStayoutBean> gooutStayout) {
		for(GooutStayoutBean gooutStayoutBean : gooutStayout){
			switch(gooutStayoutBean.getStatus()){
			case "inserted" :
				gooutStayoutDAO.insertGooutStayout(gooutStayoutBean);
				break;
			case "updated" :
				gooutStayoutDAO.updateGooutStayout(gooutStayoutBean);
				break;
			case "deleted":
				gooutStayoutDAO.deleteGooutStayout(gooutStayoutBean);
				break;
			}
		}
	}

	//외출&외박 신청서 조회.
	@Override
	public List<GooutStayoutBean> findGooutStayoutList(Map<String, String> argsMap) {
		return gooutStayoutDAO.selectGooutStayoutList(argsMap);
	}


}

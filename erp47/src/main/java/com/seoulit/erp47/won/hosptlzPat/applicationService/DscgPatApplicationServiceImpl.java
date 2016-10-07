package com.seoulit.erp47.won.hosptlzPat.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.hosptlzPat.dao.DscgPatDAO;
import com.seoulit.erp47.won.hosptlzPat.to.DscgPatBean;

/**
 * DscgPatASImpl.java
 *
 * @Description   퇴원환자조회 및 퇴원일 수정
 * @Author           박 영 희
 * Created on         2016. 10. 13.
 */

@Service
public class DscgPatApplicationServiceImpl implements DscgPatApplicationService{

	@Autowired
	private DscgPatDAO dscgPatDAO;

	@Override
	public List<DscgPatBean> findDscgPatList(Map<String, String> argsMap) {
		return dscgPatDAO.selectDscgPatList(argsMap);
	}

	@Override
	public void modDscgDay(List<DscgPatBean> dscgPat) {
		for(DscgPatBean dscgPatBean : dscgPat){
			System.out.println("=========== : "+dscgPatBean.getStatus());
			switch(dscgPatBean.getStatus()){
			case "updated":
				dscgPatDAO.updateModDscgDay(dscgPatBean);
			}
		}


	}
}

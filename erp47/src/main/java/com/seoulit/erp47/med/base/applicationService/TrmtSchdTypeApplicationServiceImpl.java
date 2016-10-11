package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.med.base.dao.TrmtSchdTypeDAO;
import com.seoulit.erp47.med.base.to.TrmtSchdTypeBean;
import com.seoulit.erp47.med.base.to.TrmtSchdTypeDetailBean;

@Service
public class TrmtSchdTypeApplicationServiceImpl implements TrmtSchdTypeApplicationService{
	@Autowired
	private TrmtSchdTypeDAO trmtSchdTypeDAO;

	//진료일정타입저장
	@Override
	public void batchTrmtTypeProcess(List<TrmtSchdTypeBean> trmtSchdTypeList) {
		for(TrmtSchdTypeBean trmtSchdTypeBean:trmtSchdTypeList){
			switch (trmtSchdTypeBean.getStatus()) {
			case "inserted":
				trmtSchdTypeDAO.insertTrmtSchdType(trmtSchdTypeBean);
				break;
			case "updated":
				trmtSchdTypeDAO.updateTrmtSchdType(trmtSchdTypeBean);
				break;
			case "deleted":
				trmtSchdTypeDAO.deleteTrmtSchdTypeDetailPro(trmtSchdTypeBean.getTrmtTypeNo());
				trmtSchdTypeDAO.deleteTrmtSchdType(trmtSchdTypeBean);
				break;
			}
		}
	}

	//진료일정타입상세저장
	@Override
	public void batchTrmtTypeDetailProcess(
			List<TrmtSchdTypeDetailBean> trmtSchdTypeDetailList) {
		for(TrmtSchdTypeDetailBean trmtSchdTypeDetailBean:trmtSchdTypeDetailList){
		    switch (trmtSchdTypeDetailBean.getStatus()) {
			case "inserted":
				trmtSchdTypeDAO.insertTrmtSchdTypeDetail(trmtSchdTypeDetailBean);
				break;
			case "updated":
				trmtSchdTypeDAO.updateTrmtSchdTypeDetail(trmtSchdTypeDetailBean);
				break;
			case "deleted":
				trmtSchdTypeDAO.deleteTrmtSchdTypeDetail(trmtSchdTypeDetailBean);
				break;
			}
		}
	}

	//진료일정타입조회
	@Override
	public List<TrmtSchdTypeBean> findTrmtTypeList(String empNo) {
		return trmtSchdTypeDAO.selectTrmtTypeList(empNo);
	}

	//진료일정상세저장
	@Override
	public void callApplyType(Map<String, String> queryMap) {
		queryMap.put("errorCode","");
		queryMap.put("errorMsg","");
		trmtSchdTypeDAO.callApplyType(queryMap);


	}
}

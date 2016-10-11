package com.seoulit.erp47.won.outPatMgt.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.outPatMgt.dao.CheckInfoDAO;
import com.seoulit.erp47.won.outPatMgt.dao.PatInfoDAO;
import com.seoulit.erp47.won.outPatMgt.to.CheckInfoBean;
import com.seoulit.erp47.won.outPatMgt.to.PatInfoBean;

@Service
public class OutPatMngntApplicationServiceImpl implements OutPatMgtApplicationService {

	@Autowired
	PatInfoDAO patInfoDAO;
	@Autowired
	CheckInfoDAO checkInfoDAO;

	@Override
	public List<PatInfoBean> findPatList(Map<String, String> argsMap) {
		return patInfoDAO.selectPatList(argsMap);
	}

	@Override
	public PatInfoBean findPat(Map<String, String> argsMap) {
		return patInfoDAO.selectPat(argsMap);
	}

	@Override
	public void modifyPat(Map<String, Object> map) {
		PatInfoBean patInfoBean = (PatInfoBean) map.get("patInfoBean");
		patInfoDAO.updatePat(patInfoBean);
	}

	@Override
	public void registerPat(Map<String, Object> map) {
		PatInfoBean patInfoBean = (PatInfoBean) map.get("patInfoBean");
		patInfoDAO.insertPat(patInfoBean);
	}

	@Override
	public PatInfoBean findLastPatNo() {
		return patInfoDAO.selectLastPatNo();
	}

	@Override
	public List<CheckInfoBean> findCheckList(Map<String, String> argsMap) {

		return checkInfoDAO.selectCheckList(argsMap);
	}

	@Override
	public void batchCheckProcess(Map<String, Object> map) {
		CheckInfoBean checkInfoBean = (CheckInfoBean) map.get("checkInfoBean");
		if (checkInfoBean.getStatus() == "inserted") {
			checkInfoDAO.insertCheck(checkInfoBean);
		} else if (checkInfoBean.getStatus() == "updated") {
			checkInfoDAO.updateCheck(checkInfoBean);
		} else if (checkInfoBean.getStatus() == "deleted") {
			checkInfoDAO.deleteCheck(checkInfoBean);
		}
	}
}

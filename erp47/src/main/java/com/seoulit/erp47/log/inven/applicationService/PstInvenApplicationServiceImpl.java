package com.seoulit.erp47.log.inven.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.inven.dao.PstInvenDAO;
import com.seoulit.erp47.log.inven.to.PstInvenBean;

@Service
public class PstInvenApplicationServiceImpl implements PstInvenApplicationService {
	@Autowired
	PstInvenDAO pstInvenDAO;

	// 실재고 조회
	@Override
	public List<PstInvenBean> findPstInvenList(Map<String, String> argsMap) {
		List<PstInvenBean> pstInvenList = pstInvenDAO.selectPstInvenList(argsMap);
		return pstInvenList;
	}

	// 실재고 저장
	@Override
	public void batchPstInvenListProcess(List<PstInvenBean> pstInvenList) {
		for (PstInvenBean pstInvenBean : pstInvenList) {
			String status = pstInvenBean.getStatus();
			switch (status) {
			case "inserted":
				pstInvenDAO.insertPstInvenList(pstInvenBean);
				break;

			case "updated":
				pstInvenDAO.updatePstInvenList(pstInvenBean);
				break;
			case "deleted":
				pstInvenDAO.deletePstInvenList(pstInvenBean);
			}
		}
	}
}

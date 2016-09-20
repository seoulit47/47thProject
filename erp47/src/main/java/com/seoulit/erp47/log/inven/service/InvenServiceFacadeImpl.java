package com.seoulit.erp47.log.inven.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.inven.applicationService.InvenSilsaApplicationService;
import com.seoulit.erp47.log.inven.applicationService.PstInvenApplicationService;
import com.seoulit.erp47.log.inven.to.InvenSilsaBean;
import com.seoulit.erp47.log.inven.to.InvenSilsaDtlInfoBean;
import com.seoulit.erp47.log.inven.to.PstInvenBean;

@Service
public class InvenServiceFacadeImpl implements InvenServiceFacade {

	@Autowired
	InvenSilsaApplicationService invenSilsaAS;

	@Autowired
	PstInvenApplicationService pstInvenAS;

	// 재고실사 조회
	@Override
	public List<InvenSilsaBean> findInvenSilsaList(Map<String, String> argsMap) {
		List<InvenSilsaBean> invenSilsaList = invenSilsaAS.findInvenSilsaList(argsMap);
		return invenSilsaList;
	}

	// 실재고 조회
	@Override
	public List<PstInvenBean> findPstInvenList(Map<String, String> argsMap) {
		List<PstInvenBean> pstInvenList = pstInvenAS.findPstInvenList(argsMap);
		return pstInvenList;
	}

	// 재고실사 저장
	@Override
	public void batchInvenSilsaListProcess(List<InvenSilsaBean> invenSilsaList,
			List<InvenSilsaDtlInfoBean> invenSilsaDtlInfoList) {
		invenSilsaAS.batchInvenSilsaListProcess(invenSilsaList, invenSilsaDtlInfoList);
	}

	// 실재고 저장
	@Override
	public void batchPstInvenListProcess(List<PstInvenBean> pstInvenList) {
		pstInvenAS.batchPstInvenListProcess(pstInvenList);
	}

	@Override
	public void adjustPstInven(List<InvenSilsaDtlInfoBean> adjustPstInvenList) {
		invenSilsaAS.adjustPstInven(adjustPstInvenList);
	}
}

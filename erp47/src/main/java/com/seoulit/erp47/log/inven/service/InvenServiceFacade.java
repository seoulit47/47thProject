package com.seoulit.erp47.log.inven.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.inven.to.InvenSilsaBean;
import com.seoulit.erp47.log.inven.to.InvenSilsaDtlInfoBean;
import com.seoulit.erp47.log.inven.to.PstInvenBean;

public interface InvenServiceFacade {

	List<InvenSilsaBean> findInvenSilsaList(Map<String, String> argsMap);

	List<PstInvenBean> findPstInvenList(Map<String, String> argsMap);

	void batchInvenSilsaListProcess(List<InvenSilsaBean> invenSilsaList, List<InvenSilsaDtlInfoBean> invenSilsaDtlInfoList);

	void batchPstInvenListProcess(List<PstInvenBean> pstInvenList);

	void adjustPstInven(List<InvenSilsaDtlInfoBean> adjustPstInvenList);
}

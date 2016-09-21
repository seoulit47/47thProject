package com.seoulit.erp47.log.inven.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.inven.to.InvenSilsaBean;
import com.seoulit.erp47.log.inven.to.InvenSilsaDtlInfoBean;

public interface InvenSilsaApplicationService {

	List<InvenSilsaBean> findInvenSilsaList(Map<String, String> argsMap);

	void batchInvenSilsaListProcess(List<InvenSilsaBean> invenSilsaList,
			List<InvenSilsaDtlInfoBean> invenSilsaDetailList);

	void adjustPstInven(List<InvenSilsaDtlInfoBean> gdsAnspHistList);
}

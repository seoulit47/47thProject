package com.seoulit.erp47.log.inven.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.inven.to.PstInvenBean;

public interface PstInvenApplicationService {
	List<PstInvenBean> findPstInvenList(Map<String, String> argsMap);

	void batchPstInvenListProcess(List<PstInvenBean> pstInvenList);
}

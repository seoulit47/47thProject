package com.seoulit.erp47.acc.closing.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.closing.to.ClosAcntBean;
import com.seoulit.erp47.acc.closing.to.ClosDataBean;

public interface ClosingApplicationService {

    List<ClosDataBean> findClosDataList(Map<String, Object> argsMap);

    List<ClosAcntBean> findClosAcntList(Map<String, String> argsMap);

    void registerClosJour(HashMap<String, Object> map);

}

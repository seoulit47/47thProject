package com.seoulit.erp47.acc.closing.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.closing.to.FinanStatsBean;

public interface FinanStatsApplicationService {

    List<FinanStatsBean> findFinanStats(Map<String, Object> argsMap);
    
    HashMap<String, Object> findPrintFinanStats (HashMap<String, Object> queryMap);

}

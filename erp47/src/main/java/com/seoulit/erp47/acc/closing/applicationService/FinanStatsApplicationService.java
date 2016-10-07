package com.seoulit.erp47.acc.closing.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.closing.to.FinanStatsBean;

public interface FinanStatsApplicationService {

    List<FinanStatsBean> findFinanStats(Map<String, Object> argsMap);

}

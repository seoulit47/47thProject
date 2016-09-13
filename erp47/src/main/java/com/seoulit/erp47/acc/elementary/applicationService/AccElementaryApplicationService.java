package com.seoulit.erp47.acc.elementary.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.elementary.to.AccAcntBean;

public interface AccElementaryApplicationService {

    List<AccAcntBean> findAccAcntList(Map<String, String> argsMap);


}

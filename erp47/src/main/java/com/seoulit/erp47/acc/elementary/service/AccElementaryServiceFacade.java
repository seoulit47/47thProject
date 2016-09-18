package com.seoulit.erp47.acc.elementary.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.elementary.to.AccAcntBean;

public interface AccElementaryServiceFacade {


    List<AccAcntBean> findAccAcntList(Map<String, String> argsMap);


}

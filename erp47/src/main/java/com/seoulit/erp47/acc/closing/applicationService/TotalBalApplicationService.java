package com.seoulit.erp47.acc.closing.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.closing.to.TotalBalBean;

public interface TotalBalApplicationService {

    List<TotalBalBean> findTotalBalList(Map<String, Object> argsMap);

}

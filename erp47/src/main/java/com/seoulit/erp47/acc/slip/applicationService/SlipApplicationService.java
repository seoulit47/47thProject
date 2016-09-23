package com.seoulit.erp47.acc.slip.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.slip.to.SlipBean;

public interface SlipApplicationService {

    void registerSlipList(List<SlipBean> slipBeanList);

    List<SlipBean> findSlipList(Map<String, String> argsMap);

}

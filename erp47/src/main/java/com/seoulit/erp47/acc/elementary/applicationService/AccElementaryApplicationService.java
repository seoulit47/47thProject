package com.seoulit.erp47.acc.elementary.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.elementary.exception.AcntCopyException;
import com.seoulit.erp47.acc.elementary.to.AccAcntBean;
import com.seoulit.erp47.acc.elementary.to.AccPridBean;
import com.seoulit.erp47.acc.elementary.to.AssiSubBean;

public interface AccElementaryApplicationService {

    List<AccAcntBean> findAccAcntList(Map<String, String> argsMap);
    
    List<AssiSubBean> findAssiSubList(Map<String, String> argsMap);
    
    List<AccPridBean> findAccPridList();

    void batchAccAcntProcess(List<AccAcntBean> accAcntList);
    
    List<AccAcntBean> lastYearAcntCopy(Map<String, String> argsMap) throws AcntCopyException;
    
    AccPridBean findAccPrid(Map<String, String> argsMap);
}

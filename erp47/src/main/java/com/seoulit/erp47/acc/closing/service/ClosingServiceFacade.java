package com.seoulit.erp47.acc.closing.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.closing.to.ClosAcntBean;
import com.seoulit.erp47.acc.closing.to.ClosDataBean;
import com.seoulit.erp47.acc.closing.to.FinanStatsBean;
import com.seoulit.erp47.acc.closing.to.TotalBalBean;
import com.seoulit.erp47.acc.elementary.to.AccPridBean;

public interface ClosingServiceFacade {

    List<ClosDataBean> findClosDataList(Map<String, Object> argsMap);

    List<ClosAcntBean> findClosAcntList(Map<String, String> argsMap);

    void registerClosJour(HashMap<String, Object> map);

    void modifyDlineYn(AccPridBean accPrid);

    void executeCarrfor(AccPridBean accPrid);

    List<FinanStatsBean> findFinanStats(Map<String, Object> argsMap);

    HashMap<String, Object> findPrintFinanStats (HashMap<String, Object> queryMap);
    
    List<TotalBalBean> findTotalBalList(Map<String, Object> argsMap);

}

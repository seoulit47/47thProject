package com.seoulit.erp47.acc.elementary.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.elementary.exception.AccntNoCopyException;
import com.seoulit.erp47.acc.elementary.exception.AcntCopyException;
import com.seoulit.erp47.acc.elementary.exception.AssiCopyException;
import com.seoulit.erp47.acc.elementary.to.AccAcntBean;
import com.seoulit.erp47.acc.elementary.to.AccPridBean;
import com.seoulit.erp47.acc.elementary.to.AccntNoBean;
import com.seoulit.erp47.acc.elementary.to.AssiSubBean;
import com.seoulit.erp47.acc.elementary.to.AssiTypeBean;

public interface AccElementaryServiceFacade {
	void batchAccPridListProcess(List<AccPridBean> accPridList);

    List<AccAcntBean> findAccAcntList(Map<String, String> argsMap);
    
    List<AssiSubBean> findAssiSubList(Map<String, String> argsMap);
    
    List<AccPridBean> findAccPridList();

    void batchAccAcntProcess(List<AccAcntBean> accAcntList);
    
    List<AccAcntBean> lastYearAcntCopy(Map<String, String> argsMap) throws AcntCopyException;
    
    AccPridBean findAccPrid(Map<String, String> argsMap);
    
    List<AssiTypeBean> findAssiTypeList(Map<String, String> argsMap);
    
    void batchAssiCodeList(HashMap<String, Object> map);
    
    List<AssiTypeBean> lastYearAssiCodeCopy(Map<String, String> argsMap) throws AssiCopyException;
    
    List<AccntNoBean> findAccntNoList(Map<String, String> argsMap);
    
    void batchAccntNoListProcess(List<AccntNoBean> accntNoList);
    
    List<AccntNoBean> lastYearAccntNoCopy(Map<String, String> argsMap) throws AccntNoCopyException;
}

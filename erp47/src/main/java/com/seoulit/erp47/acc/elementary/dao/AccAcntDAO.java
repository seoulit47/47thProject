package com.seoulit.erp47.acc.elementary.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.elementary.to.AccAcntBean;

public interface AccAcntDAO {

    List<AccAcntBean> selectAccAcntList(Map<String, String> argsMap);

    void insertAccAcnt(AccAcntBean batchAccAcntBean);

    void deleteAccAcnt(AccAcntBean batchAccAcntBean);

    void updateAccAcnt(AccAcntBean batchAccAcntBean);
    
    void callCopyAcnt(AccAcntBean accAcntBean);
}

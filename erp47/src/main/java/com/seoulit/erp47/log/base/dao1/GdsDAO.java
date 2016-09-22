package com.seoulit.erp47.log.base.dao1;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.base.to.GdsBean;
import com.seoulit.erp47.log.base.to.OutLogCdBean;

public interface GdsDAO {
    List<GdsBean> selectGdsList(Map<String, String> argsMap);

    List<OutLogCdBean> selectBindGdsCdList(Map<String, String> argsMap);

    String callGdsCd(Map<String, String> argsMap);

    void insertGds(GdsBean gdsBean);

    void updateGds(GdsBean gdsBean);
}

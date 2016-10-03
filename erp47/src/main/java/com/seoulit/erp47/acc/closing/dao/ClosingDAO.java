package com.seoulit.erp47.acc.closing.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.closing.to.ClosDataBean;

public interface ClosingDAO {

    List<ClosDataBean> selectClosDataList(Map<String, Object> argsMap);

    //List<ClosAcntBean> selectClosAcntList(Map<String, String> argsMap);

}

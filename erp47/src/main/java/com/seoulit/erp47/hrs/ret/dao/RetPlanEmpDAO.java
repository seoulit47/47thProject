package com.seoulit.erp47.hrs.ret.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.ret.to.RetPlanEmpBean;

/**
 * 
 * @Package  com.seoul.his.hrs.ret.dao
 * @Class    RetPlanEmpDAO.java
 * @Create   2016. 6. 5.
 * @Author   Ckeun
 * @Description
 *
 * @LastUpdated
 */

public interface RetPlanEmpDAO {

	List<RetPlanEmpBean> selectRetPlanEmpList(Map<String, String> argsMap);
}

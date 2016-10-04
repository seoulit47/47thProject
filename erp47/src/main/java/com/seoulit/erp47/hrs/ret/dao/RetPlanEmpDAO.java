package com.seoulit.erp47.hrs.ret.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.ret.to.RetPlanEmpBean;

/**
 * 
 * @Package com.seoulit.erp47.hrs.ret.dao
 * @Class RetPlanEmpDAO.java
 * @Create 2016. 10. 3.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface RetPlanEmpDAO {

	List<RetPlanEmpBean> selectRetPlanEmpList(Map<String, String> argsMap);
}

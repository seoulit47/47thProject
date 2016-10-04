package com.seoulit.erp47.hrs.ret.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.ret.to.RetEmpBean;

/**
 * 
 * @Package com.seoulit.erp47.hrs.ret.dao
 * @Class RetEmpDAO.java
 * @Create 2016. 10. 3.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface RetEmpDAO {

	List<RetEmpBean> selectRetEmpList(Map<String, String> argsMap);
}

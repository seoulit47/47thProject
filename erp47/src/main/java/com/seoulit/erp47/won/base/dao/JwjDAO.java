package com.seoulit.erp47.won.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.base.to.JwjBean;

/**
 * @Package com.seoulit.erp47.won.base.dao
 * @Class JwjDAO.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface JwjDAO {
	
	List<JwjBean> selectJwjList(Map<String, String> argsMap);
	
}

package com.seoulit.erp47.hrs.guntae.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.guntae.to.DayGuntaeBean;
import com.seoulit.erp47.hrs.guntae.to.MonGuntaeBean;
import com.seoulit.erp47.hrs.guntae.to.MonGuntaeCloseBean;

/**
 * @Package  com.seoul.his.hrs.guntae.dao
 * @Class    GuntaeDAO.java
 * @Create   2016. 9. 11.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated
 *       
 */
public interface GuntaeDAO {

	List<DayGuntaeBean> callDayGuntae(Map<String, String> argsMap);

	List<DayGuntaeBean> selectDayGuntaeList(Map<String, String> argsMap);

	List<MonGuntaeBean> selectMonGuntaeList(Map<String, String> argsMap);

	List<MonGuntaeBean> callMonGuntae(Map<String, String> argsMap);

	List<MonGuntaeBean> callCloseMonGuntae(Map<String, String> argsMap);

	List<MonGuntaeCloseBean> selectMonGuntaeCloseList(Map<String, String> argsMap);

}

package com.seoulit.erp47.hrs.guntae.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.guntae.to.HdayBean;


/**
 * @Package  com.seoul.erp47.hrs.guntae.dao
 * @Class    HdayDAO.java
 * @Create   2016. 9. 06.
 * @Author   pyh
 * @Description
 *
 * @LastUpdated
 *      
 */
public interface HdayDAO {

	List<HdayBean> selectHdayList(Map<String, String> argsMap);

	void callHday(HdayBean hdayBean);

	//void updateHday(HdayBean hdayBean);

	void deleteHday(HdayBean hdayBean);

}

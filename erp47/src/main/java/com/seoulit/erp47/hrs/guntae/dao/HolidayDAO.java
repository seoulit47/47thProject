package com.seoulit.erp47.hrs.guntae.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.guntae.to.HolidayBean;

/**
 * @Package  com.seoul.his.hrs.guntae.dao
 * @Class    HolidayDAO.java
 * @Create   2016. 9. 19.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated
 *       
 */
public interface HolidayDAO {

	List<HolidayBean> selectHolidayList(Map<String, String> argsMap);

	List<HolidayBean> selectAdminHolidayList(Map<String, String> argsMap);

	void callHoliday(HolidayBean holidayBean);

	void updateHoliday(HolidayBean holidayBean);

}

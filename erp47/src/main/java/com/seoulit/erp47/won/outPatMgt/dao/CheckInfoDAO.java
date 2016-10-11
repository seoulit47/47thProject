package com.seoulit.erp47.won.outPatMgt.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.outPatMgt.to.CheckInfoBean;

/**
 * @Package com.seoulit.erp47.won.outPatMngnt.dao
 * @Class CheckInfoDAO.java
 * @Create 2016. 10. 11.
 * @Author kim
 * @Description
 *
 * @LastUpdated
 */
public interface CheckInfoDAO {

	List<CheckInfoBean> selectCheckList(Map<String, String> argsMap);

	void insertCheck(CheckInfoBean checkInfoBean);

	void updateCheck(CheckInfoBean checkInfoBean);

	void deleteCheck(CheckInfoBean checkInfoBean);

}

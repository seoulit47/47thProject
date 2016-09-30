package com.seoulit.erp47.hrs.ret.dao;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.seoulit.erp47.hrs.ret.to.ReturnItemBean;

/**
 * 
 * @Package  com.seoul.his.hrs.ret.dao
 * @Class    ReturnItemDAO.java
 * @Create   2016. 6. 3.
 * @Author   Ckeun
 * @Description
 *			퇴직물품DAO
 * @LastUpdated
 * 			2016. 6. 5.
 */

public interface ReturnItemDAO {
	List<ReturnItemBean> selectReturnItemList (Map<String, String> returnItemSeachMap ) throws DataAccessException;

	void insertReturnItem(ReturnItemBean returnItemBean);

	void updateReturnItem(ReturnItemBean returnItemBean);

	void deleteReturnItem(ReturnItemBean returnItemBean);
}

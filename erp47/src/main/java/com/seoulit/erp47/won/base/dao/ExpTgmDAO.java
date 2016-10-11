package com.seoulit.erp47.won.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.base.to.ExpTgmBean;

/**
 * @Package com.seoulit.erp47.won.base.dao
 * @Class ExpTgmDAO.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface ExpTgmDAO {

	public List<ExpTgmBean> selectExpTgmList(Map<String, String> argsMap);

	public void insertExpTgm(ExpTgmBean expTgmBean);

	public void deleteExpTgm(ExpTgmBean expTgmBean);

	public void updateExpTgm(ExpTgmBean expTgmBean);

}
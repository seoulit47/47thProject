package com.seoulit.erp47.won.base.dao;

import java.util.List;

import com.seoulit.erp47.won.base.to.GijunInfoBean;
import com.seoulit.erp47.won.base.to.GijunInfoDetailBean;

/**
 * @Package com.seoulit.erp47.won.base.dao
 * @Class GijunDAO.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface GijunDAO {

	public List<GijunInfoBean> selectGijunInfoList();

	public List<GijunInfoDetailBean> selectGijunInfoCode(String gijunCd);

	public void deleteAllGijunInfoDetailFromGijunInfo(String gijunCd);

	public void insertGijunInfo(GijunInfoBean gijunInfoBean);

	public void updateGijunInfo(GijunInfoBean gijunInfoBean);

	public void deleteGijunInfo(GijunInfoBean gijunInfoBean);

	public void insertGijunInfoDetail(GijunInfoDetailBean gijunInfoDetailBean);

	public void updateGijunInfoDetail(GijunInfoDetailBean gijunInfoDetailBean);

	public void deleteGijunInfoDetail(GijunInfoDetailBean gijunInfoDetailBean);

}

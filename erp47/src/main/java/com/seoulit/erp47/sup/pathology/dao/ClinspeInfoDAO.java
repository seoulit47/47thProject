package com.seoulit.erp47.sup.pathology.dao;

import java.util.List;

import com.seoulit.erp47.sup.pathology.to.SlClinspeInfoBean;



public interface ClinspeInfoDAO {

	List<SlClinspeInfoBean> selectClinspeInfoList(SlClinspeInfoBean clinspeInfoBean);

}

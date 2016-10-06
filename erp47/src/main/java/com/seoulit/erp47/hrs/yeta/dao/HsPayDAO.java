package com.seoulit.erp47.hrs.yeta.dao;

import java.util.List;

import com.seoulit.erp47.hrs.yeta.to.HsPayBean;

public interface HsPayDAO {
	List<HsPayBean> selectHsPayList();

	void insertHsPay(HsPayBean hsPayBean);

	void updateHsPay(HsPayBean hsPayBean);

	void deleteHsPay(HsPayBean hsPayBean);

}

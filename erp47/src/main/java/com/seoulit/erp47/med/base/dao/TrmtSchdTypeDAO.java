package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.TrmtSchdTypeBean;
import com.seoulit.erp47.med.base.to.TrmtSchdTypeDetailBean;

public interface TrmtSchdTypeDAO {
	void insertTrmtSchdType(TrmtSchdTypeBean trmtSchdTypeBean);

	void insertTrmtSchdTypeDetail(TrmtSchdTypeDetailBean trmtSchdTypeDetailBean);

	void deleteTrmtSchdTypeDetailPro(String trmtTypeNo);

	void deleteTrmtSchdType(TrmtSchdTypeBean trmtSchdTypeBean);

	void deleteTrmtSchdTypeDetail(TrmtSchdTypeDetailBean trmtSchdTypeDetailBean);

	List<TrmtSchdTypeBean> selectTrmtTypeList(String empNo);

	void updateTrmtSchdTypeDetail(TrmtSchdTypeDetailBean trmtSchdTypeDetailBean);

	void updateTrmtSchdType(TrmtSchdTypeBean trmtSchdTypeBean);

	void callApplyType(Map<String, String> queryMap);
}

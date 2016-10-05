package com.seoulit.erp47.hrs.yeta.dao;

import java.util.List;

import com.seoulit.erp47.hrs.yeta.to.HmEmpBean;

public interface HmEmpDAO {
	List<HmEmpBean> selectHmEmpList();

	void insertHmEmp(HmEmpBean hmEmpBean);

	void updateHmEmp(HmEmpBean hmEmpBean);

	void deleteHmEmp(HmEmpBean hmEmpBean);

}

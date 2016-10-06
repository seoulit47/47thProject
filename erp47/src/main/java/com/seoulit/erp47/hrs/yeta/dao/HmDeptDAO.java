package com.seoulit.erp47.hrs.yeta.dao;

import java.util.List;

import com.seoulit.erp47.hrs.yeta.to.HmDeptBean;

public interface HmDeptDAO {
	List<HmDeptBean> selectHmDeptList();

	void insertHmDept(HmDeptBean hmDeptBean);

	void updateHmDept(HmDeptBean hmDeptBean);

	void deleteHmDept(HmDeptBean hmDeptBean);

}

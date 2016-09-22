package com.seoulit.erp47.acc.budget.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.to.OrgDlineBean;

public interface OrgDlineDAO {

	List<OrgDlineBean> selectOrgDlineList(Map<String, String> argsMap);

	void callOrgDlineReg(OrgDlineBean orgDlineBean);
}

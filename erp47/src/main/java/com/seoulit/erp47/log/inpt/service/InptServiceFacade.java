package com.seoulit.erp47.log.inpt.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.inpt.to.CtrtInfoBean;
import com.seoulit.erp47.log.inpt.to.SkillExmntHistBean;

public interface InptServiceFacade {

	List<SkillExmntHistBean> skillExmntList(Map<String, String> argsMap);

	List<CtrtInfoBean> findCtrtList();

	public void batchProcessSkillExmnt(List<SkillExmntHistBean> skillExmntList);
}

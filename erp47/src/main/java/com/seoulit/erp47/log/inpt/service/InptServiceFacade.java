package com.seoulit.erp47.log.inpt.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.inpt.to.CtrtInfoBean;
import com.seoulit.erp47.log.inpt.to.CtrtInfoDetailBean;
import com.seoulit.erp47.log.inpt.to.GdsInptBean;
import com.seoulit.erp47.log.inpt.to.SkillExmntHistBean;

public interface InptServiceFacade {
	List<CtrtInfoBean> findCtrtList(Map<String, String> argsMap);
	List<CtrtInfoDetailBean> findCtrtDetailList(Map<String, String> argsMap);
	List<GdsInptBean> findGdsInpt(Map<String, String> argsMap);
	
	List<SkillExmntHistBean> skillExmntList(Map<String, String> argsMap);
	public void batchProcessSkillExmnt(List<SkillExmntHistBean> skillExmntList);
}

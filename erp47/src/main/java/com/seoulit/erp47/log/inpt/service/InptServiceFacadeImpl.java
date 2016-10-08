package com.seoulit.erp47.log.inpt.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.inpt.applicationService.InptapplicationServiceFacade;
import com.seoulit.erp47.log.inpt.applicationService.SkillExmntapplicationServiceFacade;
import com.seoulit.erp47.log.inpt.to.CtrtInfoBean;
import com.seoulit.erp47.log.inpt.to.CtrtInfoDetailBean;
import com.seoulit.erp47.log.inpt.to.GdsInptBean;
import com.seoulit.erp47.log.inpt.to.SkillExmntHistBean;

@Service
public class InptServiceFacadeImpl implements InptServiceFacade {

	@Autowired
	SkillExmntapplicationServiceFacade skillExmntapplicationServiceFacade;
	@Autowired
	InptapplicationServiceFacade inptapplicationServiceFacade;

	@Override
	public List<CtrtInfoBean> findCtrtList(Map<String, String> argsMap) {
		return inptapplicationServiceFacade.findCtrtList(argsMap);
	}
	
	@Override
	public List<CtrtInfoDetailBean> findCtrtDetailList(Map<String, String> argsMap) {
		return inptapplicationServiceFacade.findCtrtDetailList(argsMap);
	}
	
	@Override
	public List<GdsInptBean> findGdsInpt(Map<String, String> argsMap) {
		return inptapplicationServiceFacade.findGdsInpt(argsMap);
	}
	
	@Override
	public List<SkillExmntHistBean> skillExmntList(Map<String, String> argsMap) {
		return skillExmntapplicationServiceFacade.skillexmntList(argsMap);
	}

	@Override
	public void batchProcessSkillExmnt(List<SkillExmntHistBean> skillExmntList) {
		skillExmntapplicationServiceFacade.batchProcessSkillExmnt(skillExmntList);
	}

}

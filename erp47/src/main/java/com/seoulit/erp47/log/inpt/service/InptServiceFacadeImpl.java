package com.seoulit.erp47.log.inpt.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.inpt.applicationService.InptapplicationServiceFacade;
import com.seoulit.erp47.log.inpt.applicationService.SkillExmntapplicationServiceFacade;
import com.seoulit.erp47.log.inpt.to.CtrtInfoBean;
import com.seoulit.erp47.log.inpt.to.SkillExmntHistBean;

@Service
public class InptServiceFacadeImpl implements InptServiceFacade {

	@Autowired
	SkillExmntapplicationServiceFacade skillExmntapplicationServiceFacade;
	@Autowired
	InptapplicationServiceFacade inptapplicationServiceFacade;

	@Override
	public List<SkillExmntHistBean> skillExmntList(Map<String, String> argsMap) {
		return skillExmntapplicationServiceFacade.skillexmntList(argsMap);
	}

	@Override
	public List<CtrtInfoBean> findCtrtList() {
		return inptapplicationServiceFacade.findCtrtList();
	}

	@Override
	public void batchProcessSkillExmnt(List<SkillExmntHistBean> skillExmntList) {
		skillExmntapplicationServiceFacade.batchProcessSkillExmnt(skillExmntList);
	}

}

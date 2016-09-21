package com.seoulit.erp47.log.inpt.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.inpt.applicationService.InptapplicationServiceFacade;
import com.seoulit.erp47.log.inpt.applicationService.SkillExmntapplicationServiceFacade;
import com.seoulit.erp47.log.inpt.to.CtrtInfoBean;
import com.seoulit.erp47.log.inpt.to.SkillExmntHistBean;
import com.seoulit.erp47.med.request.to.CfrnTrmtBean;

@Service
public class InptServiceFacadeImpl implements InptServiceFacade{

	@Autowired
	SkillExmntapplicationServiceFacade skillExmntapplicationServiceFacade;
	@Autowired
	InptapplicationServiceFacade inptapplicationServiceFacade;
	
	@Override
	public List<SkillExmntHistBean> skillExmntList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return skillExmntapplicationServiceFacade.skillexmntList(argsMap);
	}

	@Override
	public List<CtrtInfoBean> findCtrtList() {
		// TODO Auto-generated method stub
		return inptapplicationServiceFacade.findCtrtList();
	}

	@Override
	public void batchProcessSkillExmnt(List<SkillExmntHistBean> skillExmntList) {
		// TODO Auto-generated method stub
		skillExmntapplicationServiceFacade.batchProcessSkillExmnt(skillExmntList);
	}

	
}

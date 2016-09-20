package com.seoulit.erp47.log.inpt.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.log.inpt.dao.SkillExmntDAO;
import com.seoulit.erp47.log.inpt.to.SkillExmntHistBean;
@Component
public class SkillExmntapplicationServiceFacadeImpl implements SkillExmntapplicationServiceFacade{

	@Autowired
	SkillExmntDAO skillexmntDAO;
	
	
	@Override
	public List<SkillExmntHistBean> skillexmntList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return skillexmntDAO.findSkillExmntHistList(argsMap);
	}

}

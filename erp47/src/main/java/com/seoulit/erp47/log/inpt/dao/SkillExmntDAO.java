package com.seoulit.erp47.log.inpt.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.inpt.to.SkillExmntHistBean;

public interface SkillExmntDAO {

	
		public List<SkillExmntHistBean>findSkillExmntHistList(Map<String, String>argsMap);
		public void deleteSkillExmnt(SkillExmntHistBean skillExmntBean);
	
}

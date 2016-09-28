package com.seoulit.erp47.acc.budget.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.budget.to.JobLimitBean;

public interface JobLimitDAO {
	
	List<JobLimitBean> selectJobLimitList(Map<String, String> argsMap);
	void updateJobLimit(JobLimitBean jobLimitBean);

}

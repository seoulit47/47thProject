package com.seoulit.erp47.hrs.yeta.dao;

import java.util.List;

import com.seoulit.erp47.hrs.yeta.to.HyDependentEducationBean;

public interface HyDependentEducationDAO {
	List<HyDependentEducationBean> selectHyDependentEducationList();

	void insertHyDependentEducation(HyDependentEducationBean hyDependentEducationBean);

	void updateHyDependentEducation(HyDependentEducationBean hyDependentEducationBean);

	void deleteHyDependentEducation(HyDependentEducationBean hyDependentEducationBean);

}

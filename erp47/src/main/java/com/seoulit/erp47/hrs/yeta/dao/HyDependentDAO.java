package com.seoulit.erp47.hrs.yeta.dao;

import java.util.List;

import com.seoulit.erp47.hrs.yeta.to.HyDependentBean;

public interface HyDependentDAO {
	List<HyDependentBean> selectHyDependentList();

	void insertHyDependent(HyDependentBean hyDependentBean);

	void updateHyDependent(HyDependentBean hyDependentBean);

	void deleteHyDependent(HyDependentBean hyDependentBean);

}

package com.seoulit.erp47.hrs.yeta.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.yeta.to.HyYtaResultBean;

public interface HyYtaResultDAO {
	List<HyYtaResultBean> selectHyYtaResultList(Map<String, String> argsMap);

	void insertHyYtaResult(HyYtaResultBean hyYtaResultBean);

	void updateHyYtaResult(HyYtaResultBean hyYtaResultBean);

	void deleteHyYtaResult(HyYtaResultBean hyYtaResultBean);

	void executeYta(Map<String, String> argsMap);

}

package com.seoulit.erp47.hrs.guntae.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.guntae.to.OverTimeWorkBean;

/**
 * @Package  com.seoul.his.hrs.guntae.dao
 * @Class    OverTimeWorkDAO.java
 * @Create   2016. 9. 06.
 * @Author   pyh
 * @Description
 *
 * @LastUpdated
 *     
 */
public interface OverTimeWorkDAO {

	List<OverTimeWorkBean> selectOverTimeWorkList(Map<String, String> argsMap);

	List<OverTimeWorkBean> selectApproverOverTimeWorkList();

	void insertOverTimeWork(OverTimeWorkBean overTimeWorkbean);

	void updateOverTimeWork(OverTimeWorkBean overTimeWorkbean);

	void deleteOverTimeWork(OverTimeWorkBean overTimeWorkbean);

	void deleteBeforeOverTimeWork(OverTimeWorkBean overTimeWorkbean);

}

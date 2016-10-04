package com.seoulit.erp47.hrs.ret.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.ret.exception.RetPayTreatedException;
import com.seoulit.erp47.hrs.ret.to.RetApproPayBean;
import com.seoulit.erp47.hrs.ret.to.RetEmpBean;
import com.seoulit.erp47.hrs.ret.to.RetPayBean;
import com.seoulit.erp47.hrs.ret.to.RetPlanEmpBean;
import com.seoulit.erp47.hrs.ret.to.ReturnItemBean;

/**
 * 
 * @Package com.seoulit.erp47.hrs.ret.service
 * @Class RetServiceFacade.java
 * @Create 2016. 10. 3.
 * @Author 김봉진
 * @Description 퇴직 sf
 * @LastUpdated 2016. 10. 4.
 */

public interface RetServiceFacade {

	List<RetApproPayBean> findRetApproPayList(Map<String, String> argsMap);

	List<ReturnItemBean> findReturnItemList(Map<String, String> returnItemSeachMap);

	void batchRetApproPayProcess(List<RetApproPayBean> retApproPayList);

	void batchReturnItemProcess(List<ReturnItemBean> returnItemList);

	void calcRetPayProcess(Map<String, String> argsMap) throws RetPayTreatedException;

	void batchRetPayProcess(List<RetPayBean> retPayList);

	List<RetPayBean> findRetPayList(Map<String, String> argsMap);

	List<RetPlanEmpBean> findRetPlanEmpList(Map<String, String> argsMap);

	List<RetEmpBean> findRetEmpList(Map<String, String> argsMap);
}

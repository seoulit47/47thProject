package com.seoulit.erp47.log.inpt.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.inpt.to.CtrtInfoBean;
import com.seoulit.erp47.log.inpt.to.CtrtInfoDetailBean;
import com.seoulit.erp47.log.inpt.to.GdsInptBean;

public interface InptapplicationServiceFacade {
	List<CtrtInfoBean> findCtrtList(Map<String, String> argsMap);
	List<CtrtInfoDetailBean> findCtrtDetailList(Map<String, String> argsMap);
	List<GdsInptBean> findGdsInpt(Map<String, String> argsMap);
}

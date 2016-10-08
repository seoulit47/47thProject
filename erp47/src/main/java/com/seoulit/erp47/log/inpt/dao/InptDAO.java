package com.seoulit.erp47.log.inpt.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.inpt.to.CtrtInfoBean;
import com.seoulit.erp47.log.inpt.to.CtrtInfoDetailBean;
import com.seoulit.erp47.log.inpt.to.GdsInptBean;

public interface InptDAO {
	List<CtrtInfoBean>selectCtrtList(Map<String, String> argsMap);
	List<CtrtInfoDetailBean> selectCtrtDetailList(Map<String, String> argsMap);
	List<GdsInptBean> selectGdsInpt(Map<String, String> argsMap);
}

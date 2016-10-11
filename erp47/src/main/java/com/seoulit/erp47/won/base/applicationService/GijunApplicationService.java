package com.seoulit.erp47.won.base.applicationService;

import java.util.List;

import com.seoulit.erp47.won.base.to.GijunInfoBean;
import com.seoulit.erp47.won.base.to.GijunInfoDetailBean;

public interface GijunApplicationService {
	
	public List<GijunInfoBean> findGijunInfoCodeList();

	public List<GijunInfoDetailBean> findGijunInfoCode(String gijunCd);

	public void batchGijunInfoProcess(List<GijunInfoBean> gijunCodeBeanList);

	public void batchGijunInfoSetProcess(List<GijunInfoDetailBean> gijunCodeDetailBeanList);
	
}
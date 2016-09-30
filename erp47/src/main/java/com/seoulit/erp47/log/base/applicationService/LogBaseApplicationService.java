package com.seoulit.erp47.log.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.base.to.BigGrpCdBean;
import com.seoulit.erp47.log.base.to.BindLogCdBean;
import com.seoulit.erp47.log.base.to.CustBean;
import com.seoulit.erp47.log.base.to.GdsBean;
import com.seoulit.erp47.log.base.to.MidGrpCdBean;
import com.seoulit.erp47.log.base.to.OutLogCdBean;
import com.seoulit.erp47.log.base.to.SmGrpCdBean;
import com.seoulit.erp47.log.base.to.WhBean;

public interface LogBaseApplicationService {
	List<GdsBean> findGdsList(Map<String, String> argsMap); 
	public Map<String,List<OutLogCdBean>>BindLogCd(List<BindLogCdBean> bindLogCdList);
	public List<WhBean>findWhList(Map<String,String>argsMap);
	public void batchWhProcess(List<WhBean>batchWhList);
	public List<CustBean>findCustList(Map<String,String>argsMap);
	public void batchCustProcess(List<CustBean>batchCustList);
    
    Map<String, List<OutLogCdBean>> bindLogCd(List<BindLogCdBean> bindLogCdList);
    String callGdsCd(Map<String, String> argsMap);
    void batchGdsProcess(List<GdsBean> gdsList);
    void batchGdsGrpCdProcess(List<BigGrpCdBean> bigGrpCdList, 
                              List<MidGrpCdBean> midGrpCdList,
                              List<SmGrpCdBean> smGrpCdList);

    void modifyWh(List<WhBean> whList);
    public List<BigGrpCdBean> findGrpList(Map<String, String> argsMap);
}

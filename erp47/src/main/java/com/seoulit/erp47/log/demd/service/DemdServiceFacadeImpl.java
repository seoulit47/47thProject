package com.seoulit.erp47.log.demd.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.log.demd.applicationService.DemdApplicationService;
import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;
import com.seoulit.erp47.log.demd.to.GdsReturnBean;
import com.seoulit.erp47.log.demd.to.GdsReturnHistBean;

@Service
public class DemdServiceFacadeImpl implements DemdServiceFacade{

    @Autowired
    DemdApplicationService demdApplicationService;

    @Override
    public List<GdsReturnBean> findGdsReturnList()
    {
        return demdApplicationService.findGdsReturnList();
    }

    @Override
    public void batchGdsReturnProcess(List<GdsReturnBean> GdsReturnList)
    {
        demdApplicationService.batchGdsReturnProcess(GdsReturnList);
    }
    @Override
    public List<GdsReturnHistBean> findGdsReturnHistList()
    {
        return demdApplicationService.findGdsReturnHistList();
    }
    @Override
    public void batchGdsReturnHistProcess(List<GdsReturnHistBean> GdsReturnHistList)
    {
        demdApplicationService.batchGdsReturnHistProcess(GdsReturnHistList);
    }
    public List<GdsAnspBean> findGdsAnspList(Map<String, String> argsMap)
    {
        return demdApplicationService.findGdsAnspList(argsMap);
    }
    @Override
    public void batchGdsAnspProcess(List<GdsAnspBean> GdsAnspBeanList)
    {
        demdApplicationService.batchGdsAnspProcess(GdsAnspBeanList);
    }
    @Override
    public void batchGdsAnspHistProcess(List<GdsAnspBean>GdsAnspBeanList,List<GdsAnspHistBean> GdsAnspHistBeanList)
    {
        demdApplicationService.batchGdsAnspHistProcess(GdsAnspBeanList,GdsAnspHistBeanList);
    }

	@Override
	public List<GdsAnspHistBean> findGdsAnspHistList(Map<String, String> argsMap) {
		return demdApplicationService.findGdsAnspHistList(argsMap);
	}
}

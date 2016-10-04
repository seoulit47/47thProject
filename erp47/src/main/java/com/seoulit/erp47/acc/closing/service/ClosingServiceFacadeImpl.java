package com.seoulit.erp47.acc.closing.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.closing.applicationService.ClosingApplicationService;
import com.seoulit.erp47.acc.closing.to.ClosAcntBean;
import com.seoulit.erp47.acc.closing.to.ClosDataBean;

@Service
public class ClosingServiceFacadeImpl implements ClosingServiceFacade{
    
	@Autowired
    ClosingApplicationService closingApplicationService;
    /*@Autowired
    DlineCarrforApplicationService dlineCarrforApplicationService;
    @Autowired
    FinanStatsApplicationService finanStatsApplicationService;
    @Autowired
    TotalBalApplicationService totalBalApplicationService;*/

    @Override
    public List<ClosDataBean> findClosDataList(Map<String, Object> argsMap) {
        return closingApplicationService.findClosDataList(argsMap);
    }

	@Override
	public List<ClosAcntBean> findClosAcntList(Map<String, String> argsMap) {
		 return closingApplicationService.findClosAcntList(argsMap);
	}

	@Override
	public void registerClosJour(HashMap<String, Object> map) {
		closingApplicationService.registerClosJour(map);
	}


    /*@Override
    public void modifyDlineYn(AccPridBean accPrid) {
        dlineCarrforApplicationService.modifyDlineYn(accPrid);
    }

    @Override
    public void executeCarrfor(AccPridBean accPrid) {
        dlineCarrforApplicationService.executeCarrfor(accPrid);
    }

    @Override
    public List<FinanStatsBean> findFinanStats(Map<String, Object> argsMap) {
        return finanStatsApplicationService.findFinanStats(argsMap);
    }

    @Override
    public List<TotalBalBean> findTotalBalList(Map<String, Object> argsMap) {
        return totalBalApplicationService.findTotalBalList(argsMap);
    }*/

}

package com.seoulit.erp47.acc.closing.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.closing.dao.FinanStatsDAO;
import com.seoulit.erp47.acc.closing.to.FinanStatsBean;

@Service
public class FinanStatsApplicationServiceImpl implements FinanStatsApplicationService{
    @Autowired
    FinanStatsDAO finanStatsDAO;

    
    @Override
    public List<FinanStatsBean> findFinanStats(Map<String, Object> argsMap) {

    	String finanStatsCd = (String)argsMap.get("finanStatsCd");
        argsMap.put("errorCode"     , "");
        argsMap.put("errorMsg"      , "");
        argsMap.put("finanStatsList", "");

        if(finanStatsCd.equals("A")){
        	System.out.println("제무상태 리스트호출");
            finanStatsDAO.selectFinanPosiList(argsMap);	//제무상태 리스트
        }else if(finanStatsCd.equals("B")){
        	System.out.println("손익계산서 리스트호출");
            finanStatsDAO.selectIncomStatList(argsMap); //손익계산서 리스트
        }

        String errorCode    = (String)argsMap.get("errorCode");
        String errorMsg     = (String)argsMap.get("errorMsg");

        List<FinanStatsBean> finanStatsList = (List<FinanStatsBean>)argsMap.get("finanStatsList");

        return finanStatsList;
    }

}

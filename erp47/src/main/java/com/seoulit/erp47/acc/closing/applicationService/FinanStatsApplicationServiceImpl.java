package com.seoulit.erp47.acc.closing.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.closing.dao.FinanStatsDAO;
import com.seoulit.erp47.acc.closing.to.FinanStatsBean;
import com.seoulit.erp47.acc.elementary.dao.AccPridDAO;
import com.seoulit.erp47.acc.elementary.to.AccPridBean;

@Service
public class FinanStatsApplicationServiceImpl implements FinanStatsApplicationService{
    @Autowired
    FinanStatsDAO finanStatsDAO;
    @Autowired
    AccPridDAO accPridDAO;
    
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

    @Override
	public HashMap<String, Object> findPrintFinanStats (HashMap<String, Object> queryMap) {

		HashMap<String, String> queryMap2 = new HashMap<>();
		queryMap2.put("accPrid", (String) queryMap.get("accPrid"));

		List<FinanStatsBean> finanStatsList = findFinanStats(queryMap);
		AccPridBean accPrid = accPridDAO.selectAccPrid(queryMap2);

		HashMap<String, Object> printFinanStatsMap = new HashMap<>();
		printFinanStatsMap.put("accPrid", accPrid);
		printFinanStatsMap.put("finanStatsList", finanStatsList);

		return printFinanStatsMap;
	}
}

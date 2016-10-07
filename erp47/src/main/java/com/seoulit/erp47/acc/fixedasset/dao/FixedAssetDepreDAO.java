package com.seoulit.erp47.acc.fixedasset.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.fixedasset.to.DepreRateBean;
import com.seoulit.erp47.acc.fixedasset.to.FixedAssetBean;
import com.seoulit.erp47.acc.fixedasset.to.FixedAssetDepreYmBean;
import com.seoulit.erp47.acc.fixedasset.to.MonthDepreBean;
import com.seoulit.erp47.acc.fixedasset.to.YearDepreBean;

public interface FixedAssetDepreDAO {

    public List<DepreRateBean> selectDepreRateList();

    public List<YearDepreBean> selectFixedAssetYearDepreList(Map<String, String> argsMap);

    public void callFixedAssetDepre(FixedAssetBean fixedAssetBean);

    public List<MonthDepreBean> selectFixedAssetMonthDepreList(HashMap<String, Object> argsMap);
    
    public List<FixedAssetDepreYmBean> selectFixedAssetMonthDepreYmList(HashMap<String, Object> argsMap);
    
    public MonthDepreBean callFixedAssetMonthDepreDline(MonthDepreBean monthDepreBean);
    
    public List<YearDepreBean> selectFixedAssetYearDepreDtlList(HashMap<String, Object> argsMap);
    
    public List<FixedAssetDepreYmBean> selectFixedAssetYearDepreYearList(HashMap<String, Object> argsMap);
    
    public YearDepreBean callFixedAssetYearDepreDline(YearDepreBean yearDepreBean);
}








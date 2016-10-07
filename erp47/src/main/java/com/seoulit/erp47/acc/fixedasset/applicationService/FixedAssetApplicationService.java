package com.seoulit.erp47.acc.fixedasset.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.fixedasset.exception.assetMonthDepreNotFinish;
import com.seoulit.erp47.acc.fixedasset.exception.assetYearDepreFinish;
import com.seoulit.erp47.acc.fixedasset.to.DepreRateBean;
import com.seoulit.erp47.acc.fixedasset.to.DisposalPlnFixedAssetBean;
import com.seoulit.erp47.acc.fixedasset.to.DisposalRegBean;
import com.seoulit.erp47.acc.fixedasset.to.DisposalSellValueBean;
import com.seoulit.erp47.acc.fixedasset.to.FixedAssetBean;
import com.seoulit.erp47.acc.fixedasset.to.FixedAssetCdDtlBean;
import com.seoulit.erp47.acc.fixedasset.to.FixedAssetMovBean;
import com.seoulit.erp47.acc.fixedasset.to.FixedAssetSequenceBean;
import com.seoulit.erp47.acc.fixedasset.to.MonthDepreBean;
import com.seoulit.erp47.acc.fixedasset.to.YearDepreBean;

public interface FixedAssetApplicationService {

    FixedAssetSequenceBean findMaxAssetNo();

    List<FixedAssetCdDtlBean> findUsingFixedAssetCdDtlList();

    List<DepreRateBean> findDepreRateList();

    List<FixedAssetBean> findFixedAssetList(Map<String, String> argsMap);

    FixedAssetBean findFixedAsset(Map<String, String> argsMap);

    List<YearDepreBean> findFixedAssetYearDepreList(Map<String, String> argsMap);

    HashMap<String, Object> findFixedAssetGrpCdList();

    void batchFixedAssetProcess(List<FixedAssetBean> fixedAssetBeanList);

    List<FixedAssetMovBean> findFixedAssetMovList();

    void batchFixedAssetMovProcess(List<FixedAssetMovBean> fixedAssetMovBeanList);

    void batchFixedAssetGrpCdProcess(HashMap<String, Object> fixedAssetGrpCdMap);

    HashMap<String, Object> findFixedAssetCdList();

    void batchFixedAssetCdProcess(HashMap<String, Object> fixedAssetCdMap);

    public List<DisposalRegBean> findDisposalFixedAssetList(Map<String, String> argsMap);
    
    public List<DisposalPlnFixedAssetBean> findDisposalPlnFixedAssetList(Map<String, String> argsMap);
    
    public List<FixedAssetSequenceBean> findDisposalPlnFixedAssetNo();
    
    public void batchDisposalPlnFixedAssetProcess(List<DisposalPlnFixedAssetBean> disposalPlnFixedAssetBeanList);
    
    public HashMap<String, Object> findFixedAssetMonthDepreList(HashMap<String, Object> argsMap);
    
    public void modifyFixedAssetMonthDepre(List<MonthDepreBean> monthDepreBeanList) throws assetYearDepreFinish;
    
    public HashMap<String, Object> findFixedAssetYearDepreDtlList(HashMap<String, Object> argsMap);
    
    public void modifyFixedAssetYearDepre(List<YearDepreBean> yearDepreBeanList) throws assetMonthDepreNotFinish;
    
    public DisposalSellValueBean findDisposalSellValue(DisposalSellValueBean inDisposalSellValueBean);
    
    public void batchDisposalFixedAssetProcess(List<DisposalRegBean> disposalRegBeanList);
}

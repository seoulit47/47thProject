package com.seoulit.erp47.acc.fixedasset.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.fixedasset.to.DisposalPlnFixedAssetBean;
import com.seoulit.erp47.acc.fixedasset.to.DisposalRegBean;
import com.seoulit.erp47.acc.fixedasset.to.DisposalSellValueBean;
import com.seoulit.erp47.acc.fixedasset.to.FixedAssetSequenceBean;


public interface FixedAssetDisposalDAO {
	public List<FixedAssetSequenceBean> selectDisposalPlnFixedAssetNo();
	public List<DisposalPlnFixedAssetBean> selectDisposalPlnFixedAssetList(Map<String, String> argsMap);
	public void insertDisposalPlnFixedAsset(DisposalPlnFixedAssetBean disposalPlnFixedAssetBean);
	public void deleteDisposalPlnFixedAsset(DisposalPlnFixedAssetBean disposalPlnFixedAssetBean);
	public void updateDisposalPlnFixedAsset(DisposalPlnFixedAssetBean disposalPlnFixedAssetBean);
	
	public List<DisposalRegBean> selectDisposalFixedAssetList(Map<String, String> argsMap);
	
	public void callDisposalSellValue(DisposalSellValueBean inDisposalSellValueBean);
	public void insertDisposalFixedAsset(DisposalRegBean disposalRegBean);
	public void deleteDisposalFixedAsset(DisposalRegBean disposalRegBean);
	public void updateDisposalFixedAsset(DisposalRegBean disposalRegBean);
	
}








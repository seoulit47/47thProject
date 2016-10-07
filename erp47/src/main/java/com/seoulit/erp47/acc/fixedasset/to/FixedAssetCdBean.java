package com.seoulit.erp47.acc.fixedasset.to;

import java.util.List;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.annotation.Remove;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name="dsFixedAssetCd")
public class FixedAssetCdBean extends BaseBean{
	
	private String fixedAssetCd,
	               cdNm,
	               cdUseYn;
	public List<FixedAssetCdDtlBean> fixedAssetCdDtlBeanList;
	
	
	
	@Remove
	public List<FixedAssetCdDtlBean> getFixedAssetCdDtlBeanList() {
		return fixedAssetCdDtlBeanList;
	}
	@Remove
	public void setFixedAssetCdDtlList(List<FixedAssetCdDtlBean> fixedAssetCdDtlBeanList) {
		this.fixedAssetCdDtlBeanList = fixedAssetCdDtlBeanList;
	}
}
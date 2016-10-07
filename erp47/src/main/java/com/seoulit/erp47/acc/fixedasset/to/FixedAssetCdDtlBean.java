package com.seoulit.erp47.acc.fixedasset.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name="dsFixedAssetCdDtl")
public class FixedAssetCdDtlBean extends BaseBean{
    private String  fixedAssetCd, 
                    fixedAssetCdDtl, 
                    cdDtlNm, 
                    cdDtlUseYn;
}

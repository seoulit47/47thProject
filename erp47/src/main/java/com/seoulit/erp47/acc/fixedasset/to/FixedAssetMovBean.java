package com.seoulit.erp47.acc.fixedasset.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
@Dataset(name="dsFixedAssetMov")
public class FixedAssetMovBean extends BaseBean{
    private String  assetNo, 
                    movDate,
                    mngntCd, 
                    ownDept,
                    pstLoc,
                    respoWorker,
                    note;
}
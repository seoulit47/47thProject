package com.seoulit.erp47.acc.fixedasset.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name="dsAssetSmGrpCd")
public class FixedAssetSmGrpCdBean extends BaseBean{
    private String  lgGrpCd, 
                    midGrpCd, 
                    smGrpCd, 
                    smGrpCdNm, 
                    useYn;

}
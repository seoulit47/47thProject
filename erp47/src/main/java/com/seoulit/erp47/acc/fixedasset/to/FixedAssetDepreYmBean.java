package com.seoulit.erp47.acc.fixedasset.to;
import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name="dsFixedAssetDepreYm")
public class FixedAssetDepreYmBean extends BaseBean{
	
    private String depreYm,    // 년월
                   cnt,        // 건수
                   depreYear,  // 년도
                   depreAmt;   // 상각액
}                              




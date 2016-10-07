package com.seoulit.erp47.acc.fixedasset.to;
import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name="dsDisposalSellValue")
public class DisposalSellValueBean extends BaseBean{
	private String disposalSellValue,    // 
	               disposalResult,       // 매각결과
	               assetNo,              // 자산번호
	               sellAmt,              // 매각금액
	               disposalDate;         // 매각일
}
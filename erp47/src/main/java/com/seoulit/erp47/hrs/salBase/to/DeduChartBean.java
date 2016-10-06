package com.seoulit.erp47.hrs.salBase.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.hrs.salBase.to
 * @Class    DeduChartBean.java
 * @Create   2016. 9. 27.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsDeductionChart")
public class DeduChartBean extends BaseBean{
	private String division,       // 항목
	               deductAmt,      // 공제액
	               artcCd,         // 항목코드
	               belongYear,     // 귀속년도
	               seq;            // 일련번호

}

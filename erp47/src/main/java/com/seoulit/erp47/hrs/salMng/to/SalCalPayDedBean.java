package com.seoulit.erp47.hrs.salMng.to;

import com.seoulit.erp47.common.annotation.Dataset;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.hrs.salMng.to
 * @Class    SalCalPayDedBean.java
 * @Create   2016. 9. 28.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsSalCalPayDed")
public class SalCalPayDedBean {
	private String paymDeducDiv,   // 지급공제구분
                   paymDeducNm,    // 지급공제액
                   amt,            // 금액
                   empNo;          // 사원번호
}

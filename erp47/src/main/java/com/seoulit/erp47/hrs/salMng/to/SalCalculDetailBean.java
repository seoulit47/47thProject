package com.seoulit.erp47.hrs.salMng.to;

import com.seoulit.erp47.common.annotation.Dataset;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.hrs.salMng.to
 * @Class    SalCalculDetailBean.java
 * @Create   2016. 9. 28.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsPayDedu")
public class SalCalculDetailBean {
	private String paymDeducDiv,   // 지급공제구분
                   paymDeducNm,    // 지급공제명
                   amt,            // 금액
                   empNo;          // 사원번호
}

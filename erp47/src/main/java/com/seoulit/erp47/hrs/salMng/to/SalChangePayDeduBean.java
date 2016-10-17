package com.seoulit.erp47.hrs.salMng.to;

import com.seoulit.erp47.common.annotation.Dataset;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.hrs.salMng.to
 * @Class    salChangePayDeduBean.java
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
public class SalChangePayDeduBean {
	private String paymDeducDiv,   // 지급공제구분
				   paymDeducNm,    // 지급공제명
				   basicSal,       // 기본급
				   compSal,        // 회사부담금
				   basicAap,       // 기본급
				   compAap,        // 회사차인지급액
				   aap;            // 차인지급액
}

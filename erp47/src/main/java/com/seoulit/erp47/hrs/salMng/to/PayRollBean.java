package com.seoulit.erp47.hrs.salMng.to;

import com.seoulit.erp47.common.annotation.Dataset;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.hrs.salMng.to
 * @Class    PayRollBean.java
 * @Create   2016. 9. 28.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsPayRoll")
public class PayRollBean {
	private String title1,             // 사원코드
				   title2,             // 사원명
				   title3,             // 부서
				   paymAmt,            // 지급항목금액
				   deducAmt,           // 공제항목금액
				   select="0";         // checkbox 미선택

}

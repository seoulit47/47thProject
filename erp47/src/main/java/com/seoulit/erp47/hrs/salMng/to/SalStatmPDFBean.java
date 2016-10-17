package com.seoulit.erp47.hrs.salMng.to;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.hrs.salMng.to
 * @Class    SalStatmPDFBean.java
 * @Create   2016. 9. 28.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
public class SalStatmPDFBean {
	private String belongYm,        // 귀속연월
                   paymDeducDiv,    // 지급공제구분
                   paymDeducNm,     // 지급공제명
                   amt,             // 금액
                   empNo,           // 사원번호
                   empNm,           // 사원명
                   deptNm,          // 부서명
                   aap;             // 차인지급액
}

package com.seoulit.erp47.hrs.yeta.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.hrs.yeta.to
 * @Class HsPayBean.java
 * @Create 2016. 10. 5
 * @Author 김봉진
 * @Description 책정임금테이블빈
 * @LastUpdated
 */
@Dataset(name = "dsHsPay")
@Getter
@Setter
@ToString
public class HsPayBean extends BaseBean {
	private String paymDeducDiv, // 지급공제구분
			paymDeducCd, // 지급공제코드
			paymDeducNm, // 지급공제명
			amt, // 금액
			compShare, // 회사부담금
			empNo; // 사원번호
}
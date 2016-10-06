package com.seoulit.erp47.hrs.yeta.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.hrs.yeta.to
 * @Class HsRegularWorksSalaryBean.java
 * @Create 2016. 10. 5
 * @Author 김봉진
 * @Description 상용직 급여입력계산테이블 빈
 * @LastUpdated
 */
@Dataset(name = "dsHsRegularWorksSalary")
@Getter
@Setter
@ToString
public class HsRegularWorksSalaryBean extends BaseBean {
	private String empNm, // 사원명
			taxationTaxSum, // 과세총액
			compShare, // 회사총부담금
			aap, // 차인지급액
			dline, // 마감상태
			empNo, // 사원번호
			jobClass, // 직종
			freeTaxAmt, // 비과세총액
			calYn; // 계산여부

}
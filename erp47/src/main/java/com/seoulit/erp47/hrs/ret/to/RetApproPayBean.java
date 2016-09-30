package com.seoulit.erp47.hrs.ret.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package com.seoulit.erp47.hrs.ret.to
 * @Class RetApproPayBean.java
 * @Create 2016. 9. 30.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsRetApproPay")
public class RetApproPayBean extends BaseBean {
	String th // 회차
			, paymentMonth // 납부월
			, grade // 등급
			, myselfBurdenAmount // 본인부담금
			, userBurdenAmount // 사용자부담금
			, retirementBeforeSalary // 퇴직전임금
			, payYN // 납부여부
			, paymentDate // 납부일
			, empNo // 사원번호
			, empNm; // 사원명

}
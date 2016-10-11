package com.seoulit.erp47.won.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.won.base.to
 * @Class ExpTgmBean.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsExpTgm")
public class ExpTgmBean extends BaseBean {

	private String patNo, // 환자번호
			patNm, // 환자명
			patRrn, // 환자주민등록번호
			applyPridStartDate, // 적용시작일
			applyPridEndDate, // 적용만료일
			expCd, // 감면코드
			rshipCd, // 관계코드
			empNo, // 사원번호
			empNm, // 사원명
			deptNm, // 부서명
			note; // 비고

}
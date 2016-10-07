package com.seoulit.erp47.won.baseInfo.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.won.base.to
 * @Class HealthInsurBean.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHealthInsur")
public class HealthInsurBean extends BaseBean {

	private String patNo, // 환자번호
			insuNm, // 피보험자명
			patRrn, // 환자주민등록번호
			patType, // 환자유형
			applyPridStartDate, // 적용시작일
			applyPridEndDate, // 적용만료일
			certfctNo; // 증번호

}
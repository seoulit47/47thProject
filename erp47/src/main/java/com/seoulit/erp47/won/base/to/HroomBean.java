package com.seoulit.erp47.won.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.won.base.to
 * @Class HroomBean.java
 * @Create 2016. 10. 7.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHroom")
public class HroomBean extends BaseBean {

	private String hroomNo, // 병실번호
			ward, // 병동
			hroom, // 병실
			applyPridStartDate, // 적용시작일
			applyPridEndDate, // 적용만료일
			trmtDept, // 진료과
			hroomGrade, // 병실등급
			gender, // 성별
			sibdTel, // 병상전화번호
			feeCd, // 수가코드
			hroomDiffAmt, // 병실차액
			sibdCnt, // 병상개수
			pmsnSibd, // 허가병상
			finanCnt; // 재원자수

}
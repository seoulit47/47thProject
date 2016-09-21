package com.seoulit.erp47.acc.budget.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsBudgReg")
public class BudgRegBean extends BaseBean {

	private	String bimokNm			// 예산비목
				   , bimokCd 		// 예산비목코드
				   , parentBimok 	// 상위코드
				   , useDeptNm 		// 계정책임자
				   , acntCd 		// 계정코드
				   , acntNm 		// 계정명
				   , finYn  		// 최종여부
				   , bimokLevel 	// 수준
				   , calcReason 	// 산출근거
				   , amount  		// 예산금액
				   , beforeAmount   // 이전예산금액
				   , accYear;  		// 회계년도
}

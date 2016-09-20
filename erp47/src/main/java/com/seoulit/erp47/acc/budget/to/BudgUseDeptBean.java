package com.seoulit.erp47.acc.budget.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsBudgUserDept")
public class BudgUseDeptBean extends BaseBean{
	private	String	bimokCd			// 예산비목코드
					, useDeptNm		// 부서명
					, acntRespNm	// 계정책임명칭
					, acntRespYn	// 계정책임여부
					, accYear		// 회계년도
					, useDeptCd ;	// 사용부서
}

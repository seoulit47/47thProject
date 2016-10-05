package com.seoulit.erp47.hrs.yeta.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.hrs.yeta.to
 * @Class HyDependentInsuranceBean.java
 * @Create 2016. 10. 5
 * @Author 김봉진
 * @Description 부양가족보험공제테이블빈
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsHyDependentInsurance")
public class HyDependentInsuranceBean extends BaseBean {
	private String empNo, // 사원번호
			occGubun, // 발생구분
			insuranceName, // 보험기관명
			regiNo, // 주민등록번호
			name; // 이름

	private int guaranteedInsuranceAmt, // 보장성보험료
			handicappedInsuranceAmt; // 장애인보장성보험료

}
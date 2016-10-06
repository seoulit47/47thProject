package com.seoulit.erp47.hrs.yeta.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.hrs.yeta.to
 * @Class HmDeptBean.java
 * @Create 2016. 10. 5
 * @Author 김봉진
 * @Description 부서테이블빈
 * @LastUpdated
 */
@Dataset(name = "dsHmDept")
@Getter
@Setter
@ToString
public class HmDeptBean extends BaseBean {
	private String deptCd, // 부서코드
			deptNm, // 부서명
			sectionManagerNm; // 상위부서

}
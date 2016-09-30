package com.seoulit.erp47.hrs.ret.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package com.seoulit.erp47.hrs.ret.to
 * @Class ReturnItemBean.java
 * @Create 2016. 9. 30.
 * @Author 김봉진
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsReturnItem")
public class ReturnItemBean extends BaseBean {
	String returnItemNo // 반납항목일련번호
			, returnYn // 반납여부
			, note // 비고사항
			, returnItemNm // 반납항목이름
			, responsivilityDept // 담당부서
			, confirmor // 확인자
			, empNo; // 사원번호
}

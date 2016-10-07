package com.seoulit.erp47.won.baseInfo.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.won.base.to
 * @Class    FeeBean.java
 * @Create   2016. 10. 4.
 * @Author   mickim
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name="dsFee")
public class FeeBean extends BaseBean{
	                                           
	private String feeCd,                       // 수가코드
	               feeNm,                       // 수가명
	               bigGrp,                       // 대분류
	               midGrp,                      // 중분류
	               smGrp,                       // 소분류
	               applyPridStartDate,          // 적용시작일
	               applyPridEndDate,            // 적용만료일
	               note,                        // 비고
	               cost;                        // 비용
}
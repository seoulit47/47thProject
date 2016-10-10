package com.seoulit.erp47.hrs.salBase.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.hrs.salBase.to
 * @Class    HobongBean.java
 * @Create   2016. 9. 26.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHobong")
public class HobongBean extends BaseBean{
    private String positionCd,             // 직급코드
		           hobong,                 // 호봉
		           basicSal,               // 기본급
		           gubhoAllowance,         // 급호수당
		           overWorkAllowance,      // 연장수당
		           applyStartDate;         // 적용시작
}

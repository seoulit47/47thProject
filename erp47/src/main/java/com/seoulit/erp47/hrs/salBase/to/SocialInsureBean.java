package com.seoulit.erp47.hrs.salBase.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.hrs.salBase.to
 * @Class    SocialInsureBean.java
 * @Create   2016. 10. 02.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsSocialInsur")
public class SocialInsureBean extends BaseBean{
	private String belongYear,      // 귀속년도
				   hit,             // 건강보험부담율
				   ltcir,           // 장기요양보험료율
				   npirr,           // 국민연금개인부담율
				   npbbr,           // 국민연금사업자부담율
				   hireInsurRate,   // 고용보험요율
				   safInsurRate;    // 산재보험율
}

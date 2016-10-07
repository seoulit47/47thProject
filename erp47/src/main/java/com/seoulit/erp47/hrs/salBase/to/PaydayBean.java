package com.seoulit.erp47.hrs.salBase.to;


import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.to
 * @Class    PaydayBean.java
 * @Create   2016. 5. 26.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsPayday")
public class PaydayBean extends BaseBean{
	private String belongYm,            // 귀속연월
			       paymentDate,         // 지급일자
			       sameTimePublish,     // 동시발행
			       targetChoice,        // 대상자선정
			       note,                // 비고
			       locationCode,        // 사업장
			       jobClass,            // 직종
			       salSact,             // 급여구분
			       salType;             // 급여형태
}

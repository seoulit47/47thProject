package com.seoulit.erp47.hrs.salBase.to;

import com.seoulit.erp47.common.annotation.Dataset;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.hrs.salBase.to
 * @Class    PaydaySubBean.java
 * @Create   2016. 10. 03.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsPaydaySub")
public class PaydaySubBean {
	private String belongYm,    // 귀속연월
                   dline,       // 마감상태
			       jobClass;    // 직종
}

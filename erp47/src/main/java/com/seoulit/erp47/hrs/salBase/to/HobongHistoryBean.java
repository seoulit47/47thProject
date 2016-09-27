package com.seoulit.erp47.hrs.salBase.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.hrs.salBase.to
 * @Class    HobongHistoryBean.java
 * @Create   2016. 9. 26.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHobongHistory")
public class HobongHistoryBean extends BaseBean{
    private String applyStartDate,   // 적용시작
		           applyEndDate,     // 적용종료
		           detailCode;       // 상세코드
}

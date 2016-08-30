package com.seoulit.erp47.sup.nutritive.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  	com.seoulit.erp47.sup.nutritive.to
 * @Class    	DCarteBean.java
 * @Create		2016. 08. 29
 * @Author   	YonG
 * @Description	기간별식단 Bean
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsDCarte")
public class DCarteBean extends BaseBean {
    private String
        breakfast1,       // 아침1
        lunch1,           // 점심1
        dinner1,          // 저녁1
        breakfast2,       // 아침2
        lunch2,           // 점심2
        dinner2,          // 저녁2
        breakfast3,       // 아침3
        lunch3,           // 점심3
        dinner3,          // 저녁3
        day1,             // 날짜1
        day2,             // 날짜2
        day3,             // 날짜3
        menuGrpCd;        // 식단분류코드
}

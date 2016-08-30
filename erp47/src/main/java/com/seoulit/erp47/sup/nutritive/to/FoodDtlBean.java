package com.seoulit.erp47.sup.nutritive.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  	com.seoulit.erp47.sup.nutritive.to
 * @Class    	FoodDtlBean.java
 * @Create		2016. 08. 29
 * @Author   	YonG
 * @Description	음식상세 Bean
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsFoodDtl")
public class FoodDtlBean extends BaseBean {
    private String
                    foodCd,             // 음식코드
                    ingredCd,           // 식재료
                    ingredNm,           // 식재료명
                    qty,                // 수량
                    unit,               // 단위
                    mainmenuYn;         // 주재료, 양념구분
}

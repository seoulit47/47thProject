package com.seoulit.erp47.sup.nutritive.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.sup.nutritive.to
 * @Class    DinnerBean.java
 * @Create   2016. 09. 05.
 * @Author   YonG
 * @Description   저녁 Bean
 *
 * @LastUpdated  
 * 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsDinner")
public class DinnerBean extends BaseBean {
    private String
        menuGrpCd,    // 식단분류코드
        carteDate,    // 식이개시일자 
        carteTime,    // 개시끼니
        rNum,         // 순번
        foodCd,       // 음식코드
        foodNm;       // 음식명
}

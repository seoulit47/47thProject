package com.seoulit.erp47.sup.drug.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  		com.seoulit.erp47.sup.drug.to
 * @Class    		MedInvenBean.java
 * @Create   		2016. 09. 21
 * @Author   		YonG
 * @Description   	약 재고 Bean
 *
 * @LastUpdated  
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsMed")
public class MedInvenBean extends BaseBean {
    private String
                    medInven,       //재고수량
                    fee,            //수가
                    medNm,          //약품명
                    medCd;          //약품코드
}

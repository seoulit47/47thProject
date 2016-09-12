package com.seoulit.erp47.sup.checkup.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.sup.checkup.to
 * @Class    ReducBean.java
 * @Create   2016. 09. 11.
 * @Author   김진환
 * @Description   감면 Bean
 *
 * @LastUpdated   2016. 09. 11. 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsReduc")
public class ReducBean extends BaseBean{
    private String
                    reducCd,            // 감면코드
                    reducNm,            // 감면명
                    reducAmt,           // 감면액
                    rateAmtDivCd,       // 비유금액 구분
                    useYn;              // 사용여부
}

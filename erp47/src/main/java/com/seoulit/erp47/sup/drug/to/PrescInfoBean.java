package com.seoulit.erp47.sup.drug.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  		com.seoulit.erp47.sup.drug.to
 * @Class    		PrescInfoBean.java
 * @Create   		2016. 09. 21.
 * @Author   		YonG
 * @Description   	처방정보 Bean
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsPrescInfo")
public class PrescInfoBean extends BaseBean {
    private String
                    feeCd,         // 수가코드
                    feeNm,         // 수가명
                    prescDate,     // 처방일자
                    patNo,         // 환자번호
                    diseaseCd,     // 질병코드
                    diseaseNm;     // 질병명
}


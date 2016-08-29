package com.seoulit.erp47.sup.drug.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  	com.seoulit.erp47.sup.drug.to
 * @Class    	MedicationPrescBean.java
 * @Create   	2016. 08. 29
 * @Author   	YonG
 * @Description	약 조제 Bean
 *
 * @LastUpdated  
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsMedicationPresc")
public class MedicationPrescBean extends BaseBean {
    private String 
                    patNo,              // 환자코드
                    prescDate,          // 처방일자
                    patNm,              // 환자명
                    flag,               // 병동, 외래 구분
                    medicationNo,       // 조제번호
                    medicationDay;      // 조제일자 
}

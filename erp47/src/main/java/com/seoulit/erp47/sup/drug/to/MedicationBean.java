package com.seoulit.erp47.sup.drug.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  	com.seoulit.erp47.sup.drug.to
 * @Class    	MedicationBean.java
 * @Create   	2016. 08. 29
 * @Author   	YonG
 * @Description	약품 Bean
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsMedication")
public class MedicationBean extends BaseBean {
    private String  
                    medicationDay,     // 조제일자
                    medicationQnt,     // 조제수량
                    flag,              // 병동/외래 구분
                    medicationNo ,     // 조제번호
                    patNo,             // 환자등록번호
                    medCd,             // 약품코드
                    prescDate,         // 처방일자
                    patNm,             // 환자명
                    medNm,             // 약품명
                    returner,          // 반품자
                    returnDate,        // 반품일자
                    returnQnt;         // 반품수량
}
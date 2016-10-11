package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    PrscBean.java
 * @Create   2016. 6. 18.
 * @Author   
 * @Description 진단서 TO
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsPrsc")
public class PrscBean extends BaseBean {
    private String prescNo,     // 진단서번호
                   patNo,       // 환자번호
                   prescDate,   // 작성일자
                   prescDoc;    // 
}

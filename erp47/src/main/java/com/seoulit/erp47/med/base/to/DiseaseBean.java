package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
/**
 * @Package  com.seoul.his.med.base.to
 * @Class    DiseaseBean.java
 * @Create   2016. 10. 3.
 * @Author   mickey
 * @Description 상병코드 TO 
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name="dsDisease")
public class DiseaseBean extends BaseBean {
    
    private String lv,          // 레벨
                   code,        // 상병코드
                   codeNm,      // 상병명
                   pCode;       // 분류코드

}

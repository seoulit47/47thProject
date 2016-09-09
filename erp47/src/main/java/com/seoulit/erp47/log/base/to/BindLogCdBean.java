package com.seoulit.erp47.log.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.log.base.to
 * @Class    BindLogCdBean.java
 * @Create   2016. 08. 26.
 * @Author   godseop
 * @Description 코드바인드
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsBindLogCd")
public class BindLogCdBean extends BaseBean {

    private String cdDiv,       // 코드구분
                   code,        // 코드
                   secCode,     // 검색조건 코드1
                   thrCode,     // 검색조건 코드2
                   cdNm,        // 코드명
                   dsLogName;   // 데이터셋명
    
}
package com.seoulit.erp47.log.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.log.base.to
 * @Class    OutLogCdBean.java
 * @Create   
 * @Author   김성호
 * @Description 바인드된 코드 출력용
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsOutLogCd")
public class OutLogCdBean extends BaseBean {

    private String code,    // 코드 
                   value;   // 코드명

}
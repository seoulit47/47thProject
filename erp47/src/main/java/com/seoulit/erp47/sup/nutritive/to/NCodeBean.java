package com.seoulit.erp47.sup.nutritive.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  	com.seoulit.erp47.sup.nutritive.to
 * @Class    	NCodeBean.java
 * @Create		2016. 08. 29
 * @Author   	YonG
 * @Description	식품코드 Bean
 *
 * @LastUpdated	
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsCode")
public class NCodeBean extends BaseBean {
    private String
                smallCode1,     // 소분류코드1
                fullName1,      // 코드전체명1
                smallCode2,     // 소분류코드2
                fullName2,      // 코드전체명2
                fullName,       // 소분류코드
                smallCode;      // 코드전체명
}
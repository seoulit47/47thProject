package com.seoulit.erp47.common.to;

import com.seoulit.erp47.common.annotation.Dataset;

import groovy.transform.ToString;
import lombok.Getter;
import lombok.Setter;

/**
 * @Package  com.seoulit.erp47.acc.vat.to
 * @Class    SearchConditionBean.java
 * @Create   2016. 08. 25.
 * @Author   YonG
 * @Description
 */

@Getter
@Setter
@ToString

@Dataset(name="dsSearchCondition")
public class SearchConditionBean extends BaseBean {
    
	private String tableName, 
	               columnName, 
	               columnValue, 
	               operator;
}
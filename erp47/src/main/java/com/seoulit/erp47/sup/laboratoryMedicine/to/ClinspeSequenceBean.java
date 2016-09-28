package com.seoulit.erp47.sup.laboratoryMedicine.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import groovy.transform.ToString;
import lombok.Getter;
import lombok.Setter;

/**
 * @Package  com.seoulit.erp47.sup.laboratoryMedicine.to
 * @Class    ClinspeSequenceBean.java
 * @Create   
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString

@Dataset(name="dsClinspeSequence")
public class ClinspeSequenceBean extends BaseBean {
	
	private String clinspeNo;  // 검체번호


}
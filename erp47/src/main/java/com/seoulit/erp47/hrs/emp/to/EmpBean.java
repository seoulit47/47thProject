package com.seoulit.erp47.hrs.emp.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.to
 * @Class    EmpBean.java
 * @Create   2016. 08. 26.
 * @Author   YonG
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "gdsEmp")
public class EmpBean extends BaseBean {

	private String 	empNo,		//사원번호
					empNm,		//사원명
					password;	//비밀번호
	
}
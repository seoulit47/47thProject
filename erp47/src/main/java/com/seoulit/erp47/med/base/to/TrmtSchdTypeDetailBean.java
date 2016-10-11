package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;




/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    TrmtSchdTypeDetailBean.java
 * @Create   
 * @Author   김성호
 * @Description 의사일정상세빈
 *
 * @LastUpdated
 */
@Dataset(name="dsTrmtSchdTypeDetail")
@Getter
@Setter
@ToString

public class TrmtSchdTypeDetailBean extends BaseBean{

	private String amFmDiv      ;  //오전오후구분
	private String time         ;  //시간
	private String handle       ;  //총원
	private String diffDeptReser;  //타과예약
	private String empNo        ;  //사원번호
	private String trmtTypeNo   ;  //진료타입번호
	private String dayOfWeek    ;  //요일



}

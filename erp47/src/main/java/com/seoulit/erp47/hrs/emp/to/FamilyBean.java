package com.seoulit.erp47.hrs.emp.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.to
 * @Class    FamilyBean.java
 * @Create   2016. 9. 07.
 * @Author   김봉진
 * @Description
 *		가족정보 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHmFamily")
public class FamilyBean extends BaseBean{

	String famSeq  //가족시퀀스
		  ,empNo   //사원번호
		  ,name    //성명
		  ,relt    //관계
		  ,spptYn  //부양여부
		  ,rrn;    //주민번호

}

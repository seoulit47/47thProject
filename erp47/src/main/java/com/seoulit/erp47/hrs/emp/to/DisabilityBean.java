package com.seoulit.erp47.hrs.emp.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.to
 * @Class    DisabilityBean.java
 * @Create   2016. 9. 07.
 * @Author   김봉진
 * @Description
 *		장애상태 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHmDisability")
public class DisabilityBean extends BaseBean{

	 String empNo
			,disabilityApvDay //장애인정일
			,disabilityApvDiv //장애인정구분
			,disabilityType   //장애유형
			,disabilitySeq    //장애시퀀스
			,disabilityGrade  //장애등급
			,intensiveYn      //중증여부
			,note;            //비고
	 
}

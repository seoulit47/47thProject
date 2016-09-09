package com.seoulit.erp47.hrs.emp.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.to
 * @Class    CareerBean.java
 * @Create   2016. 9. 07.
 * @Author   김봉진
 * @Description
 *		사원 커리어 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHmCareer")
public class CareerBean extends BaseBean{

	private String careerSeq,  //채용시퀀스
				   empNo,      //사원번호
			       joinDay,    //입사일
			       retireDay,  //퇴사일
			       workplace,  //근무지
			       respTask,   //담당업무
			       position;   //직급

}


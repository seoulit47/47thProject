package com.seoulit.erp47.hrs.emp.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.to
 * @Class    MilitaryBean.java
 * @Create   2016. 9. 07.
 * @Author   김봉진
 * @Description
 *		병력정보 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHmMilitary")
public class MilitaryBean extends BaseBean {

	 String empNo         	//사원번호
			,physiqueGrade 	//체격등위
			,mgroup        	//군별
			,branch         //병과
			,hierarachy     //계급
			,msn           	//군번
			,joinArmyDay    //입대일
			,dischargeDay   //전역일
			,militarySeq;	//병역시퀀스

}

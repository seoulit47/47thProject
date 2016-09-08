package com.seoulit.erp47.hrs.emp.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.to
 * @Class    PerconaldateBean.java
 * @Create   2016. 9. 07.
 * @Author   김봉진
 * @Description
 *		인적사항 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHmPerconaldate")
public class PerconaldateBean extends BaseBean{

	 String height           //신장
			,weight          //체중
			,eyeseght        //시력
			,colorblind      //색신
			,bloodType       //혈액형
			,medicalHistory  //의료기록
			,religion        //종교
			,empNo           //사번
			,hobby           //취미
			,talent          //특기
			,realestate      //부동산
			,lifeLevel       //생활정도
			,living          //주거
			,citizenship     //시민권
			,perresi         //영주권
			,ctyName;        //국명

}

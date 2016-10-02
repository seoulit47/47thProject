package com.seoulit.erp47.med.recipe.to;

import org.apache.ibatis.type.Alias;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


/**
 * @Package  com.seoul.his.med.recipe.to
 * @Class    MpSurgCdBean.java
 * @Create   2016. 6. 10.
 * @Author   Chun
 * @Description 수술코드 빈
 *
 * @LastUpdated
 */

@Setter
@Getter
@ToString
@Dataset(name = "dsMpSurgCd")
public class SurgCdBean extends BaseBean{
	String code;       //코드
	String codeDetail; //상세코드
	String codeRange;  //해당 수술 진료과
	String surgNm;     //수술명(영문)
	String surgName;   //수술명

}
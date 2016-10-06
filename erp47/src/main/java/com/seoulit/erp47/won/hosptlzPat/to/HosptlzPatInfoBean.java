package com.seoulit.erp47.won.hosptlzPat.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;




/**
 * @Package  com.seoul.his.won.hosptlzPat.to
 * @Class    HosptlzPatInfoBean.java
 * @Create   2016.10.06
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name="dsHosptlzPatInfo")
public class HosptlzPatInfoBean extends BaseBean{
	private String patNo               //환자등록번호
							,patNm             //환자이름
							,tel                   //환자연락처
							,hroom             //병실
							,ward               //병동
							,respDoctNm    //진료과명
							,trmtDeptNm   //담당의사명
							,dscgDate        //퇴원일시
							,hosptlzReceiptNo;  //입원접수번호

	
}

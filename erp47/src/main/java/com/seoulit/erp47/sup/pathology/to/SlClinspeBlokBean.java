package com.seoulit.erp47.sup.pathology.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name="dsSlClinspeBlok")
public class SlClinspeBlokBean extends BaseBean{
    
	private String clinspeNo,             // 검체번호
		           clinspeBlokCode,       // 검체블록코드
		           clinspeBlokProdDay,    // 검체블록 제작일
		           clinspeBlokProdTime,   // 검체블록 제작시간
		           clinspeBlokQnt,        // 수량
		           patNo,                 // 환자번호
		           patNm;                 // 환자명
}                                 

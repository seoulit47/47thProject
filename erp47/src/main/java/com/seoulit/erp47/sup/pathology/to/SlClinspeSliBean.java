package com.seoulit.erp47.sup.pathology.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name="dsSlClinspeSli")
public class SlClinspeSliBean extends BaseBean{
	
    private String clinspeNo,         // 검체번호 
		           clinspeBlokCode,   // 검체블록 코드
		           sliCode,           // 슬라이드 코드 
		           sliProdDay,        // 슬라이드 제작일
		           sliQnt,            // 슬라이드 수량
		           sliCon;            // 슬라이드 내용
}

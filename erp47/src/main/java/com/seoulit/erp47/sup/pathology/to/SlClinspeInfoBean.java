package com.seoulit.erp47.sup.pathology.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name="dsSlClinspeInfo")
public class SlClinspeInfoBean extends BaseBean{
	
    private String clinspeNo     // 검체번호
		   ,bloodGetDate         // 체혈일
		   ,bloodGetEmp          // 체혈자
		   ,exmntCd              // 검사코드
		   ,trmtDept             // 진료과
		   ,respDoct             // 처방의 
		   ,clinspeBlokCode      // 검체블록코드
		   ,clinspeBlokProdDay   // 검체블록 제작일
		   ,clinspeBlokProdTime  // 검체블록 제작시간
		   ,clinspeBlokQnt       // 검체블록 수량
		   ,sliCode              // 슬라이드 코드
		   ,sliProdDay           // 슬라이드 제작일
		   ,sliQnt               // 슬라이드 수량 
		   ,sliCon               // 슬라이드 내용
		   ,patNo                // 환자번호 
		   ,patNm;               // 환자명
}

package com.seoulit.erp47.won.hosptlzPat.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



/**
 * @Package  com.seoul.his.won.hosptlzPat.to
 * @Class    HosptlzTrmtCostReceReceiptBean.java
 * @Create   2016.6.29
 * @Author   hwang
 * @Description
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name="dsHosptlzTrmtCostReceReceipt")
public class HosptlzTrmtCostReceReceiptBean extends BaseBean{

	private String patNo              // 환자등록번호
				 , patNm              // 환자이름
				 , patType            // 환자유형
				 , ward               // 병동
				 , hroom              // 병실
				 , hosptlzDate        // 입원일자
				 , dscgDate           // 퇴원일자
				 , docCost            // 진찰료
				 , hroomCost          // 병실료
				 , medCost            // 약제료
				 , injecCost          // 주사료
				 , radiationCost      // 영상진단 및 방사선 치료
				 , physicalCost       // 재활 및 물리치료
				 , memtalCost         // 정신요법료
				 , operCost           // 처치 및 수술료
				 , waveImgCost        // 초음파 영상료
				 , materialCost       // 치료재료
				 , waveCheckCost      // 초음파 검사료
				 , clinicCost         // 치과처치 및 수술료
				 , nonSal             // 비급여
				 , receType           // 수납유형
				 , recp               // 수납자
				 , year               // 년도
				 , month              // 월
				 , day;               // 일

	

}

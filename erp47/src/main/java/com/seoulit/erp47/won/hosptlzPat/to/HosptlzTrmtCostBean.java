package com.seoulit.erp47.won.hosptlzPat.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


/**
 * @Package  com.seoul.his.won.hosptlzPat.to
 * @Class    HosptlzTrmtCostBean.java
 * @Create   2016.10.06
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name="dsHosptlzTrmtCost")
public class HosptlzTrmtCostBean extends BaseBean{

	private String hosptlzTrmtCostSeq		// 입원진료비 일련번호
				 , hosptlzReceiptNo			// 입원접수번호
				 , patNo					// 환자등록번호
				 , exmntAtc					// 검사항목
				 , sal						// 급여
				 , nonSal;					// 비급여

	

}

package com.seoulit.erp47.won.hosptlzPat.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.won.hosptlzPat.to
 * @Class    HosptlzPatReceBean.java
 * @Create   2016.10.06
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name="dsHosptlzPatRece")
public class HosptlzPatReceBean extends BaseBean{

	private String receState          // 수납상태
				 , receDate           // 수납일자
				 , receType           // 수납유형
				 , receAmt            // 수납금액
				 , hosptlzReceiptNo   // 입원접수번호
				 , alrdReceAmt        // 기수납액
				 , recp               // 수납자
				 , procWorker         // 처리자
				 , outAmt;			  // 미수금액

	
}

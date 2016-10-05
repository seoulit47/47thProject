package com.seoulit.erp47.sup.laboratoryMedicine.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import groovy.transform.ToString;
import lombok.Getter;
import lombok.Setter;

/**
 * @Package  com.seoulit.erp47.sup.laboratoryMedicine.to
 * @Class    ClinspeDeliveryBean.java
 * @Create   
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString

@Dataset(name="dsClinspeDelivery")
public class ClinspeDeliveryBean extends BaseBean{
	
	private String clinspeNo,              // 검체번호
				   clinspeReceiptDate,     // 검체접수일
	               deliveryDate,		   // 전달날짜
	               bloodgetDate,           // 채취일시
	               bloodgetEmp,            // 채취자
	               empNo,					// 담당자번호
	               empNm,					// 담당자성함
	               exmntCd,					// 검사항목
	               clinspeNm,				// 검체명
	               emeYn,					// 응급여부
	               clinspeStatus;			// 검체상태
}
package com.seoulit.erp47.sup.laboratoryMedicine.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import groovy.transform.ToString;
import lombok.Getter;
import lombok.Setter;

/**
 * @Package  com.seoulit.erp47.sup.laboratoryMedicine.to
 * @Class    ClinspeReceiptBean.java
 * @Create   
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString

@Dataset(name="dsClinspeReceipt")
public class ClinspeReceiptBean extends BaseBean{
	
	private String clinspeNo,              // 검체번호
	               clinspeReceiptDate,     // 검체접수일
	               receiptCd,              // 접수구분
	               emeYn,                  // 응급여부
	               receiptCancelCau,       // 접수취소사유
	               receiptCancelDate,      // 접수취소일
	               dgnsNm,                 // 
	               exmntCd,                // 검사항목
	               clinspeNm,              // 검체명
	               bloodgetDate,           // 채취일시
	               bloodgetEmp;            // 채취자

}
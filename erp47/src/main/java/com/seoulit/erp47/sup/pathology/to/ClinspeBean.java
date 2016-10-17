package com.seoulit.erp47.sup.pathology.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import groovy.transform.ToString;
import lombok.Getter;
import lombok.Setter;

/**
 * @Package  com.seoul.his.sup.laboratoryMedicine.to
 * @Class    ClinspeBean.java
 * @Create   2016. 5. 26.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString

@Dataset(name="dsClinspe")
public class ClinspeBean extends BaseBean{

    	private String prescNo,        // 처방번호
    	               trmtDept,       // 진료과
    	               receiptCd,      // 접수구분
    	               respDoct,       // 진료의사
    	               dgnsNm,         //
    	               exmntCd,        // 검사항목
    	               clinspeNm,      // 검체명
    	               bloodgetDate,   // 채취일시
    	               bloodgetEmp,    // 채취자
    	               clinspeNo,      // 검체번호
    	               patNo,          // 환자등록번호
    	               patNm,          // 환자명
    	               gender,         // 성별
    	               ward,           // 병동
    	               hroom,          // 병실
    	               clinspeBlokCode, // 검체블록코드
    	               clinspeStatus;	//검체상태
}
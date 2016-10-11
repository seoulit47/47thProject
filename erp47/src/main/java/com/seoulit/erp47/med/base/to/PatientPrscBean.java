package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    PatientPrcsBean.java
 * @Create   2016. 5. 26.
 * @Author   
 * @Description PatientPrsc(Patient Prescription) 환자처방 TO
 *      inpatient(입원환자) & outpatient(외래환자) 같이 사용
 *      입원환자 - 입원접수번호, 퇴원일자, 퇴원구분
 *      외래환자 - 외래접수번호
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name="dsPatientPrsc")
public class PatientPrscBean extends BaseBean {

     private String patNo,                 //환자등록번호
                    prescDate,             //처방일
                    diseaseCd,             //상병코드
                    diseaseNm,             //상병명
                    dept,                  //과
                    receiptNo,             //입원&외래접수번호
                    hosptlzReceiptNo,      //입원접수번호
                    outpaReceiptNo,        //외래접수번호
                    feeCd,                 //수가코드
                    feeNm,                 //수가명칭
                    bigGrp,                //대분류
                    midGrp,                //중분류
                    smGrp,                 //소분류
                    cost,                  //비용
                    uniqueNtc,             //특이사항
                    dscgDate,              //퇴원일자
                    dscgGubun,             //퇴원구분
                    prescGubun,            //처방구분
                    prescNo,               //처방번호
                    medicationYn,          //조제여부
                    medicationNo,          //조제번호
                    doctNm;                //담당의
}

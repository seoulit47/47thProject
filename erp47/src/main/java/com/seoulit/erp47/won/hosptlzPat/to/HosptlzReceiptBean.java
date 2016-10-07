package com.seoulit.erp47.won.hosptlzPat.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



/**
 * @Package  com.seoul.his.won.hosptlzPat.to
 * @Class    HosptlzReceiptBean.java
 * @Create   2016.10.06
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name="dsHosptlzReceipt")
public class HosptlzReceiptBean extends BaseBean{
	private String ward                           //병동
				   ,rship                         //관계
                   ,patNo                         //환자등록번호
                   ,outpaReceiptNo                //외래접수번호
                   ,hroom                         //병실
                   ,hosptlzRsvtYb                 //입원예약여부
                   ,hosptlzRoute                  //입원경로
                   ,hosptlzReceiptNo              //입원접수번호
                   ,hosptlzDate                   //입원일시
                   ,grtorTel                      //보증인연락처
                   ,grtorRrn                      //보증인주민번호
                   ,grtorNm                       //보증인성명
                   ,grtorAddr                     //보증인주소
                   ,dscgDiv                       //퇴원구분
                   ,dscgDate                      //퇴원일시
                   ,trmtDeptNm                    //진료과명
                   ,trmtDeptCd                    //진료과코드
                   ,respDoctNm                    //담당의사이름
                   ,respDoctCd                    //담당의사코드
                   ,patTypeNm                     //환자유형명
                   ,patTypeCd                     //환자유형코드
                   ,patRship;                     //환자와의 관계

}

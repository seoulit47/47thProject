package com.seoulit.erp47.log.demd.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.log.demd.to
 * @Class    GdsAnspHistBean.java
 * @Create   2016. 7. 6.
 * @Author   Bohyun
 * @Description 물품청구상세 빈
 *
 * @LastUpdated 
 */
@ToString
@Getter
@Setter
@Dataset(name = "dsGdsAnspHist")
public class GdsAnspHistBean extends BaseBean{

    String
    gdsAnspNo,       //물품청구번호
    anspHistNo,      //청구내역번호
    gdsCd,           //물품코드
    gdsNm,           //물품명
    unit,            //단위
    price,           //단가
    amt,             //청구금액
    histAnspQnt,     //수량
    histAnspDiv,     //청구구분
    histRlsWh,       //출고창고
    histAnspCon,     //청구내용
    histRespoWorker; //청구담당자



}















package com.seoulit.erp47.acc.closing.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsClosData")
public class ClosDataBean extends BaseBean {
    String  artiCd         	 //항목코드
            ,artiNm          //항목명 
            ,amt             //총액
            ,sumAmt          //합계총액
            ,jourAmt         //분개총액
            ,cellInputDiv    //셀입력구분
            ,autoCalYn       //
            ,sumArtiCd       //합계항목코드
            ,deductYn		 //공제여부
            ,level;          //수준
    
}
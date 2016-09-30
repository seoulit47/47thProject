package com.seoulit.erp47.log.csr.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Dataset(name="dsSplyRmSetCpntHist")
@Setter
@Getter
@ToString
public class SplyRmSetCpntHistBean extends BaseBean{
    private String bigGrpCd   //대분류코드
                  ,cpntHistNo //구성내역번호
                  ,fmCd       //품목코드
                  ,fmNm       //품명
                  ,midGrpCd   //중분류코드
                  ,qnt        //수량
                  ,setCd      //SET코드
                  ,smGrpCd    //소분류코드
                  ,stand      //규격
                  ,unit;      //단위
}

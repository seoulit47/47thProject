package com.seoulit.erp47.acc.closing.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsClosAcnt")
public class ClosAcntBean extends BaseBean{
    String  artiCd      ,  //항목코드
            creDebDiv   ,  //대차구분
            debAmt      ,  //의무총액
            creAmt      ,  //대차총액
            acntCd      ,  //계정코드
            accPrid     ,  //계정기간
            acntNm      ,  //계정명
            acntAbs     ,  //계정적요
            closYb      ,  //결산여부
            gipyoDate   ;  //
}

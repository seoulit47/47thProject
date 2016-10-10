package com.seoulit.erp47.log.inpt.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.log.inpt.to
 * @Class    CtrtInfoDetailBean.java
 * @Create   
 * @Author   김성호
 * @Description 계약관리 빈
 *
 * @LastUpdated 
 * 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsCtrtInfoDetail")
public class CtrtInfoDetailBean extends BaseBean{
    private String
    ctrtDate
    ,ctrtSeq
    ,gdsCd
    ,gdsNm
    ,receiptNo
    ,ctrtQnt
    ,ctrtPrice
    ,ctrtAmt
    ,gdsStand
    ,cngQnt
    ,accYear
    ,asstSubCd
    ,mngntAtcCode
    ,ordUnit
    ,ctrtNo
    ,demdDate
    ,demdSeq
    ,deptCd
    ,respoWorker
    ,nsBo
    ,acntSeq
    ,subul;
}

package com.seoulit.erp47.log.inpt.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.log.inpt.to
 * @Class    GdsInpt.java
 * @Create   
 * @Author   김성호
 * @Description 계약관리 빈
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsGdsInpt")
public class GdsInptBean extends BaseBean{
    private String 
    amt
    ,ctrtNo
    ,delayDays
    ,delayGijunPay
    ,delayPrzAmt
    ,delayRate
    ,delivDay
    ,gdsInptNo
    ,inptDate;
}

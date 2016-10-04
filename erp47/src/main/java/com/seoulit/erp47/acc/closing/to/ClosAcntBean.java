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
    String  artiCd      ,  
            creDebDiv   ,  
            debAmt      ,  
            creAmt      ,  
            acntCd      ,  
            accPrid     ,  
            acntNm      ,  
            acntAbs     ,  
            closYb      ,  
            gipyoDate   ;  
}

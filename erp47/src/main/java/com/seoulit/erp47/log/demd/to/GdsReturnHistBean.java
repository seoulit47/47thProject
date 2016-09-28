package com.seoulit.erp47.log.demd.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsGdsReturnHist")
public class GdsReturnHistBean extends BaseBean{
    String gdsCd;
    String gdsNm;
    String unit;
    String qnt;
    String returnDate;
    String returnSeq;
    String returnHistSeq;
    
    
}

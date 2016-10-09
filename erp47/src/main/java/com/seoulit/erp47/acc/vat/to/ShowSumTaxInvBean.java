package com.seoulit.erp47.acc.vat.to;

import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString

public class ShowSumTaxInvBean extends BaseBean{
    private String  operSeq
                    ,hosptlzNm
                    ,ceo
                    ,nd
                    ,event
                    ,operAddr
                    ,custStartPrid
                    ,custEndPrid
                    ,writeDay
                    ,totalTaxInvCount
                    ,totalCount
                    ,totalTaxAmt
                    ,totalSplyPrice;
}

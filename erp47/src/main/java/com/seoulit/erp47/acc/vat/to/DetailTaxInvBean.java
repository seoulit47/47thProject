package com.seoulit.erp47.acc.vat.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Dataset(name = "dsDetailTaxInv")
public class DetailTaxInvBean extends BaseBean{
    private String  no           ,    // 순번
                    pubDate      ,    // 발행일자
                    fm           ,    // 품목
                    stand        ,    // 규격
                    qnt          ,    // 수량
                    price        ,    // 단가
                    taxAmt       ,    // 세액
                    splyPrice    ,    // 공급가액
                    dedYN        ,    // 공제여부
                    pubNo        ;    // 발행번호

}

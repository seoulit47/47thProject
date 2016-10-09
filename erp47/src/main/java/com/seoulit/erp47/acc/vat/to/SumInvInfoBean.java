package com.seoulit.erp47.acc.vat.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Dataset(name = "dsSumInvInfo")
public class SumInvInfoBean extends BaseBean{
    private String  custCd        ,    // 거래처코드
                    splyPrice     ,    // 공급가액
                    invCount      ;    // 매수
}

package com.seoulit.erp47.acc.closing.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsFinanStats")
public class FinanStatsBean extends BaseBean {
    String  artiCd,      //항목코드
            artiNm,      //항목명
            dangiAmt,    //단기총액
            dangiSum,    //단기합계액
            jungiAmt,    //전기총액 
            jungiSum,    //전기합계액
            level,       //수준
            acntDiv;     //항목구분
}
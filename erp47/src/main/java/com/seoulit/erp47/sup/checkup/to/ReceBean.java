package com.seoulit.erp47.sup.checkup.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.sup.checkup.to
 * @Class    ReceBean.java
 * @Create   2016. 6. 5.
 * @Author   한수정
 * @Description   수납 Bean
 *
 * @LastUpdated   2016. 7. 4. 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsRece")
public class ReceBean extends BaseBean {
    private String 
                    rsvtNo,            // 예약번호
                    seq,               // 수납순번
                    receDate,          // 수납일자
                    befReceAmt,        // 이전수납금액
                    payAmt,            // 결제금액
                    cardCashDiv,       // 지불구분코드
                    aprvNo,            // 승인번호
                    inspDate,          // 검사날짜
                    aprvDate,          // 승인날짜
                    cardCd,            // 카드구분코드
                    cardNo,            // 신용카드번호
                    valPrid,           // 유효기간
                    instmPrid,         // 할부기간
                    cashAprvData,      // 현금승인 입력자료 
                    cashAprvDivCd,     // 현금승인 구분
                    cancelYn,          // 취소여부
                    userId,            // 사용자아이디
                    userIp;            // 사용자아이피
}
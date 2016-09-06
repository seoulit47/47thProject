package com.seoulit.erp47.sup.checkup.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.erp47.sup.checkup.to
 * @Class    ChoInspBean.java
 * @Create   2016. 09. 05.
 * @Author   김진환
 * @Description   선택검사 Bean
 *
 * @LastUpdated   2016. 09. 05. 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsChoInsp")
public class ChoInspBean extends BaseBean {
    private String 
                    rsvtNo,         // 예약번호
                    inspCd,         // 검사코드
                    inspNm,         // 검사명
                    qnt,            // 수량
                    amt,            // 검사금액
                    inspPlnDate,    // 검사예정일
                    userId,         // 사용자ID
                    userIp;         // 사용자IP
}

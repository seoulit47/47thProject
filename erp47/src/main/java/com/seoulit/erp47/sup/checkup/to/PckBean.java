package com.seoulit.erp47.sup.checkup.to;


import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.sup.checkup.to
 * @Class    PckBean.java
 * @Create   2016. 09. 05.
 * @Author   김진환
 * @Description   패키지 Bean
 *
 * @LastUpdated   2016. 09. 05. 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsPck")
public class PckBean extends BaseBean {
    private String 
                    pckCd,          // 패키지 코드
                    pckNm,          // 패키지명
                    genderCd,       // 성별
                    amt,            // 패키지 금액
                    inspDivCd,      // 검사구분코드
                    useYn,          // 사용여부
                    userId,         // 사용자 아이디
                    userIp;         // 사용자 아이피
}

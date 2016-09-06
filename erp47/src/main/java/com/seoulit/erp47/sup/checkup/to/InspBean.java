package com.seoulit.erp47.sup.checkup.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.erp47.sup.checkup.to
 * @Class    InspBean.java
 * @Create   2016. 09. 05.
 * @Author   김진환
 * @Description   검사 Bean
 *
 * @LastUpdated   2016. 09. 05. 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsInsp")
public class InspBean extends BaseBean {
    private String
                    rsvNo,           // 예약번호
                    inspCd,          // 검사코드
                    inspNm,          // 검사명
                    ocsCd,           // 처방전달코드
                    ocsNm,           // 처방명
                    rsltDeptCd,      // 결과부서코드
                    rsltDeptNm,      // 결과부서명
                    ocsDivCd,        // OCS전달구분코드
                    amt,             // 검사금액
                    useYn,           // 사용여부
                    userId,          // 사용자ID
                    userIp,          // 사용자IP
                    pckCd;           // 패키지코드
}
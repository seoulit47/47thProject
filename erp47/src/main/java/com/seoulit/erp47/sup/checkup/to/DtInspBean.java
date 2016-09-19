package com.seoulit.erp47.sup.checkup.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.sup.checkup.to
 * @Class    DtInspBean.java
 * @Create   2016. 09. 18.
 * @Author   김진환
 * @Description   세부검사 Bean
 *
 * @LastUpdated   2016. 09. 18. 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsDtInsp")
public class DtInspBean extends BaseBean {
    private String
                    inspCd,             // 검사코드
                    dtInspCd,           // 세부검사코드
                    dtInspNm,           // 세부검사명
                    unit,               // 단위
                    genderCd,           // 성별코드
                    ocsCd,              // 처방전달코드
                    ocsNm,              // 처방명
                    refHighFig,         // 참고치(상한)
                    refLowFig,          // 참고치(하한)
                    runYn,              // 검사실행여부
                    userId,             // 사용자ID
                    userIp;             // 사용자IP
}
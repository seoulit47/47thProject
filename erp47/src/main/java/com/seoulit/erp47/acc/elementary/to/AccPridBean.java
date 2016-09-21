package com.seoulit.erp47.acc.elementary.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsAccPrid")
public class AccPridBean extends BaseBean{
    private String accPrid,       // 회계기수
                   startDate,     // 시작일자
                   endDate,       // 종료일자
                   dlineYn,       // 마감여부
                   dlineDate,     // 마감일자
                   dlineManCd,    // 마감자코드
                   dlineMan,      // 마감자이름
                   carrforYn,     // 이월여부
                   carrforManCd,  // 이월자코드
                   carrforMan,    // 이월자이름
                   carrforDate,   // 이월일자
                   finanStatsNm,
                   userId,
                   userIp;
}

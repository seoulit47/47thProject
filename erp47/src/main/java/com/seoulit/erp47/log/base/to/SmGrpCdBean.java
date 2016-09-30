package com.seoulit.erp47.log.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoul.his.log.base.to
 * @Class SmGrpCdBean.java
 * @Create 
 * @Author 김성호
 * @Description 물품분류코드-소분류
 *
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsSmGrpCd")
public class SmGrpCdBean extends BaseBean {
    private String smGrpCd,         // 소분류코드
                   smGrpCdNm,       // 소분류코드명
                   useYb,           // 사용여부
                   userRegPossYb,   // 사용자등록가능여부
                   regWorkerId,     // 등록자ID
                   regWorkerIp,     // 등록자IP
                   regDate,         // 등록일시
                   modWorkerId,     // 수정자ID
                   modWorkerIp,     // 수정자IP
                   modDate,         // 수정일시
                   bigGrpCd,        // 대분류코드
                   midGrpCd;        // 중분류코드
}
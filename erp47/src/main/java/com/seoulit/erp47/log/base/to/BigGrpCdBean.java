package com.seoulit.erp47.log.base.to;

import java.util.List;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.annotation.Remove;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.log.base.to
 * @Class    BigGrpCdBean.java
 * @Create   
 * @Author   김성호
 * @Description 물품분류코드-대분류
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsBigGrpCd")
public class BigGrpCdBean extends BaseBean {
    private String bigGrpCd,        // 대분류코드
                   bigGrpNm,        // 대분류명
                   grpDiv,          // 분류구분
                   useYb,           // 사용여부
                   userRegPossYb,   // 사용자등록가능여부
                   regWorkerId,     // 등록자ID
                   regWorkerIp,     // 등록자IP
                   regDate,         // 등록일시
                   modWorkerId,     // 수정자ID
                   modWorkerIp,     // 수정자IP
                   modDate;         // 수정일시

    private List<MidGrpCdBean> midGrpCdList; // 중분류코드 목록


    @Remove
    public List<MidGrpCdBean> getMidGrpCdList() {
        return midGrpCdList;
    }

    @Remove
    public void setMidGrpCdList(List<MidGrpCdBean> midGrpCdList) {
        this.midGrpCdList = midGrpCdList;
    }

}

package com.seoulit.erp47.med.base.to;

import java.util.List;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.annotation.Remove;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoulit.erp47.med.base.to
 * @Class TrmtSchdTypeBean.java
 * @Create 
 * @Author 김성호
 * @Description 의사일정타입
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsTrmtSchdType")
public class TrmtSchdTypeBean extends BaseBean {

    String empNo; // 사원번호
    String empNm; // 사원명
    String trmtTypeNo; // 진료타입번호
    String trmtTypeNm; // 진료타입명
    String amUseYn = "0"; // 오전사용여부
    String fmUseYn = "0"; // 오후사용여부
    String amStime; // 오전시작
    String amEtime; // 오전끝
    String fmStime; // 오후시작
    String fmEtime; // 오후끝
    String amIntv; // 오전간격
    String fmIntv; // 오후간격
    String amHandle; // 오전총원
    String diffDeptReser = "0"; // 타과예약
    String fmHandle; // 오후총원
    String sun = "0"; // 일
    String mon = "0"; // 월
    String tue = "0"; // 화
    String wed = "0"; // 수
    String thurs = "0"; // 목
    String fri = "0"; // 금
    String sat = "0"; // 토
    List<TrmtSchdTypeDetailBean> trmtSchdTypeDetailList;

    @Remove
    public List<TrmtSchdTypeDetailBean> getTrmtSchdTypeDetailList() {
        return trmtSchdTypeDetailList;
    }

    @Remove
    public void setTrmtSchdTypeDetailList(List<TrmtSchdTypeDetailBean> trmtSchdTypeDetailList) {
        this.trmtSchdTypeDetailList = trmtSchdTypeDetailList;
    }

}
